import {
  ArrowBigDown,
  CommandLineIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      {/* <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] animate-slow-glow"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-slow-glow"></div>
      </div> */}
      <main className="w-full max-w-5xl px-6 lg:px-8">
        {/* HEADER */}
        <header className="flex items-center justify-between py-8">
          {/* HEADING */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary size-10 rounded-full bg-linear-to-br from-primary to-destructive flex items-center justify-center transition-transform group-hover:scale-105">
              <HugeiconsIcon icon={CommandLineIcon} strokeWidth={2} className="shadow-[0_0_25px] shadow-red-500/45" />
            </div>
            <h1 className="text-xl font-bold">Leuri Alonso</h1>
          </div>

          {/* NAV */}
          <nav>
            <ul className="flex items-center gap-10 text-sm font-medium text-muted-foreground">
              <li>
                <a href="#work" className="hover:text-foreground transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leuri17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-0.5"
                >
                  <HugeiconsIcon icon={GithubIcon} size={18} strokeWidth={2} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leuri17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center gap-0.5"
                >
                  <HugeiconsIcon icon={LinkedinIcon} size={18} strokeWidth={2} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* DOWNLOAD CV BTN */}
          {/* TODO: Implement functionality */}
          <Button variant={'secondary'} size="lg">
            <span className="font-bold">Download CV</span>
            <HugeiconsIcon icon={DownloadIcon} strokeWidth={2.5} data-icon="inline-end" />
          </Button>
        </header>

        {/* HERO SECTION */}
        <section className="py-36 text-center flex flex-col">
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
                <a href="#work" className="text-lg drop-shadow-[0_0_10px] drop-shadow-foreground/60">
                  View Work
                </a>
                <HugeiconsIcon icon={ArrowBigDown} />
              </Button>

              <Button variant={'outline'} size={'lg'} className="py-8 px-6 rounded-full font-bold">
                <span className="text-lg">Experience</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
