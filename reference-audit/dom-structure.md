# DOM Structure — Reference Audit

Site: https://www.sandeep.design/ · Framer SSG · Extracted 2026-11-06

> **Replication note:** the markup below is Framer-generated (`framer-*` classes, `data-framer-*` attributes, `ssr-variant` blocks). Re-author the *structure and styles*, not the class names.

---

## 1. Global shell (all routes)

```
body (font-size:12px; color:#000; background:#fff; margin:0)
└─ div                                   ← route root, background #fff
   └─ div.framer-P9pAQ framer-d1G5N …    ← page wrapper: display:flex; flex-direction:column;
      │                                    gap:100px; padding:64px <gutter> 0;
      │                                    gutter = 16px ≤809 | 32px 810–1279 | 40px ≥1280
      ├─ div.framer-75hqfs-container     ← (SSR slot)
      ├─ div.framer-dgmr2u-container     ← FIXED NAV container (position:fixed; top:0; z-index:8)
      │   └─ div (inner row: flex; gap:12px; padding:12px <gutter> 0; align-items:center)
      │       ├─ [logo]  a[aria-label="Sandeep.Design's Logo"] → div → p "Sandeep Kumar"
      │       ├─ [desktop] nav > a HOME | a WORK | a ABOUT | a BOOK A CALL (cal.com ↗)
      │       │            + underline bar (h1px, bg #0A0A0A) + arrow SVG 20×20
      │       ├─ [mobile]  div[data-highlight][tabindex=0] → p "menu" + hamburger (2× 16×1px bars)
      │       └─ div.framer-kum8tb-container → 1px rule (bg #212121) under nav
      ├─ div.framer-cvhcy1               ← PORTFOLIO '26 bar (appears y67 @1168)
      ├─ section[aria-label="Hero"]      ← hero
      ├─ div.framer-7u5tdv / yzqlro      ← subcopy + action links row
      ├─ section[aria-label="Works"] ×N  ← featured case + work rows
      ├─ div (03 WHY / 04 HOW / 05 TRUSTED BY sections)
      ├─ div[aria-label="CTA"]           ← CTA card
      ├─ footer[aria-label="Footer"]     ← footer + bubble game
      └─ div.ssr-variant.hidden-1x3cca ×2 ← Framer SSR variant switches (hide at certain widths)
```

- Source: live DOM walk (`browser.evaluate` tree traversal) · viewport 1168×975.
- A11y landmarks present: `[navigation] "Navigation"`, `[region] "Hero"`, `[region] "Works"` ×5, `[generic] "CTA"`, `[contentinfo] "Footer"`.

## 2. Homepage sections (vertical order + measured Y @1168)

| # | Element | Y (doc-absolute) | Notes |
|---|---|---|---|
| 1 | fixed nav | 0 (h45) | fixed, always on top; 1px rule at y44 |
| 2 | PORTFOLIO '26 bar | 67 | |
| 3 | `section[aria-label=Hero]` | 180 (h228) | H1 76px, per-char spans |
| 4 | subcopy + actions | 468 | "Product & UX/UI designer…" + HIRE ME ON CONTRA / GET IN TOUCH |
| 5 | `01 / FEATURED CASE` label | 597 | two-line 12px label, box h33 |
| 6 | featured-case card | 674 (h501) | row: 360px text col + 720px image col, gap 24 |
| 7 | `02 / SELECTED` + work rows | rows from ~1255 (P.02 y1332) | rows: P.02–P.05-style entries with preview-on-hover |
| 8 | `03 / WHY` | 2020 | |
| 9 | `04 / HOW` | 2742 | includes glass-shadow elements (see design-tokens shadows.glass) |
| 10 | `05 / TRUSTED BY` | 3288 | 6-item logo list (`<ul>` 6× `<li>` in a11y tree) |
| 11 | CTA card | 3491 (h376) | bg #E5E3DB, padding 60 (100 at ≥1280) |
| 12 | email row | 4002 | `hello@sandeep.design` 52px |
| 13 | footer | 3967 (h994) | WRITE TO ME block + 3-col links + game |

Source: live section-position pass · 1168×975. (CTA inner elements measured with a possible +20px appear-animation offset — see `layout-measurements.json` → `home.cta.yCaveat`.)

## 3. Footer + bubble game

```
footer[aria-label=Footer] (flex; column? gap:80px; w1104)
├─ div.framer-a2ocwx          (h115)  "WRITE TO ME" + hello@sandeep.design 52px
└─ div.framer-xuuv6k          (h799)
   ├─ 3 columns (flex, gap 49px, equal width):
   │   PAGES: Home / Work / About
   │   ELSEWHERE: Dribbble / LinkedIn / Resume
   │   CURRENTLY: Open to full-time/contract roles / Replies within 2hrs
   ├─ bottom line: COPYRIGHT 2026 · BASED IN INDIA · WORKING WORLDWIDE · BUILT WITH LOVE
   └─ game container (x32 y4305 w1104 h600; overflow:hidden; bg #FAF9F7; position:relative)
       ├─ <div style="position:absolute;inset:0">            ← playfield (bubbles spawn here)
       ├─ <div style="position:absolute;left:0;bottom:8px;   ← score
       │     font:400 10px PP Neue Montreal Regular; letter-spacing:.04em">
       │     <b>0</b> SCORE · <b>0</b> POPPED</div>
       └─ <div style="position:absolute;right:0;bottom:0;     ← controls
             display:flex;gap:4px;z-index:7">
           <button aria-label="Toggle sound" 30×30>  <button aria-label="Reset" 30×30>
```

Source: live DOM (`footer` + game-container probes) · 1168×975.
Bubble nodes are **not** in the DOM at rest — they are spawned by JS (keyframes `bfrise/bfwob/bfring/bfflash/bffade/bfpop/bfconf/bfspin`, CSS var `--travel`).

## 4. Work row (home + /work share the pattern)

```
a[href=./work/<slug>/]                    (flex; row; gap:40px; no border; no padding; w1104)
├─ div.framer-1wbsv4y                     ← hover preview wrapper (197×132; opacity:0 at rest;
│   │                                       x692 y1291 i.e. overlapping the row's top edge)
│   └─ img (WfDIJ0KRJ019FAQYHr30yJGl0c.jpg?width=518; cover)
└─ div.framer-oy1wcp                      ← content row (flex; row; gap:20px; w1104 h103)
    ├─ p  "P. 02"                          12/500 #2A2A2A  (x32, w40 col)
    ├─ div (text stack)
    │   ├─ h4  "Herd - Simplifying…"       26/500 #0A0A0A  (x92 w531)
    │   └─ p   "Herd.eco is a…"            14/400 #2A2A2A  (x92 w420 h59)
    └─ right cluster (right-aligned; offsets from row right edge are constant):
        ├─ p "PRODUCT DESIGN"   12/500 #2A2A2A   (rowRight−266)
        ├─ p "2025-26"          12/500 #2A2A2A   (rowRight−93)
        └─ svg arrow 23×23      color #6F6E6A     (rowRight−19)
```

Source: live DOM leaf/child measurement · 1168×975; right-cluster offsets verified at 810/1023/1168 (iframe probes + live).

## 5. Case-study page (`/work/<slug>/`)

```
div.framer-6F3hC …                        (flex; column; gap:60px; padding:144px 32px 0; bg #fff)
├─ fixed nav (same shell)
├─ meta row: PRODUCT DESIGN · 2022-23 · CRYPTO/FINTECH
├─ h1 "Crypto No code Data Builder"        (76px display style; per-char? — h1 text extracted)
├─ intro paragraph: "The Delphi Chart builder is an intuitive no-code solution…"
├─ hero image (bin6vivTjf7oNqgZMr51mPIBpjk.jpg, full 1104×621, cover)
├─ fact row: ROLE Product Designer · DURATION 2-3 Months · STATUS Sunset
└─ section blocks (gap:40px) ×N, each:
    ├─ LEFT RAIL  (width 266; position:sticky; top:60px; height 190–215)
    │    e.g. section labels that stick while their section scrolls
    └─ CONTENT COLUMN (x338; width 798)
         ├─ H2/H3 (42px / 32px display styles)
         ├─ paragraphs
         └─ images at 798px wide (cover, 50% 50%, no radius); some inset (e.g. 658px wide)
```

- Source: live DOM on `/work/no-code-data-builder/` · 1168×975 · scrollHeight 15289.
- 5 sticky rails observed at y 1136 / 2365 / 6075 / 7776 / 12614 (top:60px).
- All 11 case-study routes share this shell (confirmed structurally across fetched HTML in `/tmp/sd_pages/p1..p11.html`).

## 6. About page (`/about`)

```
fixed nav
├─ h1 "I design things that work and look clean"     (76px; per-character spans; y124)
├─ 01 ABOUT ME label
├─ 02 CURRICULUM VITÆ + H2 "Where I've worked…"      (48/48/−1.92; y421)
│   └─ CV rows: 2022—2026 Delphi Digital LLC … (React onMouseEnter present, no visual hover change)
│   └─ DOWNLOAD RESUME button (160×32 at x976 y485; bg transparent → hover rgba(230,228,220,.27))
├─ H2 "Simplicity comes from knowing…"               (48px; y1441)
├─ H4 "What working together actually looks like."   (26/33.8; y1988) + T.01–T.03 belief cards
├─ H2 "Now you know me. Want to work together?"      (42/46.2/−0.84; x92 y2533)
└─ footer (same shell)
```

Source: live DOM · 1168×975 · scrollHeight 3891.

## 7. Route map

| Route | Title | scrollHeight @1168 |
|---|---|---|
| `/` | Sandeep Kumar — Product Designer | 4961 |
| `/work` | Work | 3671 |
| `/about` | About | 3891 |
| `/work/offx-redesign/` | Work | (fetched) |
| `/work/herd-simplifying-blockchain-with-ai/` | Work | (fetched) |
| `/work/no-code-data-builder/` | Work | 15289 |
| `/work/corestack-enterprise-control-panel/` | Work | (fetched) |
| `/work/making-direct-mail-campaigns-easier-to-launch-manage-and-measure./` ← **trailing dot in slug** | Work | (fetched) |
| `/work/zenrock-webapp-design/` | Work | (fetched) |
| `/work/zenrock-website-design(mvp)/` ← **parens in slug** | Work | (fetched) |
| `/work/getlit-webapp/` | Work | (fetched) |
| `/work/houzecheck-webapp/` | Work | (fetched) |
| `/work/mindlantic/` | Work | (fetched) |
| `/work/swoop/` | Work | (fetched) |

Source: `curl` fetch of all 14 routes (HTTP 200) + live navigation · 2026-11-06.

## 8. UNVERIFIED (structure)

See `UNVERIFIED-VALUES.md` §D:
- **D1** Trusted-By logo list item geometry (6 `<li>` confirmed; per-logo rects not measured).
- **D2** Mobile MENU open panel DOM (trigger found; open state not reachable with synthetic events).
- **D3** Why/How section internal structure (glass elements + keyframes seen; full child tree not walked).
- **D4** Whether all 11 case studies use identical section-block structure (shell confirmed from HTML; only 1 measured in DOM).
