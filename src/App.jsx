/**
 * App.jsx — route table (Phase 2, task 7).
 *
 * 14 routes: /, /work, /about + 11 case-study slugs (all measured from the
 * reference's /work links). Slugs are preserved verbatim, including the
 * trailing dot and parentheses:
 *   making-direct-mail-campaigns-easier-to-launch-manage-and-measure.
 *   zenrock-website-design(mvp)
 *
 * react-router matches a trailing slash on every route, so /work/x/ and
 * /work/x both resolve. Unknown slugs are handled inside CaseStudy (redirect
 * to /work); unknown top-level paths redirect to / rather than inventing a 404
 * screen the reference does not have.
 */
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '@/animations/ScrollToTop.jsx';
import Home from '@/pages/Home.jsx';
import Work from '@/pages/Work.jsx';
import About from '@/pages/About.jsx';
import CaseStudy from '@/pages/CaseStudy.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
