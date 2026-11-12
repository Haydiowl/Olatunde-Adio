/**
 * easings.js — verified easing curves only (Phase 2, task 10).
 *
 * SOURCE: reference-audit/animation-inventory.md §1 (appear tween eases) and
 * §4 (computed transition timing functions). Every value below was measured on
 * the reference site — nothing here is invented.
 *
 * UNVERIFIED (animation-inventory §9) and therefore ABSENT:
 *   - A2 per-character H1 stagger timing
 *   - A3/A4 hover transition durations/easings (JS-driven in Framer closures)
 *   - A5/A6 bubble-game per-keyframe durations and frames
 * Do not add easing values that are not listed in the audit.
 */

/** appear id `dgmr2u` — fixed nav reveal: 0.4s, delay 0.1s */
export const EASE_NAV = [0.36, 0.02, 0.14, 0.96];

/** appear id `cvhcy1` — portfolio bar / first content block: 0.5s, no delay */
export const EASE_BAR = [0.58, 0.02, 0.37, 0.99];

/** appear id `1e91r9o` — content block: 0.4s, delay 0.1s */
export const EASE_BLOCK = [0.44, 0, 0.32, 0.93];

/** color transition (computed census §4): color 0.3s cubic-bezier(0.44,0,0.23,0.99) */
export const EASE_COLOR = [0.44, 0, 0.23, 0.99];

/** reveal-type elements (computed census §4): transform 0.75s cubic-bezier(0.2,0.7,0.2,1) */
export const EASE_REVEAL = [0.2, 0.7, 0.2, 1];

/** Build a CSS cubic-bezier() string from a measured 4-point curve. */
export const cubicBezier = ([x1, y1, x2, y2]) =>
  `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
