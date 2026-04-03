'use client';

import { MailIcon } from '@hugeicons/core-free-icons';

import LinkButton from '@/components/ui/LinkButton';
import Section from '@/components/ui/Section';

import { Badge } from '@/components/ui/badge';

import { copyEmail } from '@/lib/utils';

const CallToActionSection = () => {
  return (
    <Section className="items-center gap-10">
      <Badge
        variant={'outline'}
        className="border-destructive/30 text-xs text-destructive font-semibold tracking-widest px-3 py-4.5 uppercase gap-1.5"
      >
        <span>Let&apos;s collaborate</span>
      </Badge>

      <div className="text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 uppercase sm:text-7xl lg:text-8xl">
          Interested in{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-destructive">
            working together?
          </span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl sm:text-xl md:mb-12 md:text-2xl">
          Software Engineer with <span className="text-slate-100 font-medium">3+ years of experience </span>building
          modern web applications with React and Java. Based in Rotterdam and open to new opportunities.
        </p>
      </div>

      <div>
        <LinkButton
          onClick={copyEmail}
          label="Get in touch"
          variant="button"
          className="font-semibold text-lg bg-linear-to-br from-primary to-destructive hover:scale-105"
          icon={MailIcon}
          iconSize={6}
          size="xl"
        />
      </div>
    </Section>
  );
};

export default CallToActionSection;
