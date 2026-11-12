/**
 * FeaturedCaseCard.jsx — homepage section 01 featured case (g8nV5).
 *
 * Verified DOM: div.featured-card (row gap 40; tablet 24, mobile column gap 12) >
 *   [text column j517y8 (30%; space-between) >
 *      [main 1b8jy3o (col gap 14) >
 *         [head 6ofyoz (col gap 10) > [title row iwxf4l > h2 (1wml6uu),
 *          tags 1qikdor > chip 1c64jau > p (a3dj5b)],
 *          highlights 1t4dcei (col gap 10) > [head 2bamb0, bullets 1frsbu8 >
 *          ONE bullet wrapper vcy8u5 (col gap 10, padding-left 12) > 3 p's]],
 *       Read More container 15eyd2 > Button (react-router Link)],
 *    image column 1ad0czt > media brjyk2 > img]
 *
 * The card itself is a <div>; only Read More is a link (verified).
 */
import { featuredCase } from '@/data/projects.js';
import { featuredCaseWithMedia } from '@/data/media.js';
import Button from '@/components/buttons/Button.jsx';

export default function FeaturedCaseCard() {
  const { imageSrc, imageMeta: meta } = featuredCaseWithMedia;

  return (
    <div className="featured-card">
      <div className="featured-card__text">
        <div className="featured-card__main">
          <div className="featured-card__head">
            <div className="featured-card__title-row">
              <h2 className="featured-card__title">{featuredCase.title}</h2>
            </div>

            <div className="featured-card__tags">
              <p className="featured-card__tag">
                <span>{featuredCase.tag}</span>
              </p>
            </div>
          </div>

          <div className="featured-card__highlights">
            <div className="featured-card__highlights-head">
              <h6>{featuredCase.highlightsLabel}</h6>
            </div>
            <div className="featured-card__bullets">
              <div className="featured-card__bullet">
                {featuredCase.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="featured-card__read-more">
          <Button
            to={`/work/${featuredCase.slug}/`}
            variant="read-more"
            label={featuredCase.readMoreLabel}
          />
        </div>
      </div>

      <div className="featured-card__image">
        <div className="featured-card__media">
          <img
            src={imageSrc}
            alt={featuredCase.title}
            width={meta ? meta.width : undefined}
            height={meta ? meta.height : undefined}
          />
        </div>
      </div>
    </div>
  );
}
