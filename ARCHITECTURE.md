# Architecture — sandeep.design replica (Phase 2)

**Status:** Phase 2 design system + component architecture complete. **Home** and the
`/work` list shell are composed; `/about` and the case-study pages are intentional
stubs. **No further page implementation has begun — this document is the approval
gate before Phase 3.**

Single source of truth for every value: [`reference-audit/`](./reference-audit).
No colour, type, spacing or motion value below was invented; where the reference
could not be verified it is left unimplemented and listed in
[§14 UNVERIFIED](#14-unverified--deferred-to-phase-3) / `reference-audit/UNVERIFIED-VALUES.md`.

---

## 1. Stack & commands

| | |
|---|---|
| Build | Vite 5 (`@vitejs/plugin-react`) |
| UI | React 18 (function components + hooks) |
| Language | JavaScript (no TypeScript) |
| Routing | `react-router-dom` v6 (`BrowserRouter`) |
| Styling | Plain CSS with custom properties (no preprocessor, no CSS-in-JS, no utility framework) |
| Fonts | Reference webfonts served from `reference-audit/assets/fonts` |

```
npm install      # done
npm run dev      # Vite dev server (SPA fallback; /reference-audit/* middleware)
npm run build    # → dist/ (61 kB gzip JS, 17 kB gzip CSS) + reference-audit/assets
npm run preview
```

The stack was chosen to reproduce Framer's *output* faithfully (hand-authored CSS
against measured computed styles) rather than to introduce a design system of its own.

---

## 2. Project structure

```
.
├─ index.html
├─ vite.config.js              # @ → src, @audit → reference-audit, reference-audit asset plugin
├─ ARCHITECTURE.md             # ← this file
├─ reference-audit/            # Phase 0+1 audit = single source of truth (never edited by the app)
│   ├─ assets/images|fonts|icons (original filenames)
│   ├─ reference-screenshots/  # visual QA targets
│   ├─ design-tokens.json · typography.md · layout-measurements.json
│   ├─ dom-structure.md · animation-inventory.md · responsive-breakpoints.md
│   ├─ asset-inventory.json · UNVERIFIED-VALUES.md
└─ src/
   ├─ main.jsx                 # entry; CSS import order (see §6)
   ├─ App.jsx                  # route table
   ├─ animations/              # Appear, ScrollToTop, presets, easings, keyframes.css
   ├─ components/
   │   ├─ navigation/          # SiteNav (+ MENU), MobileMenuPanel (placeholder)
   │   ├─ sections/            # PortfolioBar, HeroSection, FeaturedSection, WorksSection,
   │   │                       # WhyWork, HowIWork, TrustedBy, CTASection
   │   │                       # + primitives: SectionLabel, Rule, AccentText
   │   ├─ projects/            # FeaturedCaseCard, ProjectRow
   │   ├─ buttons/             # Button, ActionLink, ArrowIcon
   │   └─ footer/              # SiteFooter, BubbleGame
   ├─ data/                    # site.js (chrome copy) · home.js · projects.js · media.js
   ├─ pages/                   # Home, Work, About, CaseStudy
   └─ styles/                  # tokens, typography, fonts, global, nav, buttons,
                               # sections, projects, footer, responsive, pages
```

---

## 3. Routing (`src/App.jsx`)

14 routes, all taken verbatim from the reference's link targets:

| Route | Page | State |
|---|---|---|
| `/` | `Home` | composed |
| `/work` | `Work` | composed (list shell) |
| `/about` | `About` | stub |
| `/work/:slug` | `CaseStudy` | shell (title only) |
| `*` | → redirect `/` | unknown top-level |

- Case-study slugs are preserved **exactly**, including the trailing dot and
  parentheses: `…launch-manage-and-measure.`, `zenrock-website-design(mvp)`. Do not
  "clean up" these values. All 11 match with `matchPath`, with or without a
  trailing slash.
- Unknown `/work/:slug` → `<Navigate to="/work">` (the reference has no such page).
- Unknown top-level path → `/` (no invented 404 design).
- `ScrollToTop` is a **scroll reset only** (no transitions), run on every route change.
- Full navigation graph: `reference-audit/layout-measurements.json → navigationGraph`.

---

## 4. Design tokens (`src/styles/tokens.css`)

Tokens are Framer's own raw variables, reproduced 1:1, then exposed through a
small set of semantic aliases. **The dark-scheme override is part of the source
and is reproduced.**

Raw tokens (light values; `reference-audit/design-tokens.json`):

| Token | Light | Dark | Role |
|---|---|---|---|
| `--token-24044501` | `#0a0a0a` | same | ink / headings |
| `--token-cd708a3c` | `#eceae3` | `#fff` | page + nav surface (body background) |
| `--token-5e9e8e0f` | `#fff` | same | white surface / case-study bg |
| `--token-d607af31` | `#f5f4f0` | `#f4f3ee` | soft beige surface |
| `--token-123b8b4d` | `#e5e3db` | same | CTA card |
| `--token-86117d10` | `#2a2a2a` | same | secondary text / labels / rules |
| `--token-b86dbd64` | `#e5341b` | same | accent |
| `--token-e1eb4ea5` | `#6f6e6a` | same | muted / hairline borders |
| `--token-baeb5cb5` | `#cccaca` | same | CTA card border |
| `--token-8b7699fe` | `#1fb46a` | same | green status dot |
| `--token-3a5c8f06` / `--token-16e34404` | `#ffffffc2` | same | translucent white |
| `--token-d5d5843f` | `#fff` | same | selection text |
| `--token-7171c7ce` | `#2e6bdb` | same | blue |

```css
@media (prefers-color-scheme: dark) {
  :root { --token-cd708a3c: #fff; --token-d607af31: #f4f3ee; }
}
```

Semantic aliases (`--color-page`, `--color-ink`, `--color-accent`, `--content-max`,
`--gutter`, `--cta-pad`, …) point only at the tokens above — **no new colours**.

### Tier tokens (`responsive.css`)

Desktop-first, mirroring the reference's own variant structure:

| Tier | Media | Key values |
|---|---|---|
| desktop | base ≥ 1280 | `--gutter: 40px`, root padding 138/64 |
| tablet | `≤ 1279.98px` | `--gutter: 32px`, `--cta-pad: 60px`, footer gap 80 |
| mobile | `≤ 809.98px` | `--gutter: 16px`, `--cta-pad: 40px`, footer gap 20 |

---

## 5. Typography (`typography.css` · `fonts.css`)

Display face = **PP Neue Montreal** (Medium 500 / Regular 400); body = the reference's
body family. Presets are transcribed with their breakpoint bands:

| Preset | Base | Tablet band | Mobile band | Used by |
|---|---|---|---|---|
| `1q86rep` | 100 / 0.9em / −0.04 | 76 / 1em @810–1279 | 54 / 0.9em | page H1s |
| `9g1z5w` | 80 / 1em / −0.04 | 48 | 38 | why-intro line 1 |
| `1wml6uu` | 42 / 1.1 / −0.02 | 30 / 1.15 @810–1023 | 24 | featured + CTA headings |
| `1xzh7l3` | 26 / 1.3 / 0 | 20 @810–1099 | 18 | why/how card headings |
| `1w752jy` | 20 / 1.4 / 0 | 18 @810–1199 | 16 | work-row/hover titles, how-item titles |
| `ugcj2n` | 14 / 1.4 / −0.02 / 500 | 16 @810–1023 | 14 | card + how descriptions |
| `21ogod` | 16 / 1.4 / −0.01 / 400 | — | — | intro body |
| `syhcz3` | 14 / 1.4 / 0 / 400 | — | — | work-row description |
| `a3dj5b` | 12 / 1em / 500 / +0.01em / uppercase | — | — | section labels, nav logo, H.01, READ MORE |
| `1tb3ij7` | 10 / 1em / 400 / +0.01em / uppercase | — | — | portfolio bar, hero actions |
| `6wgo1q` | 12 / 1.2em / 400 / +0.01em | — | — | footer meta |
| `3nqyhf` | 52 / 1.25 / −0.2 | 26 @810–1023 | 18 (copy uses `12lj5ox`) | email row |

Casing is normalised to the reference markup; CSS applies `text-transform`
(e.g. data holds `Work`, `Book a Call`, CSS uppercases to `WORK`, `BOOK A CALL`).

---

## 6. Styling architecture

**Import order** (`main.jsx`): `fonts → tokens → typography → global → nav → buttons
→ sections → projects → footer → responsive → keyframes → pages`.

**One owner per concern** (no duplicated/drifting rules):

| Area | Owner |
|---|---|
| raw/semantic tokens, tier tokens, nav shell, `.page-wrapper` shell | `tokens.css` / `responsive.css` |
| typography presets + utilities (`.accent`, `.email-row`, …) | `typography.css` |
| portfolio bar, hero, section labels, featured section, works section, why, how, trusted, CTA + their preset bands | `sections.css` |
| featured card, work rows + bands | `projects.css` |
| footer, email bands, write block, columns, game, bottom line | `footer.css` |
| buttons | `buttons.css` |
| nav | `nav.css` |
| page roots (`/work`, `/about`, case-study shell) | `pages.css` |

`.rule` has a single owner (`sections.css`) with `tone="dark"` (#2a2a2a) and
`tone="light"` (`rgba(111,110,106,.2)`) variants.

**`pages.css` is a documented Phase 2 addition** — the reference keeps page-shell
layout in its own per-route markup; we keep `.work-page*`, `.about-page*` and
`.case-study*` there so section components stay page-agnostic.

---

## 7. Component inventory

### Chrome
| Component | Responsibility |
|---|---|
| `navigation/SiteNav` | fixed nav: logo, Home/Work/About, "Book a Call" + arrow, mobile MENU trigger; 3 responsive variants via CSS; `useAppear(appearNav)` |
| `navigation/MobileMenuPanel` | **placeholder** — renders `null` until the open-menu state is captured (§14 D2) |

### Sections (page-agnostic, data-driven)
| Component | Notes |
|---|---|
| `sections/PortfolioBar` | "PORTFOLIO '26" + pulsing dot "OPEN TO WORK" (`useAppear(appearBar)`) |
| `sections/HeroSection` | H1 with accent words, subcopy, action links |
| `sections/FeaturedSection` | label + `FeaturedCaseCard` |
| `sections/WorksSection` | label + list; `variant="home"` (5 rows) / `"work"` (11 rows) |
| `sections/WhyWork` | intro (accent line 1) + 3 cards with light rules |
| `sections/HowIWork` | left intro column + 4 numbered items with light dividers |
| `sections/TrustedBy` | 7 logos, marquee/ticker |
| `sections/CTASection` | CTA card: label, highlighted heading, 2 buttons, status line |
| `sections/SectionLabel` | `01 — Work` etc.; `divider` prop (the `/work` header label has none) |
| `sections/Rule` | dark / light hairline |
| `sections/AccentText` | splits a verified string on verified accent words → `<span class="accent">` |
| `projects/FeaturedCaseCard` | title row + tags + highlights bullets + media + Read More |
| `projects/ProjectRow` | `P.0x` · title · description · tag · year · arrow |
| `buttons/Button` (variants `dark`/`accent`, `to`/`href`), `buttons/ActionLink`, `buttons/ArrowIcon` | reference button + ↗ glyph |
| `footer/SiteFooter` | write block, 3 link columns with light rules, game, bottom line |
| `footer/BubbleGame` | static playfield + score + controls (gameplay UNVERIFIED, §14 A5/A6) |

### Animations
`animations/Appear` + `presets.js` implement only verified appear specs
(`dgmr2u` nav, `cvhcy1` portfolio bar, `1e91r9o` block). Elements whose appear id
was truncated render statically (no invented motion). `keyframes.css` declares the
verified pulsing-dot animation and the bubble frames **without durations** (§14 A5/A6).
Respects `prefers-reduced-motion`.

---

## 8. Data layer (`src/data/`)

Content only; no presentation values leak into components.

- **`site.js`** — nav, hero, portfolio bar, CTA, footer copy, `workPage`, `aboutPage`
  (verbatim reference strings, correct casing, exact hrefs incl. `cal.com`, Contra,
  Dribbble/LinkedIn/Drive resume).
- **`home.js`** — why intro/accents/cards, how items, trusted logos (+ sizes/opacity).
- **`projects.js`** — 11 projects: slug, title, tag, year, description, highlights;
  `getProject(slug)`, `projectSlugs`.
- **`media.js`** — `img()`, `svgUrl()`, `trustedBySrc()`, natural `imageMeta`
  dimensions; all URLs point at `/reference-audit/assets/...` (original filenames).

---

## 9. Asset pipeline (`vite.config.js`)

- Aliases: `@` → `src`, `@audit` → `reference-audit`.
- A small plugin (a) serves `reference-audit/**` in dev via middleware and (b) copies
  `reference-audit/assets` → `dist/reference-audit/assets` on build. Audit markdown/JSON
  never ships.
- Runtime asset URLs are absolute (`/reference-audit/assets/…`) so nested SPA routes resolve.

---

## 10. Page composition

### Home (`/`) — verified order (`layout-measurements.json → home.sections`)
```
SiteNav
└ main.page-wrapper          (col gap 100; 64px top; gutter; max-w 1200; centered)
  PortfolioBar · HeroSection · FeaturedSection · WorksSection(home, 5)
  · WhyWork · HowIWork · TrustedBy · CTASection · SiteFooter
```

### Work (`/work`) — **composition incomplete by design**
Verified from `reference-screenshots/work-desktop-full.png` + `work.html` during QA:

```
header  "01 — Work" label + H1 (accent spans verified)      ✅ built
02 — Selected: 11 rows (P.01 … P.11)                        ✅ built
03 — Archived: label + rule, then a Works grid              ⛔ NOT built (see below)
04 — How I work? (same component as home)                   ⛔ NOT built
CTA card                                                    ✅ built
Footer (write block · cols · game · bottom) — NO trusted-by ✅ built
```

The **archived section exists** (label rule measured at y ≈ 1216, followed by a
`section[aria-label="Works"]`), but every archived row carries an un-run appear
state (`opacity:0`) in every capture, so its *visible* design is UNVERIFIED. Its rows
reference the same project thumbnail component (`./work/zenrock-webapp-design/`,
`P. 06` …) — enough to plan Phase 3, not enough to reproduce pixel-accurately.
Per the no-invention rule, it is **not** implemented yet; neither is the second
`HowIWork` instance (a plain reuse). Both are Phase 3 work. The 11-row list, header,
CTA and footer are correct and verified.

### About (`/about`) — stub
Only the H1 (with verified accent words `design` / `clean`) + nav + footer. The real
page (01 About me label, 02 Curriculum Vitae label + heading + Download Resume + CV
rows, beliefs/process, closing CTA) is transcribed in
`layout-measurements.json → aboutPage` and is Phase 3 work.

### Case study (`/work/:slug`) — shell
`main.case-study` (col gap 60, padding `144px var(--gutter) 0`, background `#fff`,
**no footer**) + the project title. Title font-size is UNVERIFIED (§14). All internals
(meta row, hero image, sticky rails, content blocks) are Phase 3.

---

## 11. Fixes & decisions recorded this phase

Structural/visual corrections made during Phase 2 QA (all now reflected in code):

1. **How-section structure** — the reference row `1a69g1h` has **two** children
   (left column `4trg8p`-wrapped `1k33rpp`, right column `foj3v1`), not a single
   inner grid. The column gap is `60 / 40 @810–1279 / 24 column @≤809`; the
   redundant single-child grid wrapper was collapsed. This corrected the item
   column's x (code x 414 → 428 = reference 427.5).
2. **How-item vertical alignment** — added `align-items: flex-start` to `.how-item`
   (reference `lzl3uj`); without it the code box stretched and the `H.0x` label sat
   ~25px too low.
3. **Accent spans** added to the `/work` H1 (`products,` `systems,`) and the
   `/about` H1 (`design`, `clean`), verified from the reference screenshots.
4. **Featured card media** sized by `aspect-ratio: 1.43636` (720×501 at 1168).
5. **Featured bullets** colour `#0a0a0a` (preset colour beats the `#f5f4f0` wrapper fallback).
6. **Why cards** wrap h4/body in `.why-card__text` (col gap 12).
7. **Footer email** centred in the mail row (`justify-content:center`), desktop `<h1>` retained.
8. **Nav** — logo and "Book a Call" are nowrap single lines; logo ink `#0a0a0a`;
   14×14 arrow box.
9. **Hero subcopy** — tablet `max-width:300px` removed (mobile-only in source).
10. **Trusted-by** — 7 logos (3 were missing) downloaded into `reference-audit/assets`.

### Known residuals (documented, Phase 3 polish)
- Cumulative vertical drift vs the reference capture is **≤ ~10px** at the footer
  (e.g. rules at +1 px featured label, +2 selected list, +3 why, +5 how, +6 CTA,
  +10 footer bottom). Sources: `why-card` height 236 vs reference ≈ 233.3; the CTA
  card's 1 px `#cccaca` border adding ~2 px to a border-box height; sub-pixel
  rounding across fractional line-heights. The reference's own live measurements
  carry ±1 px probe noise.
- The CTA card border is drawn as a CSS `border` (reference declares `border:none`
  but the screenshot shows the hairline; treated as a Framer border overlay → 2 px taller).

---

## 12. QA methodology (important)

- **The reference screenshots are captured in the DARK colour scheme.** Every
  `reference-audit/reference-screenshots/*.png` has a **white** page background
  (`#fff`), which is the dark-scheme value of `--token-cd708a3c`; the light scheme is
  beige `#eceae3`. Our tokens implement both, so compare in the same scheme.

- **Screenshot command (headless Chromium, dark scheme):**
  ```bash
  SHELL_BIN=$(find ~/Library/Caches/ms-playwright/chromium_headless_shell-1248 -type f -name chrome-headless-shell | head -1)
  "$SHELL_BIN" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --blink-settings=preferredColorScheme=0 \
    --window-size=1168,5100 --virtual-time-budget=8000 \
    --screenshot=/tmp/shot.png "http://localhost:5177/"
  ```
  `--blink-settings=preferredColorScheme=0` selects dark (headless defaults to light).
  Reference images are 1400 px = 1168 CSS × 1.2, so scale by `÷1.2` when comparing.

- Very tall windows hide the fixed nav in captures; use viewport captures or scroll crops.
- Reference to inspect: `/private/var/…/ref/home.html` and `work.html` (SSR source used
  for exact Framer class rules).

Route smoke test (all pass, zero console errors): `/`, `/work`, `/about`,
`/work/no-code-data-builder/`, `/work/making-direct-mail-campaigns-easier-to-launch-manage-and-measure.`,
`/work/zenrock-website-design(mvp)` — correct `<h1>`, footer present only on the three
paginated pages, no Vite error overlay.

---

## 13. Additions vs the reference (explicit list)

- `styles/pages.css` (page shells) and this `ARCHITECTURE.md`.
- `AccentText` helper (the reference hard-codes spans; we derive them from verified accent words).
- Static renderings for un-captured behaviour: canvases, bubble game, mobile menu panel,
  truncated appear ids — intentionally static, never guessed.
- `<h1>` kept for the footer email on mobile (reference SSR swaps to `<h3>`); documented deviation.

---

## 14. UNVERIFIED — deferred to Phase 3

| ID | Item |
|---|---|
| A1 | Truncated appear ids (`8d38if`, `1d2ga08`, `8l2eok`, `1fe07t7`, `hugoim`, `hgw2my`) → those elements render statically |
| A2 | Per-character hero H1 reveal timing (H1 renders in final state) |
| A3/A4 | Hover durations/timing (read-more, row arrows) — resting states verified only |
| A5/A6 | Bubble-game spawn parameters, durations, and `bfflash/bffade/bfpop/bfconf/bfspin` frames |
| A7 | Canvases render static |
| D2 | Mobile menu **open** state (no markup captured → `MobileMenuPanel` renders nothing) |
| — | `/work` archived Works grid (all rows `opacity:0` in every capture) |
| — | `/about` body (CV rows, beliefs, process, closing CTA) |
| — | Case-study internals + case-study H1 preset (shell uses the page-title preset as a documented placeholder) |
| — | Sticky rail top offset; footer location-icon glyph (arrow glyph used as placeholder) |
| — | Mobile full-spec gaps where the reference was not probed (see `UNVERIFIED-VALUES.md` §R1) |

---

## 15. Proposed Phase 3 plan (after approval)

1. Finish `/work`: add the `04 — How I work?` reuse; implement the `03 — Archived`
   grid once its appearance/hover behaviour is captured (or keep it deferred with an
   explicit product decision).
2. Transcribe and build `/about` from `layout-measurements.json → aboutPage`.
3. Build the case-study template (meta row, hero image, sticky rails, content blocks)
   and verify its H1 preset.
4. Implement the verified appear specs on the remaining blocks; capture the un-captured
   ones (§14) before animating them.
5. Drive the residual vertical drift (≤10 px) to 0 by re-deriving the two known
   height deltas (`why-card`, CTA border) against fresh live probes.
6. Full-page side-by-side diff at 1168 / 810 / 390 in **both** colour schemes.

**Approval requested:** confirm the stack, token/typography mapping, component
inventory, routing, and the `/work` + `/about` completion plan above before Phase 3.
