# Phase 6 — Responsive QA Report

Reference: https://www.sandeep.design/  
Local: http://localhost:5177/ (Vite dev/build parity checked; `npm run build` passes)  
Breakpoints followed (Phase 1, `responsive-breakpoints.md`): **3-tier** — `base >=1280` (desktop), `810–1279.98` (tablet), `<=809.98` (mobile). No arbitrary breakpoints added for 1024/768/375/320; those widths inherit the verified tier behavior.

Tested viewports (as requested): 1920, 1600, 1440, 1280, 1024, 768, 390, 375, 320.  
Pages probed locally: `/`, `/work`, `/about`, `/work/no-code-data-builder`.  
Live comparison probes (CDP, generic): home at all requested widths; `/work` and `/about` at 1280/768/390 (some live runs reported constrained internal viewport dimensions in logs; overflow/font/nav signals recorded where available).

---

## 1) Summary
- **Horizontal overflow (unintended):** eliminated on tested local routes at all requested viewports after fixes. Local probe result: `overflowX: 0` for `/`, `/work`, `/about`, `/work/no-code-data-builder` at 768/390/375/320 (and 0 at larger widths).
- **Tier behavior:** nav collapse, gutters, root/page padding, gaps, typography bands, card/row stacking, CTA/footer layout follow existing Phase 1/implementation breakpoints (`max-width: 1279.98px`, `max-width: 809.98px` plus verified intermediate bands already present).
- **Live parity (sampled):** live home shows `overflowX: 0` at 1920/1600*/1440*/1280*/1024/768*/390/375/320 with matching key tier signals (H1 100/90 @>=1280, 76/76 @1024, 54/48.6 @<=809 with 342px cap behavior, nav MENU on mobile widths, footer widths 1200/960/768-area/358/343/288). *Some live CDP runs logged alternate internal viewport sizes; values above reflect captured JSON outputs. Live `/about` @390 probe reported `overflowX: 47` (reference-side observation during automated probe).

## 2) Viewport matrix (local, key metrics)

| Viewport | Home | Work | About | Case (no-code-data-builder) | Notes |
|---|---|---|---|---|---|
| 1920 | overflow 0, nav links+CTA, gutter 40, root gap 100, H1 100/90 | overflow 0, gutter 40, H1 100/0.9em, CTA pad 100 (desktop) | overflow 0, gutter 40, H1 100/0.9em | overflow 0, page pad 144/40, gap 80, H1 80/80, container 1200 | Desktop tier |
| 1600 | overflow 0 (tier behavior matches >=1280) | overflow 0 | overflow 0 | overflow 0 | Content capped/centered per container rules |
| 1440 | overflow 0 | overflow 0 | overflow 0 | overflow 0 | Desktop tier |
| 1280 | overflow 0, nav links+CTA, page 64/40, gap 100, H1 100/90, featured row, footer row | overflow 0, page 92/32 in tablet tier? 1280 is >=1280 base for site but work styles use 1279.98 boundary; local shows 92/32 gap 80 consistent with <=1279.98 banding where applied | overflow 0 | overflow 0, pad 144/40, gap 80, H1 80/80 | 1280 boundary: follows implemented tier rules (no invented breakpoint) |
| 1024 | overflow 0, tablet tier: gutter 32, gap/root per tier, nav links+CTA, H1 76/76, featured column, footer row | overflow 0, pad 92/32, gap 80, H1 76/76, rows/archived row layout | overflow 0, pad 92/32, gap 80 | overflow 0, pad 144/32, gap 60, H1 48/45.6, container 960 | Tablet tier (810–1279) |
| 768 | overflow 0 (fixed), mobile tier: gutter 16, nav MENU only, H1 54/48.6 (clamped), featured/rows column, footer stacked, CTA pad 40 | overflow 0 (fixed), pad 80/16, gap 60, rows/archived column | overflow 0, pad 80/16, gap 60 | overflow 0, pad 144/16, gap 40, H1 38/36.1, rail/content stack per mobile rules | Mobile tier (<=809) |
| 390 | overflow 0, mobile tier, container 358, H1 342w cap fits | overflow 0, container 343 | overflow 0 | overflow 0, container 358 | Verified mobile width |
| 375 | overflow 0 (fixed), container 343 | overflow 0 (fixed) | overflow 0 | overflow 0 | Small mobile |
| 320 | overflow 0 (fixed), container 288, hero/title clamped to container | overflow 0 (fixed) | overflow 0 | overflow 0 | Small mobile |

## 3) Inspection areas (implementation vs reference behavior)

1. **Navigation transformations** — Implemented per tiers: full links (HOME/WORK/ABOUT) + BOOK A CALL at >=810; **MENU trigger only** at <=809.98 (`responsive.css`/`nav.css`). Fixed nav height 45px maintained. Local and sampled live agree on mobile menu presence at 768/390/375/320 and full nav at >=1024/1280+.
2. **Hero heading wrapping** — Home H1 scales `100/90` (>=1280), `76/76` capped (tablet), `54/48.6` (mobile) with measured caps/wrapping behavior; work/about/case titles follow page-specific preset bands in CSS. At 320, hero/page titles now clamp to container (`max-width: min(342px,100%)` / equivalent) to prevent unintended overflow while preserving intended sizing at >=342px content widths.
3. **Container width changes** — `--gutter` 40/32/16 by tier; content constrained by `--content-max: 1200px` and page padding. Containers scale to viewport minus gutters on small screens (e.g. 358 @390, 343 @375, 288 @320).
4. **Section spacing** — Root/page gaps and paddings follow tier tokens/rules (`--gap-root`, `--gap-footer`, `--cta-pad`, page-specific gap/padding overrides in `pages.css`, `sections.css`, `responsive.css`). No new spacing scale introduced.
5. **Project grid transformations** — Featured case: row at desktop, column in tablet/mobile tiers per existing rules. Selected work rows: row at >=810, column at <=809. Archived rows: desktop/tablet row preview+content behavior; mobile stacks content/metadata (column) to fit narrow widths (overflow fix applied; see §4).
6. **Image aspect ratios** — Preserved via existing CSS/aspect-ratio usage (e.g. featured media `1.43636`, work previews `1.5`, case hero/content images `16/9` in probed case). No content/images removed.
7. **Typography scaling** — Verified preset/band rules retained (e.g. hero 100→76→54; case title 80→48→38 bands; section/card/item bands already defined in `sections.css`/`pages.css`/`projects.css`). 1024/768 inherit tablet/mobile tier bands respectively (no arbitrary breakpoint).
8. **CTA positioning** — CTA remains in page flow/sections as implemented; padding adapts by tier (`--cta-pad` 100/60/40). Buttons stack full-width on mobile per existing CTA styles.
9. **Footer stacking** — Footer columns row on >=810 and column/stacked on <=809 per existing footer/tier rules; no layout invention.
10. **Touch interaction behaviour** — No hover-only critical content; tap targets/links remain standard. Mobile nav exposes MENU trigger (open panel behavior remains as previously implemented/unverified). JS-driven hover timings remain as documented in Phase 5 notes (not altered).

## 4) Fixes applied during Phase 6 (overflow/fit, no layout invention)
- **`src/styles/sections.css`**: allowed trusted-by logo list to wrap (`flex-wrap: wrap`) to prevent horizontal overflow on narrow/mobile widths; clamped hero H1/title wrapper to `max-width: min(342px, 100%)` at <=809.98 so 320px viewports do not overflow.
- **`src/styles/pages.css`**: clamped `/work` and `/about` H1 mobile max-width to `min(342px, 100%)`; made case-study "See also" meta/title/cat widths fluid (`max-width: 100%` where fixed widths could overflow).
- **`src/styles/projects.css`**: corrected archived-row mobile layout to stack (`.archived-row__content` column) and prevent right-side overflow (group-right stretched/full-width, wrapping meta, non-fixed arrow box) while preserving content.

## 5) Live comparison notes (sampled)
- **Home:** live H1/overflow/nav/footer signals align with tiers at captured widths (e.g. 1920: 100px/90px, w972, footer 1200; 1024: 76px/76px, w714, footer 960; 390/375/320: 54px/48.6px, MENU, footer 358/343/288, overflow 0).
- **Work/About:** live 1280/768 samples show expected nav/title tiering and no overflow in captured runs except `/about` @390 probe reported `overflowX: 47` (automated probe observation).
- **Method caveat:** live site is Framer-rendered with different DOM structure; CDP viewport handling/logging produced occasional constrained-dimension runs (e.g. reported 800×600) though key responsive signals were still captured. Local probes used the app’s own class structure and are authoritative for implementation state.

## 6) Remaining/unverified responsive gaps (not invented)
- **R1:** full mobile (<809) spec not exhaustively probed in Phase 1 for every element on work rows/footer/case-study pages; Phase 6 fixes addressed unintended overflow/fit only.
- **R2:** case-study two-column/sticky rail behavior below 1280 not fully specified beyond implemented responsive rules.
- **R3:** exact content-cap engagement width between 1201–1279 (bracketed in Phase 1).
- **R4:** elements affected by intermediate 1023/1099/1199 queries not fully isolated.
- **R5:** live-window measurement anomalies noted in Phase 1 audit remain a caveat for live comparisons.

## 7) Result
Responsive behavior at the requested viewports follows the **actual Phase 1 3-tier breakpoint system** (no arbitrary breakpoints), preserves content/visual identity, and passes local overflow checks across tested routes after targeted overflow fixes. A full pixel-diff campaign against live Framer DOM was not possible via class-based automation; numeric/structural comparisons above and prior Phase 3/4 probes form the QA basis. 
