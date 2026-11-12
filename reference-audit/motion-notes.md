# Phase 5 — Motion & Interaction Notes

Source of truth: `reference-audit/animation-inventory.md` (live reference https://www.sandeep.design/, extracted 2026-11-06).  
Implementation date: 2026-11-12.  
Rule: no invented animations, no arbitrary easing/timing, no excessive motion; `prefers-reduced-motion` respected.

## Implemented (per documented/verified behavior)

### 1) Page-load / mount & scroll-triggered reveals (Framer "appear")
- **Mechanism:** `src/animations/Appear.jsx` uses IntersectionObserver + CSS transitions to reveal elements on enter (or on mount if already in view), matching §1 behavior ("start at opacity 0.001 (+ translateY 20px for most), animate to final state when scrolled into view"; replay on route mount).
- **Verified presets applied (`src/animations/presets.js`, `src/animations/easings.js`):**
  - `dgmr2u` — fixed nav: `opacity 0.001→1`, `0.4s`, delay `0.1s`, ease `[0.36,0.02,0.14,0.96]` (`src/components/navigation/SiteNav.jsx`).
  - `cvhcy1` — portfolio bar/section block: `opacity 0.001→1`, `y 20→0`, `0.5s`, delay `0s`, ease `[0.58,0.02,0.37,0.99]` (`PortfolioBar.jsx`).
  - `1e91r9o` — block: `opacity 0.001→1`, `y 20→0`, `0.4s`, delay `0.1s`, ease `[0.44,0,0.32,0.93]` (hero action appear, `HowIWork`, `Beliefs`, archived sticky wrappers in `ArchivedSection`).
- **Reduced motion:** `Appear` renders content immediately when `prefers-reduced-motion: reduce` is set (accessibility override). Global transition vars are zeroed under reduced motion in `src/styles/tokens.css`.

### 2) Hero text entrance (per-character reveal)
- **Status:** not reproduced as staggered per-character animation. Home/About H1s remain static text/markup.
- **Reason:** per-character stagger timing/delay/easing is **UNVERIFIED (A2)**; inventing values is disallowed.

### 3) Scroll-triggered section reveals
- Implemented via `Appear` where elements map to verified presets (above). Elements whose appear specs are unverified/truncated are left static (no invented reveal): e.g. featured section marked `1d2ga08` truncated (§A1) remains static.
- `once: true` reveal on intersection (no reverse on scroll-out) to avoid layout/scroll jank; reverse-on-scroll behavior was not specified as verified.

### 4) Project image interactions (hover)
- **Selected work rows (`.work-row`, `src/styles/projects.css`):** rest preview wrapper `opacity: 0`; inner `opacity: 0.001`, `transform: translateX(-150px)`. Hover: wrapper `opacity: 1`; inner `opacity: 1`, `transform: translateX(0)`. Title color → accent on hover; number/text shift `padding-left: 10px` at ≥810px. Hover geometry variants (desktop/tablet) preserved per existing measured CSS.
- **Archived rows (`.archived-row`):** rest preview `opacity: 0`; inner `opacity: 0.001`, `translateX(-50%)`. Hover: preview/inner visible (`opacity 1`, transform none) with existing measured hover geometry; number/title padding shift and title → accent at ≥810px.
- **Timing/easing:** hover state transitions use nearest-verified computed transitions from inventory §4 (`--transition-opacity: opacity 0.6s ease`, `--transition-transform: transform 0.75s cubic-bezier(0.2,0.7,0.2,1)` in `tokens.css`). Exact reference hover durations/easings are **JS-driven and UNVERIFIED (A3)**.

### 5) Hover states
- **BOOK A CALL (nav, `src/styles/nav.css`):** arrow color transitions to accent on hover; underline bar expands from `1px` to full width on hover (opacity set to 1 in CSS). Color uses verified `--transition-color: color 0.3s cubic-bezier(0.44,0,0.23,0.99)`; bar expansion timing is **UNVERIFIED (A3/A7)** and not animated with invented duration (width/opacity change is immediate via CSS state).
- **DOWNLOAD RESUME (`.btn--ghost`, `src/styles/buttons.css`):** `background rgba(230,228,220,0)` → `rgba(230,228,220,0.27)` on hover (verified §5b).
- **Action links / hero links:** underline bar `1×1` opacity 0 → full width/opacity 1 on hover; color → accent on hover with verified color transition token (timing of bar/JS-driven motion **UNVERIFIED A3/A7**).
- **Nav HOME/WORK/ABOUT:** existing hover color rule present in CSS; distinct variant behavior/underline details **UNVERIFIED (A4)** — not altered speculatively.
- **CV row (`/about`):** no visual hover delta observed in inventory (§5b) — none added.

### 6) Navigation interactions
- Fixed nav appear uses verified `dgmr2u` preset. Mobile menu open panel remains unimplemented/`null` (panel structure/state **UNVERIFIED D2** in prior audit context) — no invented interaction.

### 7) Button transitions
- Buttons/links use verified color transition token `--transition-color` where applicable (`buttons.css`, nav/footer links). Other hover motion is JS-driven in reference and **UNVERIFIED (A3)**.

### 8) Contact section interactions
- CTA buttons/links use the same button/link hover behaviors above. Footer email/links inherit standard link/button styling; no additional undocumented motion added. Bubble game shell is static (no simulation).

### 9) Page transitions
- **View Transitions API:** not used (reference does not invoke it, §6).
- **Route-change behavior:** `ScrollToTop` resets scroll to top on navigation (`src/animations/ScrollToTop.jsx`), matching §6 (`scrollY 0`, `scroll-behavior: auto`). No overlay/loader/content-fade transition added.
- **Per-page content motion:** appear/reveal elements replay on mount/remount as components render, consistent with §6.

### 10) Sticky / scroll-linked elements
- **Nav:** `position: fixed` (existing, §7).
- **Case-study rails:** `.cs-rail { position: sticky; top: 60px; }` (verified §7, `src/styles/pages.css`).
- **Home/Work selected & archived sticky wrappers:** `position: sticky` present in CSS; **sticky `top` offset not verified** in captured source for these wrappers — left unspecified (no invented offset). No continuous scroll-linked/parallax timelines added (none observed, §8).

### 11) Keyframe animations
- `pulsingDotRipple` (OPEN TO WORK dot): `2s infinite ease-out`, frames `scale(0.6) opacity 1 → scale(var(--pulse-scale,2.2)=2.2) opacity 0` (§3, `src/animations/keyframes.css`, `src/styles/sections.css`). Disabled under `prefers-reduced-motion`.
- Bubble-game keyframes (`bfrise`, `bfwob`, `bfring`) defined with verified frames only; durations/iterations/`--travel` **UNVERIFIED (A5)**. `bfflash/bffade/bfpop/bfconf/bfspin` frames **UNVERIFIED (A6)** and not added. Bubble elements do not spawn at rest; no invented simulation.

## Not reproduced / UNVERIFIED (documented)
- **A1 — Appear specs truncated/unread:** ids `8d38if`, `1d2ga08`, `8l2eok`, `1fe07t7` (and any others without captured transition specs). These elements are kept static or use only separately verified hover/rest behaviors (e.g. work-row preview rest/hover states) without inventing scroll-reveal timing.
- **A2 — Per-character H1 stagger:** delay/duration/easing not exposed; hero H1 entrance stagger not implemented.
- **A3 — Hover transition durations/easings:** JS-driven in reference (computed as `transition: all` without duration); CSS uses only verified §4 transitions or instant state changes for width/opacity where timing is unknown.
- **A4 — Nav link hover variants:** exact underline/color variant behavior not isolated; no speculative variant added.
- **A5/A6 — Bubble-game timing/params/frames:** spawn/loop params, `--travel`, and `bfflash/bffade/bfpop/bfconf/bfspin` frames unknown; shell only.
- **A7 — BOOK A CALL underline opacity under real pointer:** synthetic test showed opacity 0 mid-state in capture; CSS applies visible underline on hover but real-pointer opacity/timing not fully reproducible from inventory.
- **Sticky top offsets (non-case-study):** works/archived sticky wrapper `top` not verified; not set.
- **Mobile menu panel interaction:** open-state structure/behavior not verified; not implemented.
- **Footer email hover:** 2026-11-12 re-probe inconclusive (synthetic-exit readings were a
  Framer variant-reset artifact); local `footer__write-link` intentionally has no hover
  effect — the reference's resting email is dark (audit screenshot) and no reliable
  hover delta was observable. Not replicated; do not add one without real-pointer proof.

## Comparison notes (live vs local)
- **Local probes (CDP, 1168×975, dev):** nav reaches visible state post-mount; portfolio status dot runs `pulsingDotRipple`; `html { scroll-behavior: auto }`; work-row preview rest `opacity 0` / inner `opacity 0.001` with `translateX(-150px)`; hover state changes are wired via CSS (`:hover`) for preview/inner/underline/bg/title color as implemented above.
- **Live comparison:** live site is Framer-rendered with different DOM/class structure; automated selector-based parity checks require element-specific mapping. Interaction parity for JS-driven hover timing/stagger (A2–A4, A7) cannot be confirmed or exactly reproduced without captured specs.
- **Build:** `npm run build` passes after Phase 5 changes.
