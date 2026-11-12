import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const auditRoot = fileURLToPath(new URL('./reference-audit', import.meta.url));

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.json': 'application/json',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.md': 'text/markdown; charset=utf-8',
};

/**
 * Serves reference-audit/ (original assets, preserved filenames) in dev and
 * copies reference-audit/assets into dist/ for the production build.
 *
 * Assets are referenced by absolute URLs (/reference-audit/assets/...) so they
 * resolve from nested SPA routes. Only assets are published — audit markdown
 * and measurement JSON stay out of the build.
 */
function referenceAuditAssets() {
  let outDir = path.resolve('dist');

  return {
    name: 'reference-audit-assets',

    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = (req.url || '').split('?')[0].split('#')[0];

        if (!pathname.startsWith('/reference-audit/')) {
          next();
          return;
        }

        let relative;
        try {
          relative = decodeURIComponent(pathname.slice('/reference-audit/'.length));
        } catch {
          res.statusCode = 400;
          res.end('Bad request');
          return;
        }

        const file = path.resolve(auditRoot, relative);
        const withinRoot = file === auditRoot || file.startsWith(auditRoot + path.sep);

        if (!withinRoot) {
          res.statusCode = 403;
          res.end('Forbidden');
          return;
        }

        fs.stat(file, (err, stat) => {
          if (err || !stat.isFile()) {
            next();
            return;
          }

          res.setHeader('Content-Type', MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
          res.setHeader('Cache-Control', 'no-cache');
          fs.createReadStream(file).pipe(res);
        });
      });
    },

    closeBundle() {
      const source = path.join(auditRoot, 'assets');
      const destination = path.join(outDir, 'reference-audit', 'assets');

      if (!fs.existsSync(source)) return;
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.cpSync(source, destination, { recursive: true });
    },
  };
}

// Aliases:
//  @      -> src        (components, pages, data, styles, animations)
//  @audit -> reference-audit (single source of truth: original assets/fonts read in place,
//            never copied into src/ — avoids asset duplication and filename drift)
export default defineConfig({
  plugins: [react(), referenceAuditAssets()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@audit': fileURLToPath(new URL('./reference-audit', import.meta.url)),
    },
  },
  // Dev server: SPA fallback so /work/:slug routes resolve on hard refresh.
  server: {
    host: true,
  },
});
