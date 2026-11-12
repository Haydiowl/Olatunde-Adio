/**
 * ScrollToTop.jsx — scroll reset on route change (Phase 2, task 7).
 *
 * SOURCE: animation-inventory.md §6 — "Scroll behavior: reset to top on every
 * route change (scrollY 0 after nav; scroll-behavior: auto on html)".
 *
 * This component ONLY resets scroll. There is deliberately no page-transition
 * wrapper: the reference has no View Transitions, no overlay, and no content
 * fade on route change (§6, all verified negative) — the new page simply
 * replays its appear animations on mount.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
