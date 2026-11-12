/**
 * Rule.jsx — the reference's 1px hairline (VbAlD), single owner in sections.css.
 *
 * tone:        dark  → #2a2a2a (labels, card verticals, footer bottom)
 *              mid   → rgb(184,184,184) (case-study leading/trailing list dividers)
 *              light → rgba(111,110,106,.2) (s4 separators, footer rules,
 *                      work-row dividers)
 * orientation: h (default) | v (stretches to its flex row's height; becomes a
 *              horizontal rule at <=809 via the mobile rule in sections.css)
 */
export default function Rule({ tone = 'dark', orientation = 'h', className = '' }) {
  const toneClass = tone === 'light' ? 'rule--light' : tone === 'mid' ? 'rule--mid' : '';
  return (
    <div
      className={['rule', `rule--${orientation}`, toneClass, className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}
