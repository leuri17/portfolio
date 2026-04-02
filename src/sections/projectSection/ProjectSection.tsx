'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { useEffect, useState } from 'react';

import Section from '@/components/ui/Section';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { projectList } from '@/data/projects';

import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Section id="projects" className="flex items-center relative">
      <div className="w-full flex items-end justify-between mb-16">
        <div>
          <h2 className="text-5xl font-black mb-4">Projects</h2>
          <div className="w-24 h-1.5 rounded-2xl bg-linear-to-r from-primary to-destructive"></div>
        </div>
        <span className="text-slate-500 font-mono text-lg font-bold">{projectList.length} Projects</span>
      </div>

      <Carousel
        className="max-w-full mask-[linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]"
        setApi={setApi}
        opts={{
          active: true,
          loop: true,
        }}
      >
        <CarouselContent>
          {projectList.map((proj: Project, index) => (
            <CarouselItem
              key={proj.name}
              className="max-w-10/12 cursor-pointer"
              onClick={() => {
                if (api) {
                  api?.scrollTo(index);
                }
              }}
            >
              <ProjectCard project={proj} className={cn(current !== index && 'scale-y-90 blur-[2px]')} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>

      <div id="carouselBoutons" className="w-full px-24 flex items-center mt-6">
        <Button
          variant="outline"
          size="icon-lg"
          className="hidden lg:flex"
          onClick={() => {
            if (api) {
              api?.scrollPrev();
            }
          }}
        >
          <HugeiconsIcon icon={ArrowLeftIcon} />
        </Button>

        <div className="w-full h-4 flex items-center justify-center gap-1">
          {api &&
            api.scrollSnapList().map((_element, index) => {
              return (
                <div
                  key={`carouselPageIndicator${index}`}
                  className={cn(
                    'w-12 bg-destructive h-1.5 transition-all',
                    current !== index && 'bg-secondary h-0.5 cursor-pointer hover:h-1.5'
                  )}
                  onClick={() => {
                    if (api) {
                      api?.scrollTo(index, true);
                    }
                  }}
                ></div>
              );
            })}
        </div>

        <Button
          variant="outline"
          size="icon-lg"
          className="hidden lg:flex"
          onClick={() => {
            if (api) {
              api?.scrollNext();
            }
          }}
        >
          <HugeiconsIcon icon={ArrowRightIcon} />
        </Button>
      </div>

      {/* <div className="grid grid-cols-3 gap-10">
        {projectList.map((proj: Project) => (
          <ProjectCard project={proj} key={proj.name} />
        ))}
      </div> */}
    </Section>
  );
};

export default ProjectSection;
