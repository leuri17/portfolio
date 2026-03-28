import Section from '@/components/ui/Section';

import { projects } from '@/data/projects';

import { Project } from '@/types/project';

import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <Section id="projects">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h2 className="text-5xl font-black mb-4">Projects</h2>
          <div className="w-24 h-1.5 rounded-2xl bg-linear-to-r from-primary to-destructive"></div>
        </div>
        <span className="text-slate-500 font-mono text-lg font-bold">{projects.length} Projects</span>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {projects.map((proj: Project) => (
          <ProjectCard project={proj} key={proj.name} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
