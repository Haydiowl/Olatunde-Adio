/**
 * ArchivedRow.jsx — a /work "archived" row (framer-DciDI variant v-93ir4v desktop /
 * v-xrik3k mobile), used only on the /work list page for P.06–P.11.
 *
 * Verified DOM (desktop/tablet, variant v-93ir4v):
 *   a.archived-row > [preview framer-fv27n8 (absolute, hover: opacity 1, z6,
 *     top -56 / bottom -75, right 210 @810–1279.98), content framer-14ke6y9 (row,
 *     gap 20 @810–1279.98, align center) >
 *     [group-left framer-1lm51cd (row gap 10) >
 *        number framer-18jtews (row, w60, gap 6; hover: padding 0 0 0 10px),
 *        title framer-19fn5my (col gap 8) > h5 framer-1dwxmq1 (preset-1w752jy)],
 *      group-right framer-1dii35t (row, justify center flex-end, gap 60) >
 *        meta framer-1s03ur2 (row, justify space-between, min-width 220 @810 /
 *        280 desktop; children category + year rows gap 10),
 *        arrow-box framer-1427s78 (row, justify flex-end, gap 6, min-width 40 @810,
 *        60 desktop; rotor framer-18g1urq rotate(-45deg) 16×16)]]
 *
 * Desktop/tablet geometry (verified at 1168): anchor h25.2, row section h46.2
 * (anchor 25.2 + gap 20 + light rule 1); preview rest top -86/bottom -11 (h122.2,
 * w183.3) opacity 0 translateX(-50%); hover top -56/bottom -75 (h156.2, w234.3),
 * opacity 1, transform none. Title hover → accent + padding-left 10 on number and
 * title columns. No description on archived rows (P.06–P.11 have none on the
 * reference — content lives in projects.js and stays null).
 *
 * Mobile (v-xrik3k): anchor column gap 12, content column gap 12, left group width
 * 100%, meta order [category, accent-dot, year], arrow order 0, group-right
 * justify flex-start with padding-left 50px. Implemented via the ≤809.98 CSS block.
 */
import { Link } from 'react-router-dom';
import { img, imageMeta } from '@/data/media.js';
import ArrowIcon from '@/components/buttons/ArrowIcon.jsx';

export default function ArchivedRow({ project }) {
  const meta = imageMeta[project.image] || {};

  return (
    <Link className="archived-row" to={`/work/${project.slug}/`}>
      <div className="archived-row__preview" aria-hidden="true">
        <div className="archived-row__preview-inner">
          <img
            src={img(project.image)}
            alt=""
            width={meta.width}
            height={meta.height}
            loading="lazy"
          />
        </div>
      </div>

      <div className="archived-row__content">
        <div className="archived-row__group archived-row__group--left">
          <div className="archived-row__number">
            <span>{project.number}</span>
          </div>
          <div className="archived-row__title">
            <h5>{project.title}</h5>
          </div>
        </div>

        <div className="archived-row__group archived-row__group--right">
          <div className="archived-row__meta">
            <div className="archived-row__meta-category">
              <span>{project.category}</span>
            </div>
            <div className="archived-row__meta-year">
              <span>{project.year}</span>
            </div>
          </div>

          <div className="archived-row__arrow-box" aria-hidden="true">
            <span className="archived-row__arrow">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
