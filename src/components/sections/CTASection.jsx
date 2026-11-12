/**
 * CTASection.jsx — shared CTA card (SUBuH), present on Home, /work, and every
 * case-study page shell.
 *
 * Verified DOM: SUBuH (col gap 10, max-w 1200, padding 100/60/40, bg #e5e3db,
 * border 1px #cccaca) >
 *   [1eiuzqn absolute background layer (canvas — static, §A7 UNVERIFIED),
 *    1lft1qu content (col gap 20) >
 *      [label gkfvri (16×1 rule + "get in touch"),
 *       1phdmzn (col gap 40) >
 *         [1jfry5k head (col gap 36) > [h2 with accent span, 1tdxm2y buttons],
 *          13ax8be status row (text, 6×6 accent dot, text)]]]
 *
 * Both CTA buttons carry the rotated arrow; labels are the reference markup's
 * casing and are uppercased by CSS.
 *
 * Props (defaults = the shared/home + /work variant, verified):
 *   heading          — override (used by the /about variant)
 *   headingHighlight — accent span text (default cta.headingHighlight = "complex product")
 *   lineBreakBefore  — render a <br> immediately before the accent span (the /about
 *                      heading breaks the line right before "work together?"'s accent)
 *   headClassName    — extra class on the head wrapper (e.g. /about: max-width 60%)
 */
import { cta } from '@/data/site.js';
import Button from '@/components/buttons/Button.jsx';

export default function CTASection({ heading, headingHighlight, lineBreakBefore = false, headClassName = '' }) {
  const resolvedHeading = heading ?? cta.heading;
  const resolvedHighlight = headingHighlight ?? cta.headingHighlight;
  const idx = resolvedHeading.toLowerCase().indexOf(resolvedHighlight.toLowerCase());
  const before = resolvedHeading.slice(0, Math.max(idx, 0));
  const after = resolvedHeading.slice(Math.max(idx, 0) + resolvedHighlight.length);

  const accentNode = <span className="accent">{resolvedHighlight}</span>;

  return (
    <section className="cta">
      <div className="cta__bg" aria-hidden="true" />

      <div className="cta__content">
        <div className="cta__label">
          <span className="label-rule" aria-hidden="true" />
          <span>{cta.label}</span>
        </div>

        <div className="cta__body">
          <div className={`cta__head ${headClassName}`.trim()}>
            <h2>
              {before}
              {lineBreakBefore ? <br /> : null}
              {accentNode}
              {after}
            </h2>

            <div className="cta__buttons">
              {cta.buttons.map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  label={button.label}
                  variant={button.variant}
                  external={button.external}
                  arrow={button.arrow}
                />
              ))}
            </div>
          </div>

          <div className="cta__status">
            <span>{cta.status[0]}</span>
            <span className="cta__status-dot" aria-hidden="true" />
            <span>{cta.status[1]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
