# Reference Audit — sandeep.design

**Phase 1 deliverable set** (forensic audit of https://www.sandeep.design/, 2026-11-06).
No implementation has been started. Awaiting approval before Phase 2.

| File | Contents |
|---|---|
| `design-tokens.json` | Colors (with observation counts + Framer `--token-*` ids), fonts, radii, shadows, spacing/gaps, page paddings, content max-width, breakpoints, motion specs, z-index, fixed/sticky |
| `dom-structure.md` | Global shell, per-page DOM trees (home, work, about, case study, footer/bubble game), route map, navigation graph |
| `layout-measurements.json` | Every measured rect (x/y/w/h + styles) with **source · viewport · element** provenance for all four page types |
| `typography.md` | Full type scale with sources, recurring style recipes, per-char reveal note |
| `animation-inventory.md` | Framer appear specs (delay/duration/easing), keyframes, CSS transitions, hover behavior + observed rest→hover diffs, page-transition findings, fixed/sticky |
| `responsive-breakpoints.md` | Breakpoint map (809/810 · 1279/1280), per-range verified properties via iframe probes at 12 widths, media-query inventory |
| `asset-inventory.json` | 158 images (83.9 MB) + 59 fonts (1.0 MB) with URLs, dimensions, bytes, per-route usage; 0 videos |
| `UNVERIFIED-VALUES.md` | **UNVERIFIED VALUES** section — everything not extractable, with observations and root cause |
| `reference-screenshots/` | 13 PNGs: home full + 6 sections, work full, about full, case study full, 800w sample, mobile 390w, tablet 810w |
| `assets/images/` | 158 downloaded images, original filenames preserved |
| `assets/fonts/` | 59 downloaded woff2 files, original filenames preserved |

## Method summary
- In-app Chromium (CDP) — live DOM computed-style walks, stylesheet rule/keyframe walks, a11y snapshots, screenshots.
- **Iframe probing** for responsive truth (no resize tool available): fixed-width same-origin iframes at 390/809/810/1023/1024/1099/1100/1199/1200/1279/1280/1440.
- `curl` fetch of all 14 routes (HTTP 200) for structural/asset extraction; `sips` for image dimensions.
- Synthetic pointer/keyboard events for hover/menu exploration (limitations documented in UNVERIFIED VALUES).

## Key facts for implementation (quick reference)
- **Framer site** — markup must be re-authored, not copied.
- Breakpoints: **≤809 mobile / 810–1279 tablet / ≥1280 desktop**; content max **1200px**; gutters 16/32/40.
- H1: **54 / 76 / 100px** (lh 48.6/76/90, ls −0.04em), PP Neue Montreal Medium 500.
- Palette: `#0A0A0A` ink · `#2A2A2A` secondary · `#E5341B` accent · `#6F6E6A` muted · `#E5E3DB` CTA beige · `#FAF9F7` game surface · white page.
- Nav: fixed, 45px, z-8, 1px `#212121` rule beneath; mobile = MENU trigger.
- Case study: `padding:144px 32px 0`, gap 60, sticky rails `top:60px` (266px) + 798px content column.
- Motion: appear `opacity .001→1, y20→0` (0.4–0.5s; eases `[0.36,.02,.14,.96]`, `[0.58,.02,.37,.99]`, `[0.44,0,.32,.93]`); no page transitions (SPA swap + scroll reset); hover effects JS-driven.
- 11 case-study slugs (note trailing-dot and parens slugs) — see `dom-structure.md` §7.
