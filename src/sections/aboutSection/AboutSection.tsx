'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { toast } from 'sonner';

import Section from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/card';

const handleCopyEmail = async () => {
  toast.promise(navigator.clipboard.writeText('leuri77@gmail.com'), {
    loading: 'Copying...',
    success: 'Email coppied',
    error: 'Failed to copy email',
  });
};

const AboutSection = () => {
  return (
    <Section id="about" className="grid grid-cols-2 gap-24" separator>
      <div className="space-y-20">
        <h2 className="text-5xl font-black mb-4">Experience</h2>

        <div className="relative pl-10 before:absolute before:left-0 before:top-0.75 before:-bottom-8 before:w-[2px] before:bg-border">
          <div className="size-2.5 bg-destructive rounded-full absolute top-0.75 -left-1">
            <div className="size-full rounded-full bg-destructive animate-ping"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-destructive mb-2">
              Apr 2023 — Present
            </span>
            <h3 className="text-2xl font-bold">Software Engineer</h3>
            <p className="text-ring/80 font-medium">Sopra Steria</p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Develop and maintain enterprise web applications. Implement frontend features and integrate with backend
              services (Java/Spring APIs). Work in Agile teams and support production systems.
            </p>
          </div>
        </div>

        <div className="relative pl-10">
          <div className="size-2.5 bg-accent rounded-full absolute top-0.75 -left-1"></div>
          <div className="flex flex-col">
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
              Jan 2023 — Apr 2023
            </span>
            <h3 className="text-2xl font-bold">Junior Tester</h3>
            <p className="text-ring/80 font-medium">Sopra Steria</p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              Performed manual testing of enterprise applications. Identified and validated bugs in collaboration with
              development teams.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-black mb-4">About</h2>
        <div className="text-muted-foreground leading-relaxed text-lg">
          <p className="mb-6">
            I am a Full-Stack Software Engineer with experience building and maintaining web applications across
            frontend and backend systems. I have worked with technologies such as React, TypeScript and Java/Spring,
            contributing to <span className="text-accent-foreground font-bold">scalable and maintainable</span>{' '}
            solutions in enterprise environments.
          </p>
          <p className="mb-12">
            Experience in the banking sector taught me the importance of{' '}
            <span className="text-destructive font-bold">security, performance and reliability</span> when building
            software at scale. I collaborate in Agile teams, working closely with developers, QA engineers and product
            managers to deliver robust software. I focus on writing clean, maintainable code and building systems that
            are reliable, scalable and easy to evolve over time.
          </p>
        </div>
        <Card>
          <CardContent>
            <p className="uppercase font-bold text-muted-foreground tracking-widest mb-4">Let&apos;s connect</p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href="https://github.com/leuri17"
                className="hover:text-foreground transition-colors flex items-center gap-0.5"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} />
                GitHub
              </a>
              <span className="bg-border size-1 rounded-full"></span>
              <a
                href="https://linkedin.com/in/leuri17"
                className="hover:text-foreground transition-colors flex items-center gap-0.5"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HugeiconsIcon icon={LinkedinIcon} size={18} strokeWidth={2} />
                LinkedIn
              </a>
              <span className="bg-border size-1 rounded-full"></span>
              {/* TODO: implement copy mail functionality */}
              <a
                href="mailto:leuri77@gmail.com"
                className="hover:text-foreground transition-colors flex items-center gap-0.5"
                rel="noopener noreferrer"
                onClick={handleCopyEmail}
              >
                <HugeiconsIcon icon={MailIcon} size={18} strokeWidth={2} />
                Copy mail
                <input type="text" className="hidden" value="leuri77@gmail.com" disabled />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default AboutSection;
