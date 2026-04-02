import { MailIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import Section from '@/components/ui/Section';

import { Badge } from '@/components/ui/badge';

import { copyEmail } from '@/lib/utils';

const CallToActionSection = () => {
  return (
    <Section className="items-center gap-10">
      <Badge
        variant={'outline'}
        className="border-destructive/50 text-xs text-destructive font-semibold tracking-widest px-3 py-4.5 uppercase gap-1.5"
      >
        <span>Let&apos;s collaborate</span>
      </Badge>

      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight leading-none mb-4 uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          Interested in{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-destructive">
            working together?
          </span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl md:mb-12 md:text-2xl">
          Software Engineer with <span className="text-slate-100 font-medium">3+ years of experience </span>building
          modern web applications with React and Java. Based in Rotterdam and open to new opportunities.
        </p>
      </div>

      <div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-42 flex gap-2 items-center justify-center px-8 py-6 rounded-full bg-secondary/40 hover:bg-secondary/80 transition-all bg-linear-to-br from-primary to-destructive hover:scale-105"
          onClick={(ev) => {
            ev.preventDefault();
            copyEmail();
          }}
        >
          <HugeiconsIcon icon={MailIcon} size={24} strokeWidth={2} data-icon="inline-left" />
          <span className="font-semibold tracking-wider text-lg">Get in touch</span>
        </a>
      </div>
    </Section>
  );
};

export default CallToActionSection;
