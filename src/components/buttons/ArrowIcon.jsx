/**
 * ArrowIcon.jsx — the reference's arrow glyph (Phase 2, task 4).
 *
 * CAPTURED from the live DOM (browser probe of the hydrated reference):
 *   <svg viewBox="0 0 24 24" style="width:100%;height:100%">
 *     <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
 *   </svg>
 * (Material "arrow_forward"; fill comes from the parent's color.)
 *
 * Rotation: nav/CTA arrows sit in a container rotated -45deg (→ points
 * up-right ↗); the work-row arrow is NOT rotated (→ points right).
 * Boxes: nav 14×14 (overflow hidden), CTA button 20×20 (overflow hidden),
 * work row 16×16 — all measured.
 */
export default function ArrowIcon({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}
