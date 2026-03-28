import { ArrowBigRight } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="overflow-hidden group cursor-pointer rounded-2xl border border-border bg-secondary/40 transition-all hover:border-destructive/50 hover:shadow-[0_0_30px] hover:shadow-red-500/10 hover:scale-105">
      {/* IMAGE */}
      <Image src={'/projects/' + project.img} width={1875} height={951} alt={project.name + ' Dashboard'} />

      <div className="p-6 grid grid-rows-[1fr_1fr_4fr_2fr] gap-2">
        {/* TECH TAGS */}
        <div className="flex items-center gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant={'destructive'} className="tracking-wide">
              <span>{t}</span>
            </Badge>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold transition-colors group-hover:text-destructive">{project.name}</h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

        {/* VIEW DEMO */}
        <div className="flex items-center justify-end">
          <Button variant={'secondary'} size="lg">
            <span className="font-bold">View project</span>
            <HugeiconsIcon icon={ArrowBigRight} strokeWidth={2.5} />
            {/* <HugeiconsIcon icon={DownloadIcon} strokeWidth={2.5} data-icon="inline-end" /> */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
