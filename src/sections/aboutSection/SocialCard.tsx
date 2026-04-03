'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from '@hugeicons/core-free-icons';

import LinkButton from '@/components/ui/LinkButton';

import { Card, CardContent } from '@/components/ui/card';
import { copyEmail } from '@/lib/utils';

const SocialCard = () => {
  return (
    <Card className="ring-0">
      <CardContent className="flex flex-col items-center md:items-baseline">
        <p className="uppercase font-bold text-muted-foreground tracking-widest mb-4">Let&apos;s connect</p>
        <div className="flex items-center gap-2 text-muted-foreground sm:gap-4">
          <LinkButton href="https://github.com/leuri17" label="GitHub" variant="link" icon={GithubIcon} size="sm" />
          <span className="bg-border size-1 rounded-full"></span>
          <LinkButton
            href="https://linkedin.com/in/leuri17"
            label="LinkedIn"
            variant="link"
            icon={LinkedinIcon}
            size="sm"
          />
          <span className="bg-border size-1 rounded-full"></span>
          <LinkButton label="Email" variant="link" icon={MailIcon} size="sm" onClick={copyEmail} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
