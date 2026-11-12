/**
 * Button.jsx — shared button (Phase 2, task 4).
 *
 * Variants map to measured reference elements:
 *   dark    → CTA "hire me on contra" (185×44, bg #2a2a2a, white label+arrow)
 *   accent  → CTA "Email me" (120×44, bg #e5341b, white label+arrow)
 *   readMore→ featured-case "Read More" (160×32, bg #2a2a2a, label #e5e3db)
 *   ghost   → /about "Download Resume" (160×32, transparent beige → hover 27%)
 *
 * Labels are stored with the reference markup's casing and rendered uppercase by
 * CSS (preset-a3dj5b). All labels use the verified 12px/500/0.12px/uppercase
 * recipe; CTA variants carry the 20×20 rotated arrow (readMore/ghost have none —
 * verified markup). External links open in a new tab (reference uses
 * target="_blank" on Contra).
 *
 * `to` renders a react-router <Link> (used by the featured card's Read More);
 * `href` renders an <a>; neither renders a <button>.
 */
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon.jsx';

export default function Button({
  href,
  to,
  variant = 'dark',
  label,
  external = false,
  arrow = false,
  className = '',
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ');
  const content = (
    <>
      <span>{label}</span>
      {arrow ? (
        <span className="btn__arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      {...(href ? { href } : { type: 'button' })}
      className={classes}
      {...(external && href ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      {content}
    </Tag>
  );
}
