/**
 * Home.jsx — homepage (/), section order verified in
 * layout-measurements.json → home.sections:
 *   portfolio bar → hero → featured case → selected work → why → how →
 *   trusted by → CTA → footer.
 *
 * The `.page-wrapper` is the reference root (padding 64px <gutter> 0, column
 * gap 100px base / 60px mobile, children centered).
 */
import SiteNav from '@/components/navigation/SiteNav.jsx';
import PortfolioBar from '@/components/sections/PortfolioBar.jsx';
import HeroSection from '@/components/sections/HeroSection.jsx';
import FeaturedSection from '@/components/sections/FeaturedSection.jsx';
import WorksSection from '@/components/sections/WorksSection.jsx';
import WhyWork from '@/components/sections/WhyWork.jsx';
import HowIWork from '@/components/sections/HowIWork.jsx';
import TrustedBy from '@/components/sections/TrustedBy.jsx';
import CTASection from '@/components/sections/CTASection.jsx';
import SiteFooter from '@/components/footer/SiteFooter.jsx';
import { workPage } from '@/data/site.js';

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="page-wrapper">
        <PortfolioBar />
        <HeroSection />
        <FeaturedSection />
        <WorksSection variant="home" label={workPage.sectionLabel} />
        <WhyWork />
        <HowIWork />
        <TrustedBy />
        <CTASection />
        <SiteFooter />
      </main>
    </>
  );
}
