import Section from '@/components/ui/Section';

import AboutFrame from './AboutFrame';
import ExperienceFrame from './ExperienceFrame';

const AboutSection = () => {
  return (
    <Section id="about" className="grid gap-24 md:grid-cols-2" separator>
      <AboutFrame />
      <ExperienceFrame />
    </Section>
  );
};

export default AboutSection;
