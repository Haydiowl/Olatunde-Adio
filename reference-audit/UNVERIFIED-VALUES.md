# UNVERIFIED VALUES

> Section required by the audit brief: **UNVERIFIED VALUES** — anything that could not be extracted
> from the live reference site with the available tooling. Each entry states what is unknown, what
> *was* observed, and why it could not be established. **Do not invent these values during
> implementation — resolve them visually against the reference or ask.**

Audit date: 2026-11-06 · Reference: https://www.sandeep.design/
Cross-referenced from: `design-tokens.json`, `layout-measurements.json`, `typography.md`,
`dom-structure.md`, `animation-inventory.md`, `responsive-breakpoints.md`.

Tooling constraints that caused most gaps:
- **No viewport-resize tool** — responsive evidence comes from same-origin iframe probes, not true device emulation.
- **No element refs in a11y snapshots** (`browser.hover`/`browser.click` unusable) — hover/menu behavior exercised via synthetic DOM events, which cannot satisfy `:hover` or trusted-event checks.
- **Browser window occlusion** — rAF throttling and screenshot failures while the desktop window was hidden; several timed-out passes.
- Framer's animation configs live in JS closures (not CSS), so computed styles report `transition: "all"` without durations.

---

## §A — Animation

| ID | Unknown | What was observed | Why unresolved |
|---|---|---|---|
| A1 | Full Framer appear-animation JSON | 3 complete specs (nav `dgmr2u`, `cvhcy1`, `1e91r9o`) + partial `1fe07t7`; ids `8d38if`, `1d2ga08`, `8l2eok` (×4) exist | `#__framer__appearAnimationsContent` capture truncated at ~3000 chars |
| A2 | Per-character H1 stagger timing (delay/duration/easing per char) | H1s split into per-char `<span>`s; reveal is staggered | timing not present in captured appear JSON; no way to sample reliably under occlusion |
| A3 | Hover transition durations/easings (nav arrow, underline, button tint, preview image) | Rest→hover computed-style diffs captured (see animation-inventory §5b); underline expands 1px→95.2px layout width | changes are JS-driven (Framer Motion); computed `transition` = `"all"` with no duration; time-series sampling throttled by occluded window (sample timestamps stretched to multi-second gaps) |
| A4 | Whether nav links (HOME/WORK/ABOUT) have a hover variant | Only 9 CSS `:hover` rules exist, all Framer rich-text defaults; links carry React onMouseEnter/Leave | synthetic events on those specific links not isolated before timeout |
| A5 | Bubble-game spawn parameters | Keyframes `bfrise/bfwob/bfring/bfflash/bffade/bfpop/bfconf/bfspin`; `--travel`, `--pulse-scale` vars; score/controls DOM | no bubble nodes exist at rest (spawned by JS on interaction); game never activated (needs trusted pointer) |
| A6 | Exact frames of `bfflash`, `bffade`, `bfpop`, `bfconf`, `bfspin` | names confirmed | keyframe bodies not individually captured in the walk output |
| A7 | BOOK A CALL underline final opacity under a *real* pointer | bar reaches width 95.2px synthetically but opacity stayed `0`; arrow color did change to accent | synthetic events likely don't complete Framer's full hover variant state machine |

## §T — Typography

| ID | Unknown | What was observed |
|---|---|---|
| T1 | line-height & letter-spacing for 16px body copy and 14px descriptions | sizes/weights/colors captured; 14px description box h59 at w420 (2 lines ⇒ ~29.5px/line, not confirmed as line-height) |
| T2 | Whether H1 has an explicit max-width | width = 714px constantly across 810–1279 (suggests a cap); at ≥1280 measured 972px @1440 (could be natural wrap) |
| T3 | CTA H2 width rule | w689 @1168 vs w600 @1440 — likely a max-width change at ≥1280, not confirmed |
| T4 | `<b>` weight inside game score | rendered via `<b>` from PP Neue Montreal Regular 400 (synthetic bold possible) |
| T5 | Which fonts load per route | home network log shows 3 woff2; other routes not network-logged (all 59 files present in HTML) |

## §D — DOM / structure

| ID | Unknown | What was observed |
|---|---|---|
| D1 | Trusted-By logo list item geometry (05 section) | a11y tree: `<list>` with 6 `<listitem>`; section y3288 |
| D2 | Mobile MENU **open** panel DOM & animation | trigger fully mapped (`div[data-highlight][tabindex=0]`, 68×20 @x306 y12, hamburger 2×16×1px); clicks/pointer/keyboard synthetic events all failed to open it |
| D3 | Why (03) / How (04) section internals | glass multi-layer box-shadows captured (design-tokens `shadows.glass`); full child tree not walked |
| D4 | Per-section structure of the other 10 case studies | all 11 HTML files fetched (HTTP 200) and shell-verified; DOM-level measurement only for `no-code-data-builder` |
| D5 | Case-study left-rail sticky behavior details (what pins, label content per rail) | 5 sticky containers (top:60px, h190/215) at fixed y positions on `no-code-data-builder` |
| D6 | Whether work rows show a border/divider | row `border: 0px none` measured; visual hairlines (if any) come from a parent — parent border not captured |
| D7 | Right-cluster internal layout of work rows | leaf positions captured; container flex config (gaps between category/year/arrow) not read directly (derived constant offsets instead) |

## §R — Responsive

| ID | Unknown | What was observed |
|---|---|---|
| R1 | Complete mobile (<809) layout spec | H1 54/48.6/−2.16, nav pad 12/16/0, MENU, root pad 64/16/0, hero column, EMAIL ME stretched (697@809), scrollHeight 6001@390 + 390px screenshot |
| R2 | Case-study page below 1280 (rail stacking? content width?) | not probed |
| R3 | Exact width where the 1200px content cap engages | bracketed: not active at 1200 (1136 content), active at 1279 (1200 content, x40) |
| R4 | Targets of the 1023/1099/1199 media queries | rule counts known (35/4/11); no behavior change in the probed properties |
| R5 | Live-window nav-padding anomaly | direct read at a pass with innerWidth 1168 gave nav pad `12px 40px 0px`; iframe probe at 1199 gives `32px`. Window width fluctuates with the Review pane — probes treated as authoritative |

## §H — Hover / interaction

| ID | Unknown | What was observed |
|---|---|---|
| H1 | Real `:hover` states for all interactive elements | `document.querySelectorAll(':hover')` empty (no real pointer over page); synthetic results only for BOOK A CALL, DOWNLOAD RESUME, work row, CV row |
| H2 | Work-row preview reveal full timing | wrapper opacity 0→1 and inner image translateX −150→0 observed; duration/easing unknown (A3) |
| H3 | Bubble-game click behavior (pop scoring) | score UI present (`<b>0</b> SCORE · <b>0</b> POPPED`); interaction untested (trusted pointer required) |
| H4 | Case-study hash-link scroll behavior (`#reqs-→-decisions`) | hash present in URL; smooth-scroll config unknown (`scroll-behavior: auto` on html measured) |

## §P — Page-level

| ID | Unknown | What was observed |
|---|---|---|
| P1 | Whether `startViewTransition` is *ever* used (e.g. with a flag) | counter = 0 across a home→work nav; runtime bundle contains VT helpers (unused) |
| P2 | Framer route-loading indicator (if any) | MutationObserver saw no loader/overlay during nav |
| P3 | Exact footer column gap rationale | derived **49px** from 6 widths ((W−98)/3 fits all); raw `gap` property on the footer container read `80px` (that's the footer's column gap for its two blocks — the 3-column row's own gap was derived, not read) |
| P4 | Homepage section Y-positions stability | two passes differ by ~12–20px (appear-animation offsets); canonical values taken from the settled pass in `layout-measurements.json` |

## §X — Assets

| ID | Unknown | What was observed |
|---|---|---|
| X1 | Framer responsive image `srcset` widths per usage | base files downloaded; runtime URLs use `?width=N` params (e.g. `?width=518`, `?width=4053&height=2424`) — param sets not enumerated |
| X2 | Video assets | **none found** (0 mp4/webm/gif/svg across all 14 routes) — likely true negative, verified by regex over all fetched HTML |
| X3 | Favicon/OG image metadata | PNG assets exist in inventory; which file serves as favicon/OG not verified |
| X4 | Google Fonts subset strategy | 3 Fragment Mono subsets (cyrillic-ext/latin-ext/latin) captured with unicode-ranges; Inter/JetBrains/Neue Montreal subset rules partially captured |

---

### Resolution plan (recommended, post-approval)
1. Re-verify §A/§H items with a **real pointer** (Playwright `page.hover()` — needs approval to install) — resolves A2–A7, H1–H3 in one pass.
2. True **device emulation** (Playwright viewports) resolves §R fully.
3. Visual side-by-side screenshot diffing resolves T2/T3 (width rules) without reading source.
