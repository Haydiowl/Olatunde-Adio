# Phase 0 — Full Website Correction Audit (Olatunde Adio Implementation)

**Scope:** Homepage, Work, every individual project detail page, About, contact sections, shared navigation, shared footer, all reusable CTA components.  
**Reference:** https://www.sandeep.design/ (visual/behavior reference; note: live reference was not reachable via automated browser in this session, so comparison uses existing `reference-audit/*` measurements/notes plus code + live implementation inspection at `http://localhost:5177`).  
**Method:** source inspection (`src/**`, `index.html`) and runtime checks via browser evaluation on local dev server (viewport 1168×975, desktop/tablet tier). **No files modified.**  
**Date:** 2026-11-12

---

## 1) Affected pages and components

| Page / area | Primary files/components | Notes |
|---|---|---|
| **Shared navigation** | `src/components/navigation/SiteNav.jsx`, `src/styles/nav.css`, `src/data/site.js` (`nav`) | Fixed on all routes; transparent background in current implementation. |
| **Shared footer** | `src/components/footer/SiteFooter.jsx`, `src/styles/footer.css`, `src/data/site.js` (`footer`) | Present on all page shells; resume link placeholder. |
| **Shared CTA** | `src/components/sections/CTASection.jsx`, `src/components/buttons/Button.jsx`, `src/components/buttons/ActionLink.jsx`, `src/styles/sections.css` (CTA), `src/styles/buttons.css`, `src/data/site.js` (`cta`) | Used on Home, Work, About, and case-study shells (via `CaseStudy.jsx`/page composition). |
| **Homepage** | `src/pages/Home.jsx`, `src/styles/global.css` (`.page-wrapper`), `src/styles/sections.css`, `src/styles/projects.css`, `src/data/site.js`, `src/data/home.js`, `src/data/projects.js` | Sections: PortfolioBar, Hero, Featured, Selected, Why, How, Trusted, CTA, Footer. |
| **Work page** | `src/pages/Work.jsx`, `src/styles/pages.css` (`.work-page*`), `src/styles/projects.css`, `src/data/site.js` (`workPage`), `src/data/projects.js` | Header, selected/archived lists, How, CTA, Footer. |
| **Project detail pages (all slugs)** | `src/pages/CaseStudy.jsx`, `src/styles/pages.css` (case-study), `src/data/caseStudies.js`, `src/data/projects.js`, `src/data/media.js` | 11 routes: `offx-redesign`, `herd-simplifying-blockchain-with-ai`, `no-code-data-builder`, `corestack-enterprise-control-panel`, `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.`, `zenrock-webapp-design`, `zenrock-website-design(mvp)`, `getlit-webapp`, `houzecheck-webapp`, `mindlantic`, `swoop`. |
| **About page** | `src/pages/About.jsx`, `src/styles/pages.css` (`.about-page*`), `src/styles/sections.css` (beliefs), `src/data/site.js` (`aboutPage`) | CV/experience, education, beliefs, How, CTA, Footer. |
| **Contact sections** | CTA blocks + footer write-to-me/email/links (no separate contact route) | Driven by `cta`/`footer` in `site.js`. |

---

## 2) Identified issues by category

### A. Section spacing, alignment, and container widths

**Observed (live @1168, localhost):**
- Main content blocks on Home/Work/About/Case Study are centered and measure **1104px wide** with **32px left/right gutters** (`padding-inline: 32px` at 810–1279 tier), consistent with `--gutter: 32px` and `max-width: 1200px` containers.
- Home sections (`portfolio-bar`, `why-section`, `how-section`, `trusted-section`, `cta`, `site-footer`) use `max-width: 1200px`; `hero`, `featured-section`, `works-section` compute `max-width: none` but align to the same content column as children of the centered `.page-wrapper`.
- Page shells differ by page type (intentional per structure, but must match reference): Home `.page-wrapper` `padding-top: 64px`, `gap: 100px`, `align-items: center`; Work `padding-top: 92px`, `gap: 80px`, `justify-content: center` (@1168 tier); About `padding-top: 92px`, `gap: 80px`, `justify-content: flex-start`; Case Study `padding-top: 144px`, `gap: 60px`.

**Potential/current problems to correct/verify against reference:**
- **Home root vertical rhythm drift risk:** earlier replication notes indicated home full-page height/flow differed from live reference; personalized copy length may further affect perceived spacing/section breaks. Verify each section’s top/bottom spacing and container edges against sandeep.design at key widths.
- **Mixed container ownership:** some sections rely on wrapper alignment while others set explicit `max-width: 1200px`. This is generally consistent now, but any future edits must keep left/right edges identical across sections/pages.
- **Case-study simple layout blocks** (`.cs-simple`, `.cs-spacer-before-seealso`, etc.) align to 1104px in live check; verify against reference for pages using simple vs detailed rail compositions (especially non-`no-code-data-builder` routes) to ensure no per-page width/margin regressions.
- **Footer bottom/content alignment:** footer is width-aligned (1104px, max 1200px) but internal column/game spacing should be rechecked against reference after content changes (phone number added to “currently” column; longer/placeholder texts may shift wrapping).

**Affected files:** `src/styles/global.css`, `src/styles/pages.css`, `src/styles/sections.css`, `src/styles/projects.css`, `src/styles/footer.css`, `src/styles/responsive.css`, page components.

### B. Navigation behavior and stacking

**Observed (live):**
- `.site-nav` is `position: fixed`, `z-index: 4`, `top: 0`, centered, `max-width: 1280px` with `padding: 12px 32px 0` and a 1px rule below.
- **Background is transparent:** computed `background-color: rgba(0, 0, 0, 0)`, `background-image: none`, `backdrop-filter: none`.
- Main content scrolls under the nav area; with a transparent nav, **page content can show through the navbar region while scrolling** (especially text/images near the top fold), depending on scroll position.

**Problems:**
- Missing/incorrect nav surface treatment vs reference (likely solid page-color background and/or blur/backdrop as per original behavior) causing bleed-through.
- Potential stacking/opacity mismatch across scroll positions if reference changes nav appearance on scroll (not implemented; current nav is static-styled).

**Affected files/components:** `src/components/navigation/SiteNav.jsx`, `src/styles/nav.css`, `src/styles/tokens.css` (if background token needed), possibly `responsive.css` (tier-specific nav padding already handled).

### C. About page — experience, achievements, education

**Observed (code + live):**
- `aboutPage.cv.rows` contains **6 entries** with supplied company names, roles, dates/types (Bynari Tech, Luxe Live, Health Bridge Medical Inc, Oxyygn Agency, NovaPay Solutions, Everlane) but **every `desc` is a placeholder:** `[Responsibilities and achievements from CV — to be added]`.
- **No verified achievements/responsibilities rendered** per role; recognition/activities are included in beliefs intro text (Upwork Top Rated Plus, Awwwards Honorable Mention Everlane, Lagos Design Week speaker, UI/UX Bootcamp lead mentor) but not as structured CV achievements under roles.
- **Education incomplete:** `education.role` is `[Degree title not specified in CV] · freeCodeCamp Responsive Web Design Certification (Aug 30, 2020)` (degree title unknown; certification appended to fit existing field) and no separate/fully detailed education description field is rendered.
- **Resume action:** “Download Resume” button points to `[RESUME_URL]` (`href="[RESUME_URL]"`, `target="_blank"`, no `download` attribute) — incorrect/ineffective.
- **Layout/fit note:** `.about-cv__row` has fixed/controlled heights in CSS (`43.2px` at measured tier, `46px` base per styles); placeholder/longer real CV descriptions may overflow or be clipped once populated (needs verification after content insertion).

**Affected files:** `src/data/site.js` (`aboutPage`), `src/pages/About.jsx`, `src/styles/pages.css` (`.about-cv__*`), possibly `Button` usage for download semantics.

### D. CTA interactions (hover/animation consistency)

**Observed (code):**
- **Buttons (`src/styles/buttons.css`, `Button.jsx`):** base `.btn` uses `transition: var(--transition-color)` only. `.btn--dark` and `.btn--accent` define resting backgrounds/colors but **no `:hover` background/opacity/filter/transform changes**. `.btn--ghost` has hover background (`rgba(230,228,220,0.27)`) only. Arrow/icon motion not defined beyond static rotation.
- **Action links (`.action-link`):** underline bar goes from `1px/opacity:0` to `100%/opacity:1` on hover with **no width/opacity transition** declared (instant state change). Label/arrow color transitions to accent via inherited/color rules where applicable.
- **Nav CTA (`.site-nav__cta`):** underline bar expands on hover via width change without explicit transition; arrow has color transition.
- **Implementation notes in codebase:** several hover/timing behaviors are marked **UNVERIFIED/JS-driven** in reference (e.g. bar expansion duration, action-link opacity under pointer). Current implementation may therefore differ from original hover feel even where states exist.

**Problems:** missing or inconsistent hover animations/states relative to reference for shared CTAs and buttons (especially primary dark/accent CTA buttons and underline-expansion affordances).

**Affected files/components:** `src/styles/buttons.css`, `src/styles/nav.css`, `src/components/buttons/Button.jsx`, `src/components/buttons/ActionLink.jsx`, `src/components/sections/CTASection.jsx`, `src/components/navigation/SiteNav.jsx`, `src/styles/tokens.css` (transition tokens if needed), `src/animations/*` only if reference requires (avoid refactor).

### E. Typography — line counts, clipping, overflow, fixed heights

**Observed (live @1168):**
- **Homepage hero H1:** text `I design thoughtful digital products for complex experiences` renders **3 lines** (height ~228px, line-height 76px, width 714px, `font-size: 76px` in tablet band) — **exceeds 2 lines on desktop/tablet**.
- **About H1:** `I design digital products around real problems and clear decisions` renders **4 lines** (~304px) — exceeds 2 lines.
- **Work H1:** `Selected product design work for web and mobile products` renders **2 lines** (~152px) — within limit at tested size.
- **Case-study title (sample `offx-redesign`):** 1 line at tested size.

**Other typography/container risks (code):**
- Fixed/derived heights and constrained wrappers exist (e.g. `.about-cv__row` heights, `.hero__title-wrap`/max-widths, `.cs-*` max-widths, nav `overflow: hidden` on CTA, sticky/preview elements). Personalized/placeholder text can cause **wrapping, overflow, or clipping** if containers assume original string lengths.
- `overflow: visible` on measured hero H1 is fine now, but any parent with `overflow: hidden` or fixed height (nav, buttons, rows, media wrappers) can clip when copy changes.
- Footer email/labels are sized for prior content; long email or added phone text in “currently” should be rechecked for overflow/wrap consistency.

**Affected files:** `src/data/site.js` (headline/H1/copy), `src/styles/sections.css`, `src/styles/pages.css`, `src/styles/nav.css`, `src/styles/buttons.css`, `src/styles/footer.css`, `src/styles/typography.css`, `src/styles/responsive.css`.

### F. Resume — preview URL, download action, file handling

**Observed:**
- **About page (`src/pages/About.jsx`):** `<Button href="[RESUME_URL]" target="_blank" rel="noreferrer" label="Download Resume" variant="ghost" />` — placeholder href, opens new tab behavior intended, **no `download` attribute**, and URL is invalid.
- **Footer (`src/data/site.js`):** Resume link `href: '[RESUME_URL]'` — same placeholder.
- **Uploaded CV:** available locally as `/Users/user/Downloads/Olatunde UI_UX RESUME (1).pdf` but **not placed in project repository** and no confirmed served path. Correct file handling (public/served asset path, `download` filename behavior, and preview/open choice) cannot be finalized until path is confirmed.

**Affected files/components:** `src/pages/About.jsx`, `src/data/site.js`, `src/components/footer/SiteFooter.jsx` (consumes data), `src/components/buttons/Button.jsx` (if `download` support/prop needed), project static asset location (e.g. `public/`) once approved.

---

## 3) Cross-cutting observations (all pages)

- **Shared components for global correction:** `SiteNav`/`nav.css` (B), `CTASection`/`Button`/`ActionLink`/`buttons.css` (D, F support), `SiteFooter`/`footer.css` + `site.js` (F, contact consistency), and shared container/page-shell rules in `global.css`/`pages.css`/`sections.css`/`responsive.css` (A, E).
- **Per-page/content-driven issues:** H1 line counts and copy fit (E) require page-specific copy adjustments (Home/About primary offenders) while preserving meaning and existing design; About CV content/completeness (C) requires verified CV data insertion.
- **Case studies (all 11 routes):** shell/container alignment appears consistent in sampled check, but each route must be verified for spacing, typography overflow, and correct assets/links once content is replaced (currently original case-study content/assets remain in many cases; outside this correction’s visual scope but relevant to QA).
- **Contact page/section:** no dedicated `/contact` route; contact is via CTA + footer + nav WhatsApp — corrections should be applied consistently to these shared surfaces.

---

## 4) Recommended minimal fixes (no redesign/refactor)

| Issue | Minimal fix | Global vs local | Potential conflicts/notes |
|---|---|---|---|
| **B. Nav bleed-through** | Add nav surface (e.g. `background: var(--color-page)` / `#fff` or reference-matched token) and, if reference uses it, a minimal `backdrop-filter` + safe fallback; keep existing dimensions, rule, z-index, and behavior. | **Global** (`nav.css`, optionally token) | Must not obscure layout or change height; verify mobile/menu states and contrast; ensure rule remains visible as in reference. |
| **B. Nav scroll behavior** | If reference changes opacity/background on scroll, add the smallest state hook/class tied to scroll (reusing existing patterns if any) without restructuring markup. | **Global** (`SiteNav.jsx`/`nav.css`) | Avoid introducing new animation libraries or refactors; keep appear animation intact. |
| **A. Section/container alignment** | Verify and align only mismatched padding/gap/max-width values to reference per page/section (prefer adjusting shared shell/container rules where applicable); do not invent new breakpoints. | **Mixed**: global shells (`global.css`, `pages.css`, `responsive.css`) + targeted section overrides if a single section diverges | Risk of regressions across pages when changing shared wrappers; adjust one scope at a time and recheck all pages. |
| **D. CTA/button hover** | Add reference-matched hover/focus-visible states (e.g. background/opacity/arrow/underline transitions) using existing transition tokens/timings where known; animate action-link/nav underline width/opacity smoothly instead of instant jump if reference indicates motion. | **Global** (`buttons.css`, `nav.css`, CTA/footer link styles if needed) | Timing values may be unverified (per audit notes) — choose minimal, consistent transitions and validate visually against reference; avoid changing sizes/layout. |
| **E. H1 line length (>2 lines desktop)** | Shorten/reshape **hero** and **About** H1 copy (and adjust accents) to fit within ~2 lines at desktop/tablet while preserving meaning/identity; keep font sizes/line-heights/layout unchanged. | **Local/content** (`src/data/site.js` `hero.headline/accentWords`, `aboutPage.h1/accentWords`) | Text changes affect wrap points at all breakpoints; recheck mobile and accent highlighting spans. |
| **E. Overflow/clipping** | Remove/adjust only problematic fixed heights or overflow constraints where content legitimately needs room (e.g. About CV row/description containers) while preserving original visual structure; prefer `min-height` or auto height within existing grid if needed. | **Targeted** (`pages.css`, section styles) | Must not alter grid/spacing system; test with real CV content to avoid reintroducing clipping. |
| **C. About CV/education completeness** | Populate verified responsibilities/achievements per role from CV, confirm degree title (if available) and education details; keep existing CV layout/fields/order unless source requires otherwise. | **Local/content** (`src/data/site.js` `aboutPage.cv`) | Requires verified source text; do not invent. Row height/wrapping may need the minimal overflow fix above. |
| **F. Resume URL & download** | Place uploaded CV in repo (e.g. `public/` served path) after confirming final path/name; set correct href in `aboutPage`/footer data (and/or centralize), add `download` attribute/filename where appropriate, and keep preview/open behavior aligned with reference/intent. | **Global data + Button/links** (`site.js`, `About.jsx`, `Footer` data consumption, `Button.jsx` if `download` prop needed) | Must confirm path before wiring; avoid breaking external-link behavior for other buttons; ensure file is accessible in dev/build. |
| **E/A. Footer/contact fit** | Recheck footer columns/bottom line wrapping after content updates (phone added, resume state); adjust copy length minimally if wrapping breaks alignment. | **Local/content** (`site.js` footer) with existing footer layout | Keep column structure/count and styles unchanged. |

---

## 5) Shared components to correct globally (preferred)

1. **`src/components/navigation/SiteNav.jsx` + `src/styles/nav.css`** — nav surface/background/backdrop, stacking consistency, and nav CTA hover/underline behavior.
2. **`src/components/sections/CTASection.jsx` + `src/components/buttons/Button.jsx` + `src/components/buttons/ActionLink.jsx` + `src/styles/buttons.css`** — CTA/button hover states and transitions (and `download` support for resume if required).
3. **`src/components/footer/SiteFooter.jsx` + `src/data/site.js` (`footer`, `cta`, `nav`)** — resume/contact link correctness and consistent CTA/contact behavior across pages.
4. **`src/styles/global.css`, `src/styles/pages.css`, `src/styles/sections.css`, `src/styles/responsive.css`** — shared spacing/container/typography/overflow rules where a single source of truth fixes multiple pages.

---

## 6) Potential conflicts with existing styling / implementation

- **Nav background addition:** a solid/backdrop nav may cover anchored content or interact with page top padding (`--root-pad-top`, page paddings 64/92/144px) and appear animations; verify sticky/scroll behavior and no double backgrounds.
- **Hover transitions on formerly instant states:** adding transitions to underline/hover widths can conflict with `will-change`/transform expectations or existing unverified behaviors; keep durations minimal and scoped.
- **Copy shortening for H1s:** changing accent words/spans must remain compatible with `AccentText` rendering and not overflow headline wrappers at 810–1279 and ≤809.
- **About CV row fixed heights:** real multi-line responsibilities may require relaxing fixed row heights in `pages.css`; changing this can affect rule positions/pitch and must be checked carefully against reference rhythm.
- **Button `download` semantics:** adding `download` prop/attribute in `Button.jsx` is a small API/content-behavior change used globally; ensure external links and non-download buttons remain unchanged.
- **Resume file serving:** path choice (`public/` vs imported asset) affects build/dev URLs; confirm once to avoid broken links across environments.
- **Content-only personalization still incomplete elsewhere (projects/case studies):** corrections must not alter or “fix” unrelated project content/design; keep scope to issues A–F.

---

## 7) Reference comparison gaps (to validate during Phase 1)

- Live sandeep.design could not be sampled in-browser during this audit session (tab error). Validate against **https://www.sandeep.design/** and/or `reference-audit/*` (layout measurements, DOM structure, responsive/motion notes) for: exact nav surface/scroll behavior, CTA hover timings/states, section-to-section spacing per page, and desktop H1 line treatment in the original.
- Recheck at representative widths (e.g. 390, 810, 1168, 1280/1440) and during scroll (nav) and hover states (buttons/links/rows) after applying minimal fixes.

---

## 8) Recommended correction order (after approval)

1. **Global/shared:** nav surface/stacking (B) → CTA/button/link hover consistency (D) → resume path wiring + download behavior (F).
2. **Content fit (design-preserving):** adjust hero/About H1 copy for ≤2 desktop lines (E) and footer/contact fit as needed (A/E).
3. **About data/completeness:** insert verified CV responsibilities/achievements and finalize education details (C), with minimal overflow fixes if required (E).
4. **QA pass:** all pages/routes + nav scroll + hovers + resume download/preview + responsive widths against reference; report diffs.

**Audit status:** complete. **No files modified.** Awaiting approval before Phase 1 corrections.