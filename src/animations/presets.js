/**
 * presets.js — verified animation presets (Phase 2, task 10).
 *
 * SOURCE: reference-audit/animation-inventory.md §1 appear JSON + live DOM.
 * Initial/animate/delay/duration/ease are transcribed per appear id.
 *
 * The reference has appear ids whose full specs were truncated in capture
 * (§A1: 8d38if, 1d2ga08, 8l2eok, 1fe07t7) and per-character H1 timing (§A2)
 * is UNVERIFIED — no preset exists for them on purpose. Elements without a
 * verified preset render in their final state (no reveal), which is the only
 * honest option until those specs are captured in Phase 3.
 */
import { EASE_NAV, EASE_BAR, EASE_BLOCK, cubicBezier } from './easings.js';

/** Shared appear shape: opacity 0.001 -> 1 (all), translateY 20px -> 0 (most). */
const base = { initialOpacity: 0.001, animateOpacity: 1 };

/** appear id `dgmr2u` — fixed nav: opacity only, 0.4s, delay 0.1s */
export const appearNav = {
  ...base,
  initialY: 0,
  animateY: 0,
  duration: 0.4,
  delay: 0.1,
  ease: EASE_NAV,
};

/** appear id `cvhcy1` — portfolio bar: opacity + y20, 0.5s, no delay */
export const appearBar = {
  ...base,
  initialY: 20,
  animateY: 0,
  duration: 0.5,
  delay: 0,
  ease: EASE_BAR,
};

/** appear id `1e91r9o` — content block: opacity + y20, 0.4s, delay 0.1s */
export const appearBlock = {
  ...base,
  initialY: 20,
  animateY: 0,
  duration: 0.4,
  delay: 0.1,
  ease: EASE_BLOCK,
};

/** Transition tokens from the computed census (§4). */
export const transitionColor = `color 0.3s ${cubicBezier([0.44, 0, 0.23, 0.99])}`;
export const transitionOpacity = 'opacity 0.6s ease';
export const transitionTransform = `transform 0.75s ${cubicBezier([0.2, 0.7, 0.2, 1])}`;
