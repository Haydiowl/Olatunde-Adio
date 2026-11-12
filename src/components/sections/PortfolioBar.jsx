/**
 * PortfolioBar.jsx — portfolio bar (appear id `cvhcy1`).
 *
 * Verified DOM: row space-between height 16 =
 *   [left label (flex 1), status (flex 1, justify-end, gap 4) >
 *    [dot-wrap (padding 0 2px 2px) > pulsing dot, right label]]
 *
 * The pulsing dot is the only keyframe animation on the site
 * (pulsingDotRipple, keyframes.css).
 */
import { portfolioBar } from '@/data/site.js';
import Appear from '@/animations/Appear.jsx';
import { appearBar } from '@/animations/presets.js';

export default function PortfolioBar() {
  return (
    <Appear preset={appearBar} className="portfolio-bar">
      <p className="portfolio-bar__text">{portfolioBar.left}</p>
      <div className="portfolio-bar__status">
        <div className="portfolio-bar__dot-wrap">
          <span className="portfolio-bar__dot" aria-hidden="true">
            <span className="portfolio-bar__dot-core" />
            <span className="portfolio-bar__dot-ripple" />
          </span>
        </div>
        <p>{portfolioBar.right.text}</p>
      </div>
    </Appear>
  );
}
