import Section from '@/components/ui/Section';

import AboutFrame from './AboutFrame';
import ExperienceFrame from './ExperienceFrame';

const AboutSection = () => {
  return (
    <Section id="about" className="grid grid-cols-2 gap-24" separator>
      <ExperienceFrame />
      <AboutFrame />
    </Section>
  );
};

export default AboutSection;
