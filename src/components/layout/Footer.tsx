import { DownloadIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { downloadCV } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="flex justify-around items-center gap-8 border-t py-16">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Leuri Alonso Saturria</p>
        <p className="text-ring/80 text-xs">Built with React &amp; TypeScript</p>
        <div className="text-ring/80 text-xs flex items-center gap-2">
          <p>Based in Rotterdam</p>
          <span className="bg-border size-1 rounded-full"></span>
          <p>Open to opportunities</p>
        </div>
      </div>
      <div>
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
          <HugeiconsIcon icon={DownloadIcon} size={16} strokeWidth={2} data-icon="inline-left" />
          <span className="font-semibold tracking-wide">Resume</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
