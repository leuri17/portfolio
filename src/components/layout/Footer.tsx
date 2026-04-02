import { DownloadIcon, GithubIcon, LinkedinIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { downloadCV } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 justify-around items-center border-t py-16 sm:flex-row sm:gap-0">
      <div className="flex flex-col gap-2 items-center sm:items-baseline">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Leuri Alonso Saturria</p>
        <p className="text-ring/80 text-xs">Built with React &amp; TypeScript</p>
        <div className="text-ring/80 text-xs flex items-center gap-2">
          <p>Based in Rotterdam</p>
          <span className="bg-border size-1 rounded-full"></span>
          <p>Open to opportunities</p>
        </div>
      </div>
      <div className="flex gap-6">
        <a
          href="https://github.com/leuri17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-muted-foreground transition-colors hover:text-destructive"
        >
          <HugeiconsIcon icon={GithubIcon} size={16} strokeWidth={2} />
          <span className="font-semibold tracking-wide">GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/leuri17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-muted-foreground transition-colors hover:text-destructive"
        >
          <HugeiconsIcon icon={LinkedinIcon} size={16} strokeWidth={2} />
          <span className="font-semibold tracking-wide">LinkedIn</span>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-muted-foreground transition-colors hover:text-destructive"
          onClick={(ev) => {
            ev.preventDefault();
            downloadCV();
          }}
        >
          <HugeiconsIcon icon={DownloadIcon} size={16} strokeWidth={2} />
          <span className="font-semibold tracking-wide">Resume</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
