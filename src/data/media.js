/**
 * media.js — image & media handling (Phase 2, task 9).
 *
 * Facts from reference-audit/asset-inventory.json (Phase 1):
 *  - 158 images downloaded with ORIGINAL filenames preserved (framerusercontent names).
 *  - 0 video assets (mp4/webm/gif/svg) exist across all 14 routes (verified negative, §X2).
 *  - Runtime srcset params (?width=N) were NOT enumerated (§X1) — therefore this module
 *    serves the base files only. No invented srcset widths.
 *
 * Assets are read in place from reference-audit/assets/images — never copied into src/.
 */
import { projects, featuredCase } from './projects.js';

// Absolute path: required so nested SPA routes (/work/:slug) resolve images too.
// A Vite plugin (vite.config.js) serves /reference-audit/* in dev and copies
// reference-audit/assets into dist/ at build.
const BASE = '/reference-audit/assets/images/';

/** Resolve a reference filename to its local path (original filename preserved). */
export const img = (filename) => BASE + filename;

// SVG assets live in their own folder (reference-audit/assets/svg/) — used by the
// trusted-by logo strip where the reference loads raw .svg files as <img> sources.
const SVG_BASE = '/reference-audit/assets/svg/';

/** Resolve an SVG filename to its local path (original filename preserved). */
export const svgUrl = (filename) => SVG_BASE + filename;

/**
 * Trusted-by logo src resolver: items declare `kind: 'svg' | 'img'`
 * (see home.js → trustedBy). 'svg' files live in assets/svg/, everything else
 * (including .svg files placed in assets/images/) resolves through img().
 */
export const trustedBySrc = (item) =>
  item.kind === 'svg' ? svgUrl(item.src) : img(item.src);

/**
 * Known image metadata (natural dimensions) for the images already used in Phase 2
 * components. Sourced from asset-inventory.json — used for width/height attributes
 * to prevent layout shift. Not a full registry: extend as Phase 3 adopts more images.
 */
export const imageMeta = {
  // Natural pixel dimensions from reference-audit/asset-inventory.json (NOT rendered sizes).
  'RyTIDibqosLDiLqwTKVG5WoKhfs.jpg': { width: 4053, height: 2424 },
  'WfDIJ0KRJ019FAQYHr30yJGl0c.jpg': { width: 5184, height: 3456 },
  'bin6vivTjf7oNqgZMr51mPIBpjk.jpg': { width: 6000, height: 3375 },
  '9tIFy4oKAd2vcgl4koydzlYQ8.png': { width: 2836, height: 1916 },
  'lv3wcLxp8pEqp1ULaO7iCuw1yY.png': { width: 3306, height: 2162 },
  'R7rQf0AvfN1p4v7gOUF2CeAQcTU.jpg': { width: 3220, height: 2147 },
  'I83GiBzRWojsWdPiJb07EL4GQs.jpg': { width: 4204, height: 2363 },
  'oAoXRhotsUEqkLRTjCd33QfW7AQ.png': { width: 1920, height: 1080 },
  '0HVYUWJokoUFdCX48O2kjB4QiJA.png': { width: 5184, height: 3456 },
  'KP9PFiT6LM2hIfGv1QlkurqRGc.png': { width: 1920, height: 1080 },
  'XFCcAHWT01IfOD6nXF7xn2DFdM.png': { width: 5500, height: 3668 },
};

/** Full asset inventory (imported lazily by build scripts / QA, not by runtime components). */
export const inventoryPath = '../reference-audit/asset-inventory.json';

/** Projects with their resolved image src — content joined with media at the data layer. */
export const projectsWithMedia = projects.map((p) => ({
  ...p,
  imageSrc: img(p.image),
  imageMeta: imageMeta[p.image] || null,
}));

export const featuredCaseWithMedia = {
  ...featuredCase,
  imageSrc: img(featuredCase.image),
  imageMeta: imageMeta[featuredCase.image] || null,
};

/**
 * Image component contract (implemented in Phase 3):
 *  - always renders alt text from content (never empty unless decorative)
 *  - width/height from imageMeta when known (CLS prevention)
 *  - object-fit/position come from component CSS (cover, 50% 50% — verified)
 *  - NO invented srcset/sizes; add only when §X1 is resolved
 */
