'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { toast } from 'sonner';

import { Card, CardContent } from '@/components/ui/card';

const handleCopyEmail = async () => {
  toast.promise(navigator.clipboard.writeText('leuri77@gmail.com'), {
    loading: 'Copying...',
    success: 'Email coppied',
    error: 'Failed to copy email',
  });
};

const SocialCard = () => {
  return (
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
          <a
            href="#"
            className="hover:text-foreground transition-colors flex items-center gap-0.5"
            rel="noopener noreferrer"
            onClick={(ev) => {
              ev.preventDefault();
              handleCopyEmail();
            }}
          >
            <HugeiconsIcon icon={MailIcon} size={18} strokeWidth={2} />
            Copy mail
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
