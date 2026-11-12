/**
 * HeroSection.jsx — homepage hero (7u5tdv).
 *
 * Verified DOM: hero col gap 60 =
 *   [section 1ofsvdh (col gap 40, max-w 1200) > title row rlca3s (row gap 10,
 *    max-w 90%) > title wrap 1fb7pta > h1 (preset-1q86rep per-character spans —
 *    per-character reveal timing is UNVERIFIED §A2, so the text is rendered as
 *    words with the verified accent span, not animated per character)],
 *   bottom row y9kb5y (SIBLING of the section) >
 *     [subcopy qw82zz (col gap 8, max-w 420), actions v9azgo (row gap 24,
 *      justify-end, max-w 420)]]
 *
 * The first action sits in the verified appear container 1e91r9o (appearBlock);
 * the second container 8d38if has a truncated appear id (§A1) → rendered static.
 */
import { hero } from '@/data/site.js';
import Appear from '@/animations/Appear.jsx';
import { appearBlock } from '@/animations/presets.js';
import ActionLink from '@/components/buttons/ActionLink.jsx';
import { renderWithAccents } from './AccentText.jsx';

export default function HeroSection() {
  const [firstAction, secondAction] = hero.actions;

  return (
    <section className="hero">
      <div className="hero__section">
        <div className="hero__title-row">
          <div className="hero__title-wrap">
            <h1 className="hero__h1">
              {renderWithAccents(hero.headline, hero.accentWords, 'hero__h1-accent')}
            </h1>
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__subcopy">
          <p>{hero.subcopy}</p>
        </div>

        <div className="hero__actions">
          <Appear preset={appearBlock} className="hero__action-appear">
            <ActionLink
              href={firstAction.href}
              label={firstAction.label}
              external={firstAction.external}
            />
          </Appear>
          <ActionLink
            href={secondAction.href}
            label={secondAction.label}
            external={secondAction.external}
          />
        </div>
      </div>
    </section>
  );
}
