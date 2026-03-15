import { CommandLineIcon, Download01Icon, GithubIcon, LinkedinIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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
            <div className="bg-red-600 size-10 rounded-full bg-linear-to-br from-red-600 to-red-400 flex items-center justify-center transition-transform group-hover:scale-105">
              <HugeiconsIcon icon={CommandLineIcon} strokeWidth={3} className="shadow-[0_0_25px] shadow-red-400/45" />
            </div>
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>

          {/* NAV */}
          <nav>
            <ul className="flex items-center gap-10 text-sm font-medium text-slate-400">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/leuri17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-0.5"
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
                  className="hover:text-white transition-colors flex items-center gap-0.5"
                >
                  <HugeiconsIcon icon={LinkedinIcon} size={18} strokeWidth={2} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* DOWNLOAD CV BTN */}
          {/* TODO: Implement functionality */}
          <Button variant={'secondary'} size="lg" className="shadow-white/45 hover:shadow-[0_0_10px] hover:bg-white ">
            <span className="font-bold">Download CV</span>
            <HugeiconsIcon icon={Download01Icon} strokeWidth={2.5} data-icon="inline-end" />
          </Button>
        </header>
      </main>
    </div>
  );
}
