/**
 * SectionLabel.jsx — "01 — FEATURED CASE" label block.
 *
 * Verified DOM: column gap 20 (12 on mobile) = [row gap 10 (number, 16×1 rule,
 * text), full-width 1px divider]. The divider is the dark VbAlD variant
 * (#2a2a2a). /work's "01 WORK" header label has NO divider (verified) → the
 * `divider` prop.
 */
import Rule from './Rule.jsx';

export default function SectionLabel({ number, text, divider = true, className = '' }) {
  return (
    <div className={['section-label', className].filter(Boolean).join(' ')}>
      <div className="section-label__row">
        <p className="section-label__number">{number}</p>
        <span className="label-rule" aria-hidden="true" />
        <p className="section-label__text">{text}</p>
      </div>
      {divider ? <Rule /> : null}
    </div>
  );
}
