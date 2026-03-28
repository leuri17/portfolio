import Image from 'next/image';

import Hero from '@/components/hero/Hero';
import Header from '@/components/layout/Header';
import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';

import PROJECTS from '@/data/projects.json';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowBigRight } from '@hugeicons/core-free-icons';

type Project = {
  name: string;
  description: string;
  tech: string[];
  img: string;
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section id="projects">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl font-black mb-4">Projects</h2>
            <div className="w-24 h-1.5 rounded-2xl bg-linear-to-r from-primary to-destructive"></div>
          </div>
          <span className="text-slate-500 font-mono text-lg font-bold">{PROJECTS.length} Projects</span>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {PROJECTS.map((proj: Project) => (
            <div
              key={proj.name}
              className="overflow-hidden group cursor-pointer rounded-2xl border border-border bg-secondary/40 transition-all hover:border-destructive/50 hover:shadow-[0_0_30px] hover:shadow-red-500/10 hover:scale-105"
            >
              {/* IMAGE */}
              <Image src={'/projects/' + proj.img} width={1875} height={951} alt={proj.name + ' Dashboard'} />

              <div className="p-6 grid grid-rows-[1fr_1fr_4fr_2fr] gap-2">
                {/* TECH TAGS */}
                <div className="flex items-center gap-2">
                  {proj.tech.map((t) => (
                    <Badge key={t} variant={'destructive'} className="tracking-wide">
                      <span>{t}</span>
                    </Badge>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold transition-colors group-hover:text-destructive">{proj.name}</h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>

                {/* VIEW DEMO */}
                <div className='flex items-center justify-end'>
                  <Button variant={'secondary'} size="lg">
                    <span className="font-bold">View project</span>
                    <HugeiconsIcon icon={ArrowBigRight} strokeWidth={2.5} />
                    {/* <HugeiconsIcon icon={DownloadIcon} strokeWidth={2.5} data-icon="inline-end" /> */}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
