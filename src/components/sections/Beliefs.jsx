/**
 * Beliefs.jsx — /about section 03 "Things I believe" (#my-role), heading + intro
 * + 3 belief cards separated by vertical 1px dark rules.
 *
 * Verified DOM (from live /about probes):
 *   section (col gap 40, max-w 1200, scroll-margin-top 60) >
 *     group g2p39d (col gap 40) >
 *       [label block (col gap 20) > [label row gap 10, dark full-width rule],
 *        heading block (col gap 20, max-w 80%) > [h2 9g1z5w, intro (max-w 70%),
 *        divider],
 *        cards tdyeoa (row gap 40 base / 32 tablet; mobile column) >
 *          [card zthwr7 (col gap 20) > [T.0x label (accent), content h5 + desc],
 *           Rule v, card, Rule v, card]]
 *
 * Cards use the same vertical-divider pattern as the why-section cards (why-cell /
 * why-card): 1px dark vertical rules between cells at ≥810, horizontal at ≤809.
 */
import { Fragment } from 'react';
import { beliefs } from '@/data/site.js';
import SectionLabel from './SectionLabel.jsx';
import Rule from './Rule.jsx';
import Appear from '@/animations/Appear.jsx';
import { appearBlock } from '@/animations/presets.js';
import { renderWithAccents } from './AccentText.jsx';

export default function Beliefs() {
  const { label, heading, headingAccents, intro, cards } = beliefs;

  return (
    <section className="beliefs" id="my-role">
      <Appear preset={appearBlock} className="beliefs__block">
        <SectionLabel number={label.number} text={label.text} />

        <div className="beliefs__heading">
          <div className="beliefs__heading-block">
            <h2>
              {renderWithAccents(heading, headingAccents, 'accent')}
            </h2>
            <div className="beliefs__intro">
              <p>{intro}</p>
            </div>
          </div>
        </div>

        <Rule />
      </Appear>

      <div className="beliefs__cards">
        {cards.map((card, index) => (
          <Fragment key={card.label}>
            <div className="beliefs__cell">
              <div className="beliefs__card">
                <div className="beliefs__card-label">
                  <span>{card.label}</span>
                </div>
                <div className="beliefs__card-text">
                  <h5>{card.title}</h5>
                  <div className="beliefs__card-desc">
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            {index < cards.length - 1 ? <Rule orientation="v" /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
