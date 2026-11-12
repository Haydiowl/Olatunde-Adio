# Case Study Route Structures (Phase 4 inspection)

Source: live HTML/text extracts captured to `/tmp/cs-audit/*.{html,json,txt,out.json}` on 2026-11-12 from `https://www.sandeep.design/work/<slug>`.

## Common shell (all routes)
- Nav (fixed) → case-study root (`padding 144px <gutter> 0`, background `#fff`, column layout).
- **Hero block**: meta row (category / year / industry), H1 title, lede, facts row (Role, Duration, Status, Project link with external arrow), hero image (16:9 cover).
- **Body/content**: route-specific composition (see per-route notes).
- **See also**: "02 — SEE ALSO" label + 10 project rows (title, year, category, arrow) linking to `/work/<slug>`.
- **Footer**: standard site footer (email, Pages/Elsewhere/Currently columns, game, bottom line). No CTA block on case-study pages.

## Routes

### 1. `no-code-data-builder` (P.03, Product Design, 2022-23) — **long-form rail layout**
- **Structure:** Hero + 5 two-column body sections (sticky left rail: number/label/anchor links + light rule separators) + root dividers/spacer + See also + Footer.
- **Sections:** `03 CONTEXT` (paras, quote, My Role subhead/list), `02 USERS & PROBLEM` (heading, intro, image, numbered lists, challenges), `03 PROCESS` (header, decisions list, image block), `04 SOLUTION` (overview header, FLOW group w/ step images, divider, WORKSPACE group), `05 IMPACT & LEARNINGS` (outcomes/impact cards, learnings).
- **Notes:** Detailed live-verified implementation/data in `src/data/caseStudies.js` and `CaseStudy.jsx`. 10 content images (+ hero). DocH ~15289 @1168 live.

### 2. `offx-redesign` (P.01, Product Design, 2024-25) — **long-form rail layout (complex)**
- **Structure:** Hero + multi-section rail composition (numbered sections 01–05 observed; rich headings h2–h6, 28 imgs). Sections/markers include Context, Users & Problem (subparts A/B/C/D, challenges), Process/Solution elements, Impact/Learnings (L.01–L.03) patterns.
- **Notes:** Distinct sub-block structure (A/B/C/D cards, figures/captions, dense explanatory text) differing in block types/detail from no-code-data-builder. Currently rendered with hero + extracted content/images + See also/Footer; requires per-section block modeling for full structural fidelity.

### 3. `herd-simplifying-blockchain-with-ai` (P.02, Product Design, 2025-26) — **long-form rail layout (complex)**
- **Structure:** Hero + 01–05 rail sections (22 imgs). Markers: CONTEXT/PROBLEM/USERS/CHALLENGES, SOLUTION/PROCESS, IMPACT/LEARNINGS (L.01–L.03) with A/B/C/D subparts.
- **Notes:** Unique problem framing and section content; similar long-form shell, different internal blocks. Basic content/image rendering in place; per-section modeling needed for full fidelity.

### 4. `corestack-enterprise-control-panel` (P.04, Design concept, 2026) — **long-form rail layout**
- **Structure:** Hero + 01–06 numbered sections (7 imgs). Markers: CONTEXT/USERS/PROBLEM/RESEARCH/OVERVIEW/SOLUTION/OUTCOMES, PRINCIPLES, PROBLEM→SOLUTION, figures.
- **Notes:** Research/principles/outcomes emphasis; different section mix than no-code. Basic content/image rendering in place.

### 5. `making-direct-mail-campaigns-easier-to-launch-manage-and-measure.` (P.05, Design concept, 2026) — **long-form rail layout**
- **Structure:** Hero + 01–05 numbered sections (13 imgs). Markers: CONTEXT/USERS/PROBLEM/OVERVIEW/SOLUTION/OUTCOMES/CHALLENGES.
- **Notes:** Trailing-dot slug preserved. Distinct guided-product narrative/sections. Basic content/image rendering in place.

### 6. `zenrock-webapp-design` (P.06, Product Design, 2024-25) — **long-form rail layout**
- **Structure:** Hero + 01–06 numbered sections (19 imgs). Markers: CONTEXT/USERS/PROBLEM/OVERVIEW/PROCESS/SOLUTION/IMPACT/LEARNINGS/OUTCOMES, UX & IA.
- **Notes:** Larger image set; app-redesign process/solution emphasis. Basic content/image rendering in place.

### 7. `zenrock-website-design(mvp)` (P.07, UI/UX, 2024-25) — **short/compact layout**
- **Structure:** Hero + compact content (7 imgs) with numbered markers observed (01–04,07) but fewer/shorter sections than long-form rail cases; emphasis on overview/role/problems & solutions/visuals.
- **Notes:** Simpler composition than full rail case studies; rendered as simple content+gallery with hero/See-also/Footer.

### 8. `getlit-webapp` (P.08, UI/UX, 2021, Edtech) — **simple/portfolio layout**
- **Structure:** Hero (facts: 8-12 Weeks, Shipped, live link) + intro paragraphs describing platform + labeled final-design/wireframe/high-fidelity image sequence (11 content images) + See also + Footer. No multi-section rail.
- **Images:** hero + Mobile/Wireframe/High-fidelity series.

### 9. `houzecheck-webapp` (P.09, UI/UX, 2022, Real Estate) — **simple/portfolio layout**
- **Structure:** Hero + intro/problem/solution text + labeled image sequence (11 content images) + See also + Footer. No rail.

### 10. `mindlantic` (P.10, UI/UX, 2021, Productivity) — **simple/portfolio layout**
- **Structure:** Hero + intro paragraphs + labeled screens/sections (e.g. final screens, problems and solution, wireframes, v2 items, high-fidelity) as image sequence (12 content images) + See also + Footer. No rail.

### 11. `swoop` (P.11, UI/UX, 2021, Restaurant) — **simple/portfolio layout**
- **Structure:** Hero + intro/description + labeled image sequence (11 content images) + See also + Footer. No rail.

## Implementation status (local)
- **Routing:** all 11 slugs resolve via `/work/:slug` → `CaseStudy` (no redirect); `no-code-data-builder` uses detailed rail renderer; others render with hero/facts, extracted intro/body items, content images, See-also, and footer (simple/generic composition). All referenced case-study images exist in `reference-audit/assets/images`.
- **Gap:** complex routes (offx, herd, corestack, direct-mail, zenrock-webapp, and parts of zenrock-website mvp) require per-route section/block data modeling to reproduce their original rail compositions and internal block types with full fidelity.
