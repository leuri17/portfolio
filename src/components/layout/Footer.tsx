'use client';

import { DownloadIcon, GithubIcon, LinkedinIcon } from '@hugeicons/core-free-icons';
import LinkButton from '../ui/LinkButton';

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
        <LinkButton href="https://github.com/leuri17" variant="link" label="GitHub" icon={GithubIcon} />
        <LinkButton href="https://linkedin.com/in/leuri17" variant="link" label="LinkedIn" icon={LinkedinIcon} />
        <LinkButton
          href="/cv.pdf"
          download="Leuri Alonso - Resume.pdf"
          variant="link"
          label="Resume"
          icon={DownloadIcon}
        />
      </div>
    </footer>
  );
};

export default Footer;
