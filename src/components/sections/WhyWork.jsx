/**
 * WhyWork.jsx — homepage section 03 "Why Work With Me?".
 *
 * Verified DOM: 8fgpcj (col gap 20; mobile 24, max-w 1200) >
 *   [label (12ltkm), intro 1juq6ob (col gap 40, padding 20px 0; mobile gap 24,
 *    padding 0) > [line1 1mga31 (row gap 10, max-w 70%; mobile 90%) >
 *    19nldkd (flex 1 0 0, width 1px) > h2 9g1z5w,
 *    line2 18vsea0 (col gap 20, width 100%, max-w 80%; mobile gap 8, max-w 90%)
 *    > cymeui > h2 1wml6uu],
 *    cards lscu9e (row gap 24; mobile column)]
 *
 * Cards: cell ll0cmo/23xkn4/19ujwd0 (border top+bottom #2a2a2a) > card 1gs8gyw
 * with a letter box, a direct <h4>, and a body paragraph. Dark 1px vertical
 * rules sit between cells (become horizontal at <=809).
 */
import { Fragment } from 'react';
import { whyWork } from '@/data/home.js';
import SectionLabel from './SectionLabel.jsx';
import Rule from './Rule.jsx';
import { renderWithAccents } from './AccentText.jsx';

export default function WhyWork() {
  return (
    <section className="why-section">
      <SectionLabel number={whyWork.label.number} text={whyWork.label.text} />

      <div className="why-intro">
        <div className="why-intro__line1">
          <h2>{renderWithAccents(whyWork.intro[0], whyWork.introAccents, 'accent')}</h2>
        </div>
        <div className="why-intro__line2">
          <h2>{whyWork.intro[1]}</h2>
        </div>
      </div>

      <div className="why-cards">
        {whyWork.cards.map((card, index) => (
          <Fragment key={card.letter}>
            <div className="why-cell">
              <div className="why-card">
                <div className="why-card__letter">
                  <span>{card.letter}</span>
                </div>
                {/* 5c42b9 — the card has only TWO children: the letter box and
                    this wrapper (col gap12 > h4 wrapper, body wrapper). */}
                <div className="why-card__text">
                  <h4>{card.title}</h4>
                  <div className="why-card__body">
                    <p>{card.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            {index < whyWork.cards.length - 1 ? <Rule orientation="v" /> : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
