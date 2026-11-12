/**
 * Appear.jsx — scroll/mount reveal (Phase 2, task 10).
 *
 * Reproduces the reference's Framer "appear" behavior with the web platform:
 * elements start at opacity 0.001 (+ translateY 20px when the preset says so)
 * and animate to their final state when they enter the viewport
 * (animation-inventory.md §1: "elements start at opacity 0.001 ... animate to
 * final state when scrolled into view"; verified empirically — screenshots
 * taken without scrolling show blank regions).
 *
 * Usage: only pass presets from presets.js (verified specs). There is
 * intentionally no "default" preset: appear ids 8d38if/1d2ga08/8l2eok/1fe07t7
 * have UNVERIFIED specs (§A1) — those elements render statically until the
 * spec is captured (Phase 3), rather than being given an invented motion.
 *
 * Reduced motion: when the user prefers reduced motion, content is shown
 * immediately (no reveal) — an accessibility behavior, not a reference spec.
 */
import { useEffect, useRef, useState } from 'react';
import { cubicBezier } from './easings.js';

const finalState = {
  opacity: 1,
  transform: 'none',
};

/** True once the element has been scrolled into view (or immediately if reduced motion). */
export function useAppear(preset) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      // Reference reveal is viewport-entry based; threshold 0 (any part visible).
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!preset) return { ref, style: undefined, shown: true };

  const hidden = {
    opacity: preset.initialOpacity,
    transform: `translateY(${preset.initialY}px)`,
  };
  const style = shown
    ? {
        ...finalState,
        transition: `opacity ${preset.duration}s ${cubicBezier(preset.ease)} ${preset.delay}s, transform ${preset.duration}s ${cubicBezier(preset.ease)} ${preset.delay}s`,
      }
    : hidden;

  return { ref, style, shown };
}

/**
 * <Appear preset={appearBlock}>…</Appear>
 * Wraps content in a reveal element using a verified preset.
 */
export default function Appear({ preset, as: Tag = 'div', className, children, ...rest }) {
  const { ref, style } = useAppear(preset);
  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}
