'use client';

import { ArrowBigDown, LocationIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import LinkButton from '@/components/ui/LinkButton';
import PingDot from '@/components/ui/PingDot';
import Section from '@/components/ui/Section';

import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <Section className="pt-12">
      <div className="flex flex-col items-center gap-4 mb-2 sm:mb-10 sm:flex-row">
        <Badge variant={'secondary'} className="font-semibold tracking-wide px-3 py-4.5 uppercase">
          <HugeiconsIcon icon={LocationIcon} strokeWidth={2} className="text-destructive" />
          <span>Based in rotterdam</span>
        </Badge>

        <Badge
          variant={'destructive'}
          className="border-destructive/30 text-xs tracking-wide px-3 py-4.5 uppercase gap-1.5"
        >
          <PingDot />
          <span>Open to opportunities</span>
        </Badge>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="text-5xl font-extrabold tracking-tight mb-8 uppercase sm:text-7xl lg:text-8xl">
          Frontend & Full-Stack Engineer{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-destructive">
            building the future
          </span>{' '}
          of web
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12 md:text-2xl">
          Building high-performance web applications with a focus on{' '}
          <span className="text-slate-100 font-medium">precision, security, user experience</span>. 3+ years of
          experience, including enterprise banking platforms.
        </p>
        <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-6">
          <LinkButton
            href="#projects"
            variant="button"
            label="View projects"
            icon={ArrowBigDown}
            className="font-bold text-md bg-linear-to-br from-primary to-destructive hover:scale-105 sm:w-fit"
            size="xl"
          />

          <LinkButton href="#about" variant="outline" label="Experience" className="font-bold text-md" size="xl" />
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
