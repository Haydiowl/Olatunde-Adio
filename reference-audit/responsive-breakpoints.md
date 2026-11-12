# Responsive Breakpoints — Reference Audit

Site: https://www.sandeep.design/ · Extracted 2026-11-06

**Method note:** no viewport-resize tool was available, so responsive behavior was verified two ways:
1. **CSS rule extraction** — full `CSSMediaRule` walk of all stylesheets (counts below).
2. **Same-origin iframe probes** — a fresh copy of the page loaded inside a fixed-width iframe; media queries respond to the *iframe* width, giving true computed values at each width. Probe widths: 390, 809, 810, 1023, 1024, 1099, 1100, 1199, 1200, 1279, 1280, 1440.

---

## 1. Breakpoint map

| Range | Name | Evidence |
|---|---|---|
| **≤ 809px** | mobile | media queries `(max-width: 809px) and (min-width: 0)` ×52 rules; `(max-width: 809.98px)` ×2 |
| **810 – 1279px** | tablet | `(max-width: 1023px) and (min-width: 810px)` ×35; `(max-width: 1099px) and (min-width: 810px)` ×4; `(max-width: 1199px) and (min-width: 810px)` ×11; `(max-width: 1279px) and (min-width: 810px)` ×2; `(min-width: 810px) and (max-width: 1279.98px)` ×2 |
| **≥ 1280px** | desktop | absence of the above + direct probe changes at exactly 1280 |
| other | `(prefers-color-scheme: dark)` ×1 rule (minimal — site is light) | stylesheet walk, homepage, 1168×975 |

Intermediate queries at **1023/1099/1199** exist but did *not* change H1, nav padding, root padding, featured-case direction, CTA button size, or footer column count in probes — they tune other elements (specific targets not isolated → UNVERIFIED §R4).

## 2. Verified behavior per range (iframe probes)

### ≤ 809px (mobile) — probed at 390 and 809

| property | value |
|---|---|
| H1 | **54px / 48.6px / −2.16px**, width 342 at x16 (390) |
| nav padding | `12px 16px 0px` |
| nav content | logo `SANDEEP KUMAR` only + **MENU trigger** (HOME/WORK/ABOUT links hidden) |
| root padding | `64px 16px 0px` (earlier mobile pass) |
| hero | `flex-direction: column; gap: 40px` |
| EMAIL ME button | stretches wide (697px at 809) |
| scrollHeight (home) | 6001 @390 · 5322 @809 |
| section label y | (mobile pass) |

MENU trigger detail (iframe 390): `div.framer-WPx5v[data-highlight][tabindex=0]`, text `menu` (uppercased by CSS), x306 y12, 68×20, right-aligned, hamburger = 2 bars × (16×1px), color `rgb(14,14,15)`.

### 810 – 1279px (tablet) — probed at 810, 1023, 1024, 1099, 1100, 1199, 1200, 1279

| property | value (constant across the range unless noted) |
|---|---|
| H1 | **76px / 76px / −3.04px**, width **capped at 714px** (measured 714 at every probe width 810→1279) |
| nav padding | `12px 32px 0px` (all probes 810→1279) |
| nav content | full links HOME WORK ABOUT + BOOK A CALL; MENU hidden |
| root padding | `64px 32px 0px`, gap `100px` |
| content width | `width − 64`, capped at **1200px** (measured: 746@810, 959@1023, 1035@1099, 1136@1200, **1200@1279 (x40, centered)**) |
| featured case | `flex-direction: column; gap: 24px` (probes); height grows 408→603 with width |
| CTA EMAIL ME button | 120×44 |
| footer | 3 columns, gap 49px, equal width (216@810 → 367@1279) |
| work row | gap 40px; height content-driven (140@810 — description wraps; 95@1023/1099; 103@1199/1279) |
| section label y | 617 (constant across range) |
| scrollHeight (home) | 5054@810 · 4846@1023 |

### ≥ 1280px (desktop) — probed at 1280 and 1440

| property | value |
|---|---|
| H1 | **100px / 90px / −4px**; width 972 at 1440 (h270 = 3 lines) |
| nav padding | `12px 40px 0px` |
| root padding | `64px 40px 0px`, gap `100px` |
| content width | **1200px fixed, centered** (x40 at 1280; x120 at 1440) |
| featured case | `flex-direction: row; gap: 40px`; card 1200×557 at 1440; left col **360px fixed**, image col flex-1 = 800px |
| CTA | padding **100px**, w1200 h456; H2 42px w600 |
| work row | w1200 h103 |

## 3. The three master switches

1. **809/810** — nav collapses to MENU; H1 54→76px; gutters 16→32px; hero stacks→(stays column but reflows); buttons stretch.
2. **1279/1280** — H1 76→100px; gutters 32→40px; H1 cap 714→(972 observed); featured case gap 24→40 and (at ≥1280 probes) row layout with fixed 360px text column; CTA padding 60→100px.
3. **Content cap 1200px** — engages between 1264–1279 (measured: 1200@1279 already capped with x40 centering; 1136@1200 not yet capped).

## 4. Breakpoint-sensitive CSS rules (extracted, representative)

```
(max-width: 809px) and (min-width: 0px)      13 rules  (plus 39 in the 809/0 query)
(max-width: 809.98px)                          2 rules
(max-width: 1023px) and (min-width: 810px)    35 rules
(max-width: 1099px) and (min-width: 810px)     4 rules
(max-width: 1199px) and (min-width: 810px)    11 rules
(max-width: 1279px) and (min-width: 810px)     2 rules
(min-width: 810px) and (max-width: 1279.98px)  2 rules
(prefers-color-scheme: dark)                    1 rule
```
Source: stylesheet `CSSMediaRule` recursive walk · homepage · 1168×975.

Framer also emits `ssr-variant` / `hidden-1x3cca` divs in the DOM (2 on home) — width-conditional SSR variants.

## 5. UNVERIFIED (responsive)

See `UNVERIFIED-VALUES.md` §R:
- **R1** mobile (<809) *full* layout spec: only H1/nav/root/hero-direction/CTA-button measured; work rows, footer, case-study pages at mobile not fully probed (one 390px screenshot exists: `home-mobile-390w.png`).
- **R2** case-study two-column layout below 1280 (sticky rail behavior at tablet/mobile untested).
- **R3** exact content-cap engagement width (somewhere in 1201–1279; probes at 1200 and 1279 bracket it).
- **R4** which elements the 1023/1099/1199 queries actually change.
- **R5** live-window anomaly: a direct DOM measurement at a pass reporting innerWidth 1168 read nav padding `12px 40px 0px`, contradicting the iframe probe at 1199 (`32px`). Controlled probes are treated as authoritative; the anomaly is attributed to the browser window width fluctuating with the Review pane between measurement steps.
