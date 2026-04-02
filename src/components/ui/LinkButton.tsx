import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button';

type LinkButtonProps = {
  className?: string;
  variant: 'link' | 'button' | 'outline';
  label: string;
  icon?: IconSvgElement;
  href: string;
  download?: string;
};

const LinkButton = ({ className = '', variant = 'button', label, icon, ...props }: LinkButtonProps) => {
  const isLink = variant === 'link';
  const isButton = variant === 'button';

  const styleVariant = isLink ? 'link' : isButton ? 'secondary' : 'outline';

  const handleAnchorClick = () => {
    document.getElementById(props.href.substring(1))?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant: styleVariant, size: 'lg' }),
        isLink && 'flex-row-reverse text-muted-foreground hover:text-destructive text-base',
        className
      )}
      onClick={(ev) => {
        if (props.href.startsWith('#')) {
          ev.preventDefault();
          handleAnchorClick();
        }
      }}
    >
      <span className="tracking-wide">{label}</span>
      {icon && (
        <HugeiconsIcon icon={icon} strokeWidth={isLink ? 2 : 2.5} data-icon={isLink ? 'inline-start' : 'inline-end'} />
      )}
    </a>
  );
};

export default LinkButton;
