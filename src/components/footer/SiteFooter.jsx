/**
 * SiteFooter.jsx — shared footer (P5Le7), reproduced per page shell.
 *
 * Verified DOM:
 *   footer.site-footer (col gap 100; tablet 80, mobile 20; max-w 1200) >
 *     [top a2ocwx > [light rule, write block fz57W > [label, mail row
 *       (mailto > email h1/h3), arrow aux], light rule],
 *      main xuuv6k (col gap 20) > [cols row 1hxtl7w > cols ufrr1u >
 *        [Pages col, light rule, Elsewhere col, light rule, currently col],
 *        game 13spitu, bottom tbyhy4 > [dark rule, bottom row]]]
 *
 * Reference nuances: the desktop email is an <h1>; the mobile SSR copy is an
 * <h3> (footnote in ARCHITECTURE.md — heading level is kept as h1 here), and
 * the mobile copy omits the column labels (CSS hides them). The location glyph
 * is client-rendered and was never captured (UNVERIFIED) → the site's arrow
 * glyph is used in its 10×11 box as a placeholder.
 */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { footer } from '@/data/site.js';
import Rule from '@/components/sections/Rule.jsx';
import ArrowIcon from '@/components/buttons/ArrowIcon.jsx';
import BubbleGame from './BubbleGame.jsx';

function FooterLink({ link }) {
  const content = (
    <span className="footer__link-row">
      <span>{link.label}</span>
      {link.external ? (
        <span className="footer__link-arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      ) : null}
    </span>
  );

  if (!link.href) {
    return <div className="footer__link">{content}</div>;
  }

  if (link.external) {
    return (
      <a className="footer__link" href={link.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className="footer__link" to={link.href}>
      {content}
    </Link>
  );
}

export default function SiteFooter() {
  const [copyright, basedIn, working, love] = footer.bottomLine;

  return (
    <footer className="site-footer">
      <div className="footer__top">
        <Rule tone="light" />

        <div className="footer__write">
          <div className="footer__write-label">
            <span>{footer.writeToMe.label}</span>
          </div>

          <div className="footer__write-mail">
            <a className="footer__write-link" href={`mailto:${footer.writeToMe.email}`}>
              <div className="footer__email-wrap">
                <h1 className="footer__email">{footer.writeToMe.email}</h1>
              </div>
            </a>

            <div className="footer__write-aux" aria-hidden="true">
              <span className="footer__write-arrow">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>

        <Rule tone="light" />
      </div>

      <div className="footer__main">
        <div className="footer__cols-row">
          <div className="footer__cols">
            {footer.columns.map((column, index) => (
              <Fragment key={column.label}>
                <div className="footer__col">
                  <div className="footer__col-label">
                    <span>{column.label}</span>
                  </div>
                  <div className="footer__links">
                    <div className="footer__link-list">
                      {column.links.map((link) => (
                        <FooterLink key={link.label} link={link} />
                      ))}
                    </div>
                  </div>
                </div>
                {index < footer.columns.length - 1 ? (
                  <Rule tone="light" orientation="v" className="footer__col-rule" />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>

        <BubbleGame />

        <div className="footer__bottom">
          <Rule />
          <div className="footer__bottom-row">
            <div className="footer__copyright">
              <p>{copyright}</p>
            </div>

            <div className="footer__location">
              <div className="footer__location-left">
                <p>{basedIn}</p>
              </div>
              <span className="footer__location-icon" aria-hidden="true">
                <ArrowIcon />
              </span>
              <div className="footer__location-right">
                <p>{working}</p>
              </div>
            </div>

            <div className="footer__love">
              <p>{love}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
