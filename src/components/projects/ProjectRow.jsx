/**
 * ProjectRow.jsx — a "selected work" row (KOIvm), used on Home + /work.
 *
 * Verified DOM (desktop/tablet):
 *   a.work-row > [preview 1wbsv4y (absolute, hover opacity, hidden <=809) >
 *     8l2eok > img,
 *     content oy1wcp > [number 1wtmamx, text itg8bs >
 *       [text-main pvz5as > [title h4, desc-wrap > p],
 *        meta-mobile 1vwe2r4 (inside text — mobile only: category, square, year)],
 *       right mr3qw1 > [meta 10dgss4 (category, year), arrow box 1ixtg66]]]
 *
 * Mobile: content order 1, no preview, meta-mobile visible, arrow unrotated
 * (all handled by projects.css). Category/year text is #6f6e6a on mobile.
 */
import { Link } from 'react-router-dom';
import { img, imageMeta } from '@/data/media.js';
import ArrowIcon from '@/components/buttons/ArrowIcon.jsx';

export default function ProjectRow({ project }) {
  const meta = imageMeta[project.image] || {};

  return (
    <Link className="work-row" to={`/work/${project.slug}/`}>
      <div className="work-row__preview" aria-hidden="true">
        <div className="work-row__preview-inner">
          <img
            src={img(project.image)}
            alt=""
            width={meta.width}
            height={meta.height}
            loading="lazy"
          />
        </div>
      </div>

      <div className="work-row__content">
        <div className="work-row__number">
          <span>{project.number}</span>
        </div>

        <div className="work-row__text">
          <div className="work-row__text-main">
            <h4 className="work-row__title">{project.title}</h4>
            {project.description ? (
              <div className="work-row__desc-wrap">
                <p className="work-row__desc">{project.description}</p>
              </div>
            ) : null}
          </div>

          <div className="work-row__meta-mobile">
            <div className="work-row__meta-category">
              <span>{project.category}</span>
            </div>
            <span className="work-row__square" aria-hidden="true" />
            <div className="work-row__meta-year">
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <div className="work-row__right">
          <div className="work-row__meta">
            <div className="work-row__meta-category">
              <span>{project.category}</span>
            </div>
            <div className="work-row__meta-year">
              <span>{project.year}</span>
            </div>
          </div>

          <div className="work-row__arrow-box" aria-hidden="true">
            <span className="work-row__arrow">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
