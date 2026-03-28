'use client';

import { CommandLineIcon, DownloadIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import Navbar from './Navbar';

import { Button } from '../ui/button';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'Leuri Alonso - Resume.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="bg-primary size-10 rounded-full bg-linear-to-br from-primary to-destructive flex items-center justify-center transition-transform group-hover:scale-105">
          <HugeiconsIcon icon={CommandLineIcon} strokeWidth={2} className="shadow-[0_0_25px] shadow-red-500/45" />
        </div>

        <h1 className="text-xl font-bold">Leuri Alonso</h1>
      </div>

      <Navbar />

      <Button variant={'secondary'} size="lg" onClick={handleDownload}>
        <span className="font-bold">Download CV</span>
        <HugeiconsIcon icon={DownloadIcon} strokeWidth={2.5} data-icon="inline-end" />
      </Button>
    </header>
  );
};

export default Header;
