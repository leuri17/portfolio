import { GithubIcon, LinkedinIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { cn } from '@/lib/utils';

type navLink = {
  label: string;
  href: string;
  icon?: typeof GithubIcon;
  external?: boolean;
};

const navLinks: Array<navLink> = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'GitHub', href: 'https://github.com/leuri17', icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/leuri17', icon: LinkedinIcon, external: true },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-sm font-medium text-muted-foreground">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn('hover:text-foreground transition-colors', link.icon && 'flex items-center gap-0.5')}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {link.icon && <HugeiconsIcon icon={link.icon} size={18} strokeWidth={2} />}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
