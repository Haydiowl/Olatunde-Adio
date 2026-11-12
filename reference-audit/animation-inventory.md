# Animation Inventory — Reference Audit

Site: https://www.sandeep.design/ · Framer runtime (motion library) · Extracted 2026-11-06
Primary viewport: 1168×975 (live DOM) unless noted.

---

## 1. Framer "appear" animations (scroll/mount reveal)

Source: `#__framer__appearAnimationsContent` JSON stylesheet + `data-framer-appear-id` attributes · live DOM · 1168×975.

| appear id | element (inferred) | initial | animate | delay | duration | ease (cubic-bezier) | type |
|---|---|---|---|---|---|---|---|
| `dgmr2u` | fixed nav (transformTemplate `translateX(-50%) __Appear_Animation_Transform__`) | opacity 0.001 | opacity 1 | 0.1s | 0.4s | **[0.36, 0.02, 0.14, 0.96]** | tween |
| `cvhcy1` | section/first content block | opacity 0.001, y 20 | opacity 1, y 0 | 0s | 0.5s | **[0.58, 0.02, 0.37, 0.99]** | tween |
| `1e91r9o` | block | opacity 0.001, y 20 | opacity 1, y 0 | 0.1s | 0.4s | **[0.44, 0, 0.32, 0.93]** | tween |
| `1fe07t7` | block | opacity 0.001, y 20 | (animate transition truncated in capture) | — | — | — | — |

Other appear ids present in DOM: `8d38if`, `1d2ga08`, `8l2eok` (×4 occurrences), `cvhcy1`, `1e91r9o`, `1d2ga08`… (attribute census count: 9 unique attribute patterns, `type="framer/appear"` ×2, `data-framer-appear-animation="no-preference"`).

**Behavior:** elements start at opacity 0.001 (+ translateY 20px for most), animate to final state when scrolled into view. Verified empirically: full-page screenshots taken *without* scrolling show blank regions; after a scroll pass the same regions render. During measurement passes, elements were observed mid-flight with `transform: matrix(1,0,0,1,0,20)` and opacity 0.001 (e.g. featured-case children measured +20px below rest).

## 2. Per-character text reveal

- **Home H1** and **About H1** are split into per-character `<span>`s; each character animates individually (staggered).
- Source: a11y tree (`[heading] "I d e s i g n t h i n g s…"` with per-char `[StaticText]`/`[generic]` slots) · live DOM · 1168×975.
- Exact per-char delay/duration/easing: **not exposed** in the appear JSON captured → UNVERIFIED (§A5).

## 3. CSS keyframes (stylesheet walk)

Source: all `document.styleSheets` `CSSKeyframesRule` enumeration · live DOM · 1168×975.

| name | keyframes | used by |
|---|---|---|
| `pulsingDotRipple` | 0%: `transform: scale(0.6); opacity:1` → 100%: `transform: scale(var(--pulse-scale, 2.2)); opacity:0` | 7×7px status dot (`OPEN TO WORK`), 2s infinite **ease-out** (computed on element) |
| `bfrise` | 100%: `transform: translateY(calc(-1*var(--travel)))` | bubble game (bubble rise; `--travel` set per element) |
| `bfwob` | 0%: `translateX(-14px)` → 100%: `translateX(14px)` | bubble game wobble |
| `bfring` | 0%: `scale(0.7); opacity:1` → 100%: `scale(1.9); opacity:0` | bubble pop ring |
| `bfflash`, `bffade`, `bfpop`, `bfconf`, `bfspin` | (present; full frames not individually captured) | bubble game FX |

Bubble-game elements spawn dynamically — no bubble nodes exist at rest, so per-bubble durations/iterations are **UNVERIFIED** (§A6).

## 4. CSS transitions (computed census)

Source: `getComputedStyle().transition*` over all elements · live DOM · 1168×975.

| property | duration | timing function | observed count |
|---|---|---|---|
| `color` | 0.3s | `cubic-bezier(0.44, 0, 0.23, 0.99)` | multiple (link/text color changes) |
| `opacity, transform` | 0.6s, 0.75s | `ease, cubic-bezier(0.2, 0.7, 0.2, 1)` | multiple (reveal-type elements) |
| (most Framer elements) | computed `transition: "all"` with **no duration** | — | hover changes on these are **JS-driven** (see §5) |

## 5. Hover interactions

### 5a. Mechanism
- Hover is implemented with **React `onMouseEnter` / `onMouseLeave` handlers** — 41 elements with such handlers found on `/about` alone (React props introspection via `__reactProps$*` keys). Source: live DOM · 1168×975.
- Only **9 CSS `:hover` rules** exist, all Framer defaults for rich-text links (`[data-framer-component-type="Text"] a:hover…`, `a.framer-text:hover` → `color: var(--framer-link-hover-text-color…)`). Source: stylesheet walk.

### 5b. Observed hover states (synthetic pointer events, before/after computed-style diffs)

| element | rest | hover | source |
|---|---|---|---|
| **BOOK A CALL** (nav, `/`) | arrow SVG 20×20 + inner 13×13 color `rgb(42,42,42)`; underline bar: h1, bg `rgb(10,10,10)`, **layout width 1px**, at y29 | arrow color → **`rgb(229,52,27)`** (accent); underline bar **layout width → 95.2px** (= full link width), transform `matrix(0.0105,0,0,1,-47.1,0)` observed mid-state | live hover test · 1168 |
| **DOWNLOAD RESUME** (`/about`) | bg `rgba(230,228,220,0)` | bg → **`rgba(230,228,220,0.27)`** (160×32 button, x976 y485) | live hover test · 1168 |
| **Work row** (`a[href*="work/herd"]`) | preview wrapper `div.framer-1wbsv4y` 197×132 at x692 y1291 **opacity 0** | wrapper → **opacity 1**; inner image element animates `translateX(-150px) → 0` with opacity `0.001 → 1` (caught at animation start t=1000ms synthetic) | live hover test · 1168 |
| **CV row** (`/about`) | — | **no computed-style change** (handler present, no visual delta) | live hover test · 1168 |
| **Nav HOME / WORK / ABOUT** | color `rgb(42,42,42)` | expected color/underline change via Framer variant — **not isolated** (see §U4) | — |

**Hover timing (duration/easing):** computed `transition` on these elements reports `"all"` without a duration — the animation is driven by Framer Motion JS, not CSS transitions, and its config lives in closures. Empirical sampling was throttled (occluded window). → exact durations/easings **UNVERIFIED** (§A4).

## 6. Page transitions

| question | finding | source |
|---|---|---|
| View Transitions API? | **No.** `document.startViewTransition` instrumented (wrapper counter) → counter stayed **0** across a home→/work SPA navigation; flag survived (client-side nav confirmed) | live instrumentation · 1168 |
| Full-screen overlay/loader on nav? | **None observed** — MutationObserver during nav saw no fixed overlays/loaders | live · 1168 |
| Content fade on route change? | **No** — root wrapper opacity stayed `1`, H1 opacity `1`, no transform, sampled every ~130ms for 4.5s across `/` → `/about` | live sampling · 1168 |
| Scroll behavior | **reset to top** on every route change (`scrollY 0` after nav; `scroll-behavior: auto` on html) | live |
| What "transitions" instead | the new page's elements replay their **appear animations** (opacity 0.001→1, y20→0) on mount | §1 |
| Navigation type | client-side (SPA) once hydrated; a click before hydration causes a full document load (observed twice as `Runtime.evaluate failed: Inspected target navigated`) | live |

## 7. Fixed / sticky positioning

| element | positioning | source |
|---|---|---|
| nav container `div.framer-5puuw3-container` | `position: fixed; top: 0; z-index: 8; h 45px; w 100%` | live fixed-element census · 1168 |
| case-study left rails ×5 (`framer-y9xgw0-container` etc.) | `position: sticky; top: 60px; h 190–215` at y 1136/2365/6075/7776/12614 | live sticky census · `/work/no-code-data-builder/` 1168 |
| game controls | `position: absolute; right:0; bottom:0; z-index:7` (inside relative game container) | live · 1168 |
| homepage | no sticky elements found (only the fixed nav) | live sticky census |

## 8. Animation-related runtime facts

- Framer runtime bundles present: `rolldown-runtime`, `react`, `framer`, `motion`, `shared-lib` (+ component chunks) from `framerusercontent.com/sites/3h423v0zC3vlbyn0yoPqAG/`.
- `framer.DbZjaWfm.mjs` contains view-transition helpers (`view-transition-` CSS var builder, `startViewTransition` reference) but **this site does not invoke them** (counter test §6).
- Scroll animations are appear-on-enter (no continuous scroll-linked/parallax timelines were observed; no GSAP).
- Analytics: `googletagmanager` (G-BWWGB2XVXC), `events.framer.com`.

## 8b. Hover addendum — 2026-11-12 re-probe (synthetic React events, live site)

Live site reachable again this session. Method: dispatch `mouseover` + direct call of the
element's React `onMouseEnter`/`onMouseLeave` handler (the site's hover mechanism, §5a),
sampling computed styles in separate evaluate passes. Method validated by reproducing §5b
exactly: BOOK A CALL hover → arrow `rgb(229,52,27)`, bar 1px → 95.21px, mid-state
`matrix(0.0105,…,-47.1,0)`; exit → arrow `rgb(42,42,42)`, bar 1px. Hero action link
("Get in touch") hover → arrow accent + bar full width (85.85px = link width).

New verified observations (previously untested elements):

| element | rest | hover | finding |
|---|---|---|---|
| CTA card dark button ("hire me on contra", `wDguu`) | bg `rgb(42,42,42)` | handler fires, `hover` class added, **zero computed-style delta** (bg/label/arrow/opacity/transform unchanged) | stylesheet has **no `.hover` variant rules** for `wDguu` → reference dark button is visually static on hover |
| CTA card accent button ("Email me", `wDguu`) | bg `rgb(229,52,27)` | same as above | same conclusion → accent button static on hover |
| Read More (`lNZ64`) | bg `rgb(42,42,42)`, label `rgb(229,227,219)` | handler fires, `hover` class added, **zero computed-style delta**; no `.hover` CSS for `lNZ64` | Read More is visually static on hover |
| Footer email block (`fz57W`) | email text dark (per audit screenshot) | hover class added; synthetic-exit readings unreliable (variant-reset artifact showed UA-default blue) | hover delta **inconclusive** — do not replicate |

Hover CSS that DOES exist in the reference stylesheets (`.hover` variants): hero action
links (`BZ7GV`), footer email block (`fz57W`), work rows (`KOIvm`). None for `wDguu`
(CTA buttons) or `lNZ64` (Read More).

Caveat: this re-probe used synthetic events (CSS `:hover` cannot be triggered
synthetically); the reference site's own hover is JS-driven (§4), so this method matches
its mechanism. Real-pointer hover on the reference remains untested (tooling limitation).

## 9. UNVERIFIED (animation)

See `UNVERIFIED-VALUES.md` §A:
- **A1** full appear-animation JSON (capture was truncated after `1fe07t7`; ids `8d38if`, `1d2ga08`, `8l2eok` specs not read).
- **A2** per-character H1 stagger timing.
- **A3** hover transition durations/easings (JS-driven; sampling throttled).
- **A4** whether nav-links have distinct hover variants (underline/color).
- **A5** bubble-game spawn/loop parameters (per-keyframe durations, `--travel` values).
- **A6** `bfflash/bffade/bfpop/bfconf/bfspin` exact frames.
- **A7** whether the underline bar under BOOK A CALL reaches opacity 1 under a *real* pointer (opacity stayed 0 synthetically).
