# Typography — Reference Audit

Site: https://www.sandeep.design/ · Extracted 2026-11-06 · Primary viewport 1168×975 CSS px (DPR 2)

Every value lists **source · viewport · element**. Values probed at controlled widths are labeled `iframe Wpx`.

---

## 1. Font families

| Family | Weight | Source |
|---|---|---|
| PP Neue Montreal Medium | 500 | `document.fonts` enumeration — **loaded** on home · 1168×975 |
| PP Neue Montreal Regular | 400 | `document.fonts` — **loaded** on home · 1168×975 |
| PP Neue Montreal SemiBold | 600 | `document.fonts` — **loaded** on home · 1168×975 |
| PP Neue Montreal Bold | 700 | `document.fonts` — declared, *unloaded* on home · 1168×975 |
| PP Neue Montreal Book | 400 | `document.fonts` — declared, *unloaded* · 1168×975 |
| Neue Montreal Regular | 400 | `document.fonts` — declared, *unloaded* · 1168×975 |
| Fragment Mono | 400 | `@font-face` ×3 subsets (Google Fonts) · declared, *unloaded* on home |
| Inter | 400 | `@font-face` (Google Fonts) · declared |
| JetBrains Mono | 400 | `@font-face` declared (see `asset-inventory.json`) |

- Network-confirmed fonts on home (browser network log): exactly **3 woff2** — `6uIfYl8bnz9kOy3KOuV7PxhFPhA.woff2` (Medium), `kJNAUoYMYbf89EGcrWXRKqEeMc.woff2`, `4MKMq3fAUvPlUf3nRWmLMzBRBc.woff2`.
- All `@font-face` URLs + local copies: `asset-inventory.json` (59 files, 1,006,624 bytes).
- Fallback stacks as declared: `"PP Neue Montreal Medium", "PP Neue Montreal Medium Placeholder", sans-serif`.

## 2. Type scale (measured)

All homepage/about measurements via `getComputedStyle` on live DOM · viewport **1168×975** unless a probe width is given.

| Size | Line-height | Letter-spacing | Weight | Color | Where observed |
|---|---|---|---|---|---|
| **100px** | 90px | −4px (−0.04em) | 500 | rgb(10,10,10) | H1 `iframe 1280/1440` (home hero) |
| **76px** | 76px | −3.04px (−0.04em) | 500 | rgb(10,10,10) | Home H1 · About H1 (x32 y124 w714) · `iframe 810–1279` |
| **54px** | 48.6px | −2.16px (−0.04em) | 500 | rgb(10,10,10) | H1 `iframe 390/809` (w342 x16) |
| **52px** | 65px | −0.2px | 500 | rgb(10,10,10) | `hello@sandeep.design` email row (type census) · 1168 |
| **48px** | 45.6px | −1.44px (−0.03em) | 500 | rgb(10,10,10) | Featured-case title words ("Crypto", "code", "Data" spans) · 1168 |
| **48px** | 48px | −1.92px (−0.04em) | 500 | rgb(10,10,10) | About H2 "Where I've worked…" (y421) & "Simplicity comes from…" (y1441) · 1168 |
| **42px** | 46.2px | −0.84px (−0.02em) | 500 | rgb(10,10,10) | CTA H2 (y3603), About closing H2 (y2533), case-study sub-headings · 1168 |
| **32px** | 41.6px | −0.3px | 500 | rgb(10,10,10) | Case-study H3 "My Role", "Complex data…" · 1168 |
| **26px** | 33.8px | normal | 500 | rgb(10,10,10) | About H4 "What working together…" (y1988); work-row titles are **26px/500** with lh ≈34 (h4 box 34px) · 1168 |
| **16px** | (not captured) | — | 400 | rgb(42,42,42)-ish | Body copy (type census bucket) · 1168 |
| **14px** | (not captured — box h59/2-line desc) | — | 400 | rgb(42,42,42) | Work-row descriptions (x92 w420 h59) · 1168 |
| **12px** | 12px (labels/buttons) | 0.12px | 500 | rgb(42,42,42) | Nav links (uppercase), section labels, meta rows, CTA labels/buttons |
| **12px** | normal | normal | 400 | rgb(42,42,42) | Logo link `SANDEEP KUMAR` renders rgb(14,14,15); READ MORE button label |
| **10px** | (box h12) | 0.04em | 400 | rgb(10,10,10) | Bubble-game score `<b>0</b> SCORE · <b>0</b> POPPED` (PP Neue Montreal Regular) |

### Recurring style recipes (verified on multiple elements)

- **Nav / label / button style:** 12px · weight 500 · letter-spacing 0.12px (0.01em) · uppercase · `rgb(42,42,42)`.
  - Observed on: nav HOME/WORK/ABOUT, `GET IN TOUCH`, `HIRE ME ON CONTRA`, `EMAIL ME`, `OPEN TO FULL-TIME/CONTRACT ROLES`, `REPLIES WITHIN 2 HRS`, CTA labels — source: CTA/nav measurements, 1168.
- **H1/H2 display style:** PP Neue Montreal Medium 500, letter-spacing −0.04em, color `rgb(10,10,10)`, line-height 1.0 (76/76, 48/48, 54/48.6 = 0.9).
  - 42px display uses lh 1.1 (46.2) and ls −0.02em.
- **Section labels** (`01 / FEATURED CASE`): 12px · ls normal · not uppercase-transformed (raw text is already caps) · two stacked lines, box h33 · `iframe 810–1279` + live 1168 (y597).

## 3. Per-character text reveal

- **Home H1** and **About H1** are split into one `<span>` per character (a11y tree shows `[StaticText] "I"` followed by dozens of `[generic] ""` slots) — a Framer staggered character reveal.
- Source: `browser.snapshot` a11y tree + DOM inspection · 1168×975 · `h1` elements on `/` and `/about`.
- Other headings (work rows, About H2s) are *not* split.

## 4. Font rendering notes for the rebuild

- Body element font-size is **12px** (Framer default) — anything not explicitly sized inherits 12px.
- Body font-family is `sans-serif` on `<body>`; families are applied per-component via Framer text styles (`framer-styles-preset-*`).
- `textTransform: uppercase` is applied via CSS on nav/labels (raw HTML text is mixed-case: e.g. mobile trigger text is `menu`, renders `MENU`).

## 5. UNVERIFIED (typography)

See `UNVERIFIED-VALUES.md` §T:
- **T1** line-height/letter-spacing for the 16px and 14px buckets (only font-size/weight/color captured; 14px description box is h59 for a 2-line paragraph).
- **T2** whether the H1 has an explicit `max-width` (714px constant across 810–1279 suggests a cap; at ≥1280 the H1 measured 972px wide at 1440 — could be natural wrap).
- **T3** CTA H2 width behavior (689px at 1168 vs 600px at 1440 — likely a max-width change, not confirmed).
- **T4** exact font-weight used for `<b>` in the game score (HTML `<b>` may synthesize bold from Regular).
