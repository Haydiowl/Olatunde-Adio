/**
 * HowIWork.jsx — section 04 "How I work?" (gqj69r), reused on Home, /work, /about.
 *
 * Verified DOM: gqj69r (col gap 40, max-w 1200, scroll-margin-top 60) >
 *   [appear block (framer-j82z9w: opacity 0 / translateY(20px) → final) >
 *     [label, 1a69g1h (row gap 60 / 40 @810–1279 / col gap 24 @≤809) >
 *       [left 4trg8p > 1k33rpp (col gap 8) > h4 + copy, right foj3v1 (col gap 16;
 *       mobile w100%) > item / light rule / item …]]].
 *
 * 4trg8p is a single-child flex wrapper around 1k33rpp (both flex 1 0 0, width 1px),
 * so it is collapsed and the columns are direct children of 1a69g1h; the column gap
 * lives on .how-section__content.
 *
 * Item structure: row gap 30 > [code column 60px, text jfkc7x (col gap 4) >
 *   [text-inner 1i1zdlp (col gap 6) > h5, desc wrapper (width 100%, max-w 80%) > p].
 */
import { Fragment } from 'react';
import { howIWork } from '@/data/home.js';
import SectionLabel from './SectionLabel.jsx';
import Rule from './Rule.jsx';
import Appear from '@/animations/Appear.jsx';
import { appearBlock } from '@/animations/presets.js';

export default function HowIWork({ label }) {
  const how = label ?? howIWork.label;

  return (
    <section className="how-section">
      <Appear preset={appearBlock} className="how-section__block">
        <SectionLabel number={how.number} text={how.text} />

        <div className="how-section__content">
          <div className="how-section__left">
            <h4>{howIWork.heading}</h4>
            <div className="how-section__left-copy">
              <p>{howIWork.intro}</p>
            </div>
          </div>

          <div className="how-section__right">
            {howIWork.items.map((item, index) => (
              <Fragment key={item.number}>
                <div className="how-item">
                  <div className="how-item__code">
                    <span>{item.number}</span>
                  </div>
                  <div className="how-item__text">
                    <div className="how-item__text-inner">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="how-item__desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                {index < howIWork.items.length - 1 ? <Rule tone="light" /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      </Appear>
    </section>
  );
}
