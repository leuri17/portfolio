import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import AboutSection from '@/sections/aboutSection/AboutSection';
import CallToActionSection from '@/sections/callToActionSection/CallToActionSection';
import HeroSection from '@/sections/heroSection/HeroSection';
import ProjectSection from '@/sections/projectSection/ProjectSection';
import TechStackSection from '@/sections/techStackSection/TechStackSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <TechStackSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
