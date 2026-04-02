import Section from '@/components/ui/Section';

import { techStackList } from '@/data/techStack';
import { cn } from '@/lib/utils';
import TechStackCard from './TechStackCard';

const TechStackSection = () => {
  return (
    <Section separator>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4">Tech Stack</h2>
        <p className="text-muted-foreground">Technologies I use to build reliable, scalable web applications.</p>
      </div>
      <div className="grid col gap-8 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {techStackList.map((tech, index) => {
          const isLast = index === techStackList.length - 1;
          const isOdd = techStackList.length % 2 !== 0;

          return (
            <TechStackCard
              techStack={tech}
              key={tech.name}
              className={cn(isLast && isOdd && 'sm:col-span-2 sm:justify-self-center lg:col-span-1')}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default TechStackSection;
