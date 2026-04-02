import { GithubIcon, LinkedinIcon } from '@hugeicons/core-free-icons';

import LinkButton from '../ui/LinkButton';

type navLink = {
  label: string;
  href: string;
  icon?: typeof GithubIcon;
  external?: boolean;
};

const navLinks: Array<navLink> = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'GitHub', href: 'https://github.com/leuri17', icon: GithubIcon, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/leuri17', icon: LinkedinIcon, external: true },
];

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-10 text-sm font-medium text-muted-foreground">
        {navLinks.map((link) => (
          <li key={link.href}>
            <LinkButton href={link.href} variant="link" label={link.label} icon={link.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
