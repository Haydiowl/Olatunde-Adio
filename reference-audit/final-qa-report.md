# Phase 7 — Final Visual & Functional QA Report

Reference: https://www.sandeep.design/  
Local implementation: http://localhost:5177/ (Vite + React 18, dev server; `npm run build` passes)  
Audit date: 2026-11-12  
Comparison method: CDP-driven DOM/geometry probes, route/asset checks, and full-page screenshot captures (local vs live) at matching viewports where possible. **No 100% visual parity is claimed.**

## 1) Completed pages / routes
| Route | Status | Notes |
|---|---|---|
| `/` | Implemented | Home shell/sections (portfolio bar, hero, featured case, selected work, why, how, trusted, CTA, footer). |
| `/work` | Implemented | Intro/header, selected projects (P.01–P.05), archived (P.06–P.11), how-I-work, CTA, footer; local links/routes wired. |
| `/about` | Implemented | Intro, CV/experience, education, beliefs, working process, CTA, footer. |
| `/work/:slug` (11 slugs) | Implemented (routing/content), fidelity varies | All resolve locally (HTTP 200, render): `offx-redesign`, `herd-simplifying-blockchain-with-ai`, `no-code-data-builder`, `corestack-enterprise-control-panel`, `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.`, `zenrock-webapp-design`, `zenrock-website-design(mvp)`, `getlit-webapp`, `houzecheck-webapp`, `mindlantic`, `swoop`. Hero/meta/facts, images, See-also, footer present; unique long-form compositions not fully reproduced for all complex cases. |

## 2) Visual parity assessment
**Evidence artifacts (paired local/live screenshots):** `reference-audit/qa-screenshots/local/*`, `reference-audit/qa-screenshots/live/*`  
- `home-1168.png`, `home-390.png`
- `work-1168.png`
- `about-1168.png`
- `case-nocode-1168.png` (no-code-data-builder)

**Overall assessment (evidence-based, not pixel-perfect):**
- **High structural/behavioral alignment (targeted):** `/work` and `/about` match key verified anchors at 1168 in prior numeric probes (documented in conversation/checkpoint: e.g. /work `docH 3671`, selected/CTA/footer positions match; /about `docH 3891`, key block positions/heights match). Navigation, section ordering, footer/CTA presence, and responsive tier behavior follow Phase 1 breakpoints.
- **Moderate-to-partial parity:** Home is visually/structurally close in major sections but full-page height differs in captures (local 3891 vs live 4961 @1168) indicating remaining section/spacing/content-flow differences. `no-code-data-builder` is the most complete case study (detailed rail renderer) with close hero/section anchors but **residual drift** remains (e.g. Users/Process block sizing/positions and downstream offsets reported in prior probes).
- **Partial/low composition parity:** Complex long-form case studies (`offx-redesign`, `herd-simplifying-blockchain-with-ai`, `corestack-enterprise-control-panel`, `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.`, `zenrock-webapp-design`, parts of `zenrock-website-design(mvp)`) render functional content/images/See-also but **do not fully reproduce unique rail/internal block compositions** of the reference (see `reference-audit/case-study-structures.md`). Simpler portfolio cases (`getlit`, `houzecheck`, `mindlantic`, `swoop`) use compact/simple layouts consistent with observed structure but not pixel-diff verified.

**Difference maps:** not generated (no image-diff dependency/tooling such as pixelmatch/pngjs installed in the project). Paired screenshots provided for manual comparison.

## 3) Remaining discrepancies (prioritized)
1. **Major layout/composition differences**
   - Complex case-study routes lack full per-route rail/block modeling (section substructures A/B/C/D, figures, grouped narratives, unique internal layouts).
   - Home full-page vertical flow/height differs from live capture at 1168 (section/block sizing or content spacing deltas).
   - `no-code-data-builder` block-level drift in Users/Process and downstream cumulative positions at 1168/other tiers (not 0-drift).
2. **Incorrect/uncertain typography details**
   - Font loading/rendering parity not pixel-verified across platforms; computed families/sizes follow implemented tokens/presets but subtle raster differences may exist.
   - Hero per-character staggered reveal not implemented (UNVERIFIED timing) — affects perceived entrance, not static typography metrics.
3. **Incorrect/missing imagery composition**
   - No broken/missing case-study asset files detected in audits; however image cropping/placement within complex case-study compositions may differ where original blocks are not fully reproduced.
4. **Spacing and alignment**
   - Residual vertical spacing/drift on `no-code-data-builder` and some non-audited sections; mobile/tablet fine spacing not exhaustively diffed against live for every route.
5. **Colors and borders**
   - Token-based colors/borders/rules implemented from audit; dark-scheme token overrides follow reference CSS but full cross-route dark-mode visual parity not audited.
6. **Small decorative details**
   - Footer/game/bubble behavior is a static shell (dynamic spawn/physics/timing unverified). Minor decorative/icon/underline nuances may differ.
7. **Animation differences**
   - JS-driven hover timings/easings, per-char hero stagger, unverified appear specs, and some nav/underline behaviors cannot be exactly reproduced (see Phase 5 notes).

## 4) Functional test results
| Check | Result | Evidence/notes |
|---|---|---|
| Page/route loads (direct HTTP) | **Pass** | `GET 200` for `/`, `/work`, `/about`, and all 11 `/work/:slug` routes on dev server. |
| Direct page refresh / deep links (SPA) | **Pass (dev)** | Vite dev serves routes (200). |
| Internal navigation/project links | **Pass (sampled)** | Local DOM audits show correct local hrefs to `/work`, `/about`, project slugs, and See-also links; no dead internal targets observed in sampled routes. |
| Email links | **Pass (sampled)** | `mailto:hello@sandeep.design` present on audited pages. |
| External links | **Pass (sampled)** | Cal/Contra/Dribbble/LinkedIn/Resume links present with external targets/rel as implemented. |
| Buttons/interactive elements | **Pass (present)** | Nav/menu, CTA buttons, resume/download/read-more, footer game controls present in DOM. |
| Broken/missing images | **Pass (sampled)** | `brokenImgs: []` in local audits (`/`, `/work`, `/about`, `/work/no-code-data-builder`, `/work/offx-redesign` sampled); case-study asset existence previously verified (0 missing). |
| Browser console errors | **No app errors observed** | CDP runs show Vite/React DevTools info and **React Router future-flag warnings** only (dev-time); no uncaught application errors seen in sampled loads. Live captures may include Framer/editorbar logs unrelated to local build. |
| Scroll interactions / sticky | **Pass (implemented)** | Scroll-to-top on route change; nav fixed; case-study rails sticky `top: 60px`; other sticky wrappers positioned but some `top` offsets unverified. |
| Hover states | **Partial/implemented** | Verified hover behaviors implemented (work/archived preview reveal, title accent/padding, BOOK A CALL arrow/underline states, download-resume bg, color transitions via verified tokens). Exact JS-driven timings/stagger/variant details unverified. |
| Responsive navigation | **Pass** | MENU-only at `<=809.98`, full links+CTA at `>=810` per Phase 1 tiers (verified in responsive probes). Mobile menu open panel remains unverified/unimplemented. |

## 5) Responsive test results
Source: `reference-audit/responsive-qa-report.md` (Phase 6) + Phase 7 rechecks.
- **Viewports:** 1920, 1600, 1440, 1280, 1024, 768, 390, 375, 320.
- **Tiers:** base `>=1280`, tablet `810–1279.98`, mobile `<=809.98` (no arbitrary breakpoints).
- **Horizontal overflow:** `overflowX: 0` on tested local routes (`/`, `/work`, `/about`, `/work/no-code-data-builder`) at 768/390/375/320 and larger widths after Phase 6 fixes.
- **Transformations:** nav collapse to MENU, gutter/padding/gap scaling, hero/title typography bands, featured/row/archived/footer/CTA responsive layouts, preserved image aspect ratios.
- **Live comparison (sampled):** home overflow 0 at captured widths with matching key tier signals; sampled `/work`,`/about` tiering consistent. Live probe anomaly noted (`/about @390` reported `overflowX: 47` in one automated capture; local 0).

## 6) Performance observations
- **Build:** production build succeeds (`vite build`).
- **Fonts:** self-hosted/local font assets referenced in project; load behavior not lab-profiled (LCP/CLS not measured with Lighthouse in this audit).
- **Images:** served from `reference-audit/assets/images`; no lazy-loading strategy beyond browser defaults/implemented attributes audited in detail. Potential layout shift risk mitigated where dimensions/aspect-ratio styles exist, but not comprehensively measured.
- **Animation performance:** reveal/hovers use CSS transitions/IntersectionObserver; `prefers-reduced-motion` respected (Phase 5). No scroll-linked parallax/continuous JS animation loops added.
- **Mobile responsiveness:** functional at 390/375/320 without horizontal overflow on tested routes (post-fix).

## 7) Unverified reference behaviours (cannot be claimed/replicated exactly)
- **Motion:** appear specs A1 (`8d38if,1d2ga08,8l2eok,1fe07t7`), per-char hero stagger A2, hover durations/easings A3/A4, bubble-game timing/frames A5/A6, BOOK A CALL underline real-pointer opacity/timing A7 (`reference-audit/animation-inventory.md`, `reference-audit/motion-notes.md`).
- **Responsive:** R1–R5 gaps in `responsive-breakpoints.md` / Phase 6 report (full mobile spec coverage, case-study below 1280, exact cap engagement, intermediate query targets, live measurement anomalies).
- **Case-study composition:** unique internal structures for several long-form case studies not fully transcribed/modeled (documented in `reference-audit/case-study-structures.md`).
- **Other:** mobile menu open panel behavior (previously unverified), dynamic bubble simulation, and any Framer-runtime-only behaviors not captured in static audit.

## 8) Final deliverables index
- `reference-audit/final-qa-report.md` — this report.
- `reference-audit/responsive-qa-report.md` — Phase 6 responsive QA.
- `reference-audit/motion-notes.md` — Phase 5 motion implementation/unverified log.
- `reference-audit/case-study-structures.md` — per-route case-study structure inspection.
- `reference-audit/qa-screenshots/local/*`, `reference-audit/qa-screenshots/live/*` — paired comparison captures.
- Implementation source under `src/` and styles/assets as modified across phases.

## 9) Conclusion
The replica achieves **strong parity on core pages and system behaviors** (routing, major page structures for `/`, `/work`, `/about`, responsive 3-tier behavior, verified appear presets, key hover/interaction patterns, no broken sampled assets/links). It does **not** reach evidenced 100% visual parity: notable gaps remain in **full-page/home vertical parity**, **`no-code-data-builder` drift-to-zero**, **unique long-form compositions for several complex case studies**, and **unverified/JS-driven motion details**. Further parity work should prioritize (1) per-route case-study block modeling, (2) no-code block/tier drift correction with numeric diffs, (3) home section spacing/flow alignment against live captures. 
