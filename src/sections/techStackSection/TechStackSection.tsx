import Section from '@/components/ui/Section';

import { techStackList } from '@/data/techStack';
import TechStackCard from './TechStackCard';

const TechStackSection = () => {
  return (
    <Section separator>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">Tech Stack</h2>
        <p className="text-muted-foreground">Technologies I use to build reliable, scalable web applications.</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {techStackList.map((tech) => (
          <TechStackCard techStack={tech} key={tech.name} />
        ))}
      </div>
    </Section>
  );
};

export default TechStackSection;
