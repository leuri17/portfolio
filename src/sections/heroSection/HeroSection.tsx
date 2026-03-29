import { ArrowBigDown, LocationIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import Section from '@/components/ui/Section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <Section>
      <div className="flex items-center gap-4">
        <Badge variant={'secondary'} className="font-semibold tracking-wide px-3 py-4.5 uppercase">
          <HugeiconsIcon icon={LocationIcon} strokeWidth={2} className="text-destructive" />
          <span>Based in rotterdam</span>
        </Badge>

        <Badge
          variant={'destructive'}
          className="border-destructive/50 text-xs font-semibold tracking-wide px-3 py-4.5 uppercase gap-1.5"
        >
          <div className="size-2.5 bg-destructive rounded-full">
            <div className="size-full rounded-full bg-destructive animate-ping"></div>
          </div>
          <span>Open to opportunities</span>
        </Badge>
      </div>

      <div className="text-left">
        <h1 className="text-8xl font-extrabold tracking-tight leading-none mb-8 uppercase">
          Frontend & Full-Stack Engineer{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-destructive">
            building the future
          </span>{' '}
          of web
        </h1>
        <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Building high-performance web applications with a focus on{' '}
          <span className="text-slate-100 font-medium">precision, security, user experience</span>. 3+ years of
          experience, including enterprise banking platforms.
        </p>
        <div className="flex gap-6 items-center">
          <Button
            variant={'default'}
            size={'lg'}
            className="py-8 px-6 rounded-full font-bold bg-linear-to-br from-primary to-destructive hover:scale-105"
          >
            <a href="#projects" className="text-lg drop-shadow-[0_0_10px] drop-shadow-foreground/60">
              View work
            </a>
            <HugeiconsIcon icon={ArrowBigDown} strokeWidth={2.5} />
          </Button>

          <Button variant={'outline'} size={'lg'} className="py-8 px-6 rounded-full font-bold">
            <span className="text-lg">Experience</span>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
