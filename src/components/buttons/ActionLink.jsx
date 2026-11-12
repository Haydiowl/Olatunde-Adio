/**
 * ActionLink.jsx — the reference's underlined action link (Phase 2, task 4).
 *
 * Used by the hero actions (HIRE ME ON CONTRA / GET IN TOUCH) and, with the
 * same structure, the nav BOOK A CALL (SiteNav renders its own markup for the
 * nav-specific widths — same CSS family).
 *
 * Structure (captured live): column gap 0 = [row gap 4 (label, 14×14 arrow box
 * with the rotated arrow_forward svg), underline bar 1×1 opacity 0 that
 * stretches to full width on hover].
 * Label style: preset-1tb3ij7 = 10px/400, ls .01em, uppercase, #2a2a2a.
 */
import ArrowIcon from './ArrowIcon.jsx';

export default function ActionLink({ href, label, external = false, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={['action-link', className].filter(Boolean).join(' ')}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      <span className="action-link__row">
        <span className="action-text">{label}</span>
        <span className="action-link__arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </span>
      <span className="action-link__bar" aria-hidden="true" />
    </a>
  );
}
