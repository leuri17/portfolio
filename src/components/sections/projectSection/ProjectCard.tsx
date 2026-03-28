'use client';

import { AppStoreIcon, ArrowBigRight, PlayStoreIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import Image from 'next/image';
import { useState, type MouseEvent } from 'react';

import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { Project } from '@/types/project';

type ProjectCardProps = {
  project: Project;
};

function dialogCopyFor(action: Project['clickAction']) {
  switch (action.type) {
    case 'none':
      return {
        title: 'Project in progress',
        description: 'This project is currently under development and does not have a demo available.',
      };
    case 'app':
      return {
        title: 'Available only on mobile',
        description: 'This project is only available on mobile devices. Please choose your preferred store.',
      };
    default:
      return null;
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const dialogCopy = dialogCopyFor(project.clickAction);

  const href = project.clickAction.type === 'web' ? project.clickAction.url : '#';

  const handleViewClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (project.clickAction.type === 'web') return;
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <div className="overflow-hidden group rounded-2xl border border-border bg-secondary/40 transition-all hover:border-destructive/50 hover:shadow-[0_0_30px] hover:shadow-red-500/10 hover:scale-105">
        <Image src={`/projects/${project.img}`} width={1875} height={951} alt={`${project.name} Dashboard`} />

        <div className="p-6 grid grid-rows-[1fr_1fr_4fr_2fr] gap-2">
          <div className="flex items-center gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="destructive" className="tracking-wide">
                <span>{t}</span>
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold transition-colors group-hover:text-destructive">{project.name}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="flex items-center justify-end">
            <Badge
              variant="secondary"
              className="text-xs font-semibold tracking-wide px-3 py-4.5 uppercase gap-1.5"
              render={
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center bg-secondary px-4 py-2 rounded-full"
                  onClick={handleViewClick}
                >
                  <span className="font-bold">View project</span>
                  <HugeiconsIcon icon={ArrowBigRight} strokeWidth={2.5} />
                </a>
              }
            />
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-sm">
          {dialogCopy && (
            <DialogHeader>
              <DialogTitle>{dialogCopy.title}</DialogTitle>
              <DialogDescription>{dialogCopy.description}</DialogDescription>
            </DialogHeader>
          )}

          {project.clickAction.type === 'app' && (
            <div className="flex gap-4">
              {(
                [
                  { url: project.clickAction.iosUrl, icon: AppStoreIcon, label: 'Apple Store' },
                  { url: project.clickAction.androidUrl, icon: PlayStoreIcon, label: 'Play Store' },
                ] as const
              ).map(({ url, icon, label }) => (
                <HoverCard key={label}>
                  <HoverCardTrigger
                    delay={10}
                    closeDelay={100}
                    render={
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <HugeiconsIcon
                          icon={icon}
                          size={36}
                          className="transition-all hover:text-destructive hover:scale-105"
                        />
                      </a>
                    }
                  />
                  <HoverCardContent className="flex w-auto flex-col gap-0.5">
                    <div>{label}</div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
