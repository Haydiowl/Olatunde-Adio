import { Link } from 'react-router-dom';
import { nav } from '@/data/site.js';

/**
 * MobileMenuPanel.jsx — mobile menu open state (<=809px).
 *
 * The reference's open panel was not captured in the original audit (D2).
 * Implemented here as a functional, on-brand panel using existing nav data
 * and site tokens (page background, display typography, nav/CTA patterns) so
 * mobile navigation works without inventing new visual directions.
 */
export default function MobileMenuPanel({ open, onClose }) {
  if (!open) return null;

  return (
    <div id="mobile-menu-panel" className="site-nav__mobile-panel" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="site-nav__mobile-panel-inner">
        <nav className="site-nav__mobile-links" aria-label="Mobile">
          {nav.links.map((link) => (
            <Link key={link.href} className="site-nav__mobile-link" to={link.href} onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="site-nav__mobile-cta"
          href={nav.bookACall.href}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
        >
          <span>{nav.bookACall.label}</span>
          <svg className="site-nav__mobile-cta-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <path d="M4 16L16 4M16 4H7M16 4V13" />
          </svg>
        </a>
      </div>
    </div>
  );
}
