import Header from '@/components/layout/Header';

import AboutSection from '@/sections/aboutSection/AboutSection';
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
    </>
  );
}
