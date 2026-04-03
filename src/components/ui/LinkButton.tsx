import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';

import { cn } from '@/lib/utils';

import { buttonVariants } from './button';

type BaseLinkButton = {
  className?: string;
  variant: 'link' | 'button' | 'outline';
  label: string;
  icon?: IconSvgElement;
  iconSize?: number;
  download?: string;
  size?: 'sm' | 'default' | 'xs' | 'lg' | 'xl';
};

type UrlLinkButton = BaseLinkButton & {
  href: string;
  onClick?: never;
};

type FunctionLinkButton = BaseLinkButton & {
  href?: never;
  onClick: () => void;
};

type LinkButtonProps = UrlLinkButton | FunctionLinkButton;

const LinkButton = ({
  className = '',
  variant = 'button',
  size = 'default',
  label,
  icon,
  iconSize = 4,
  onClick,
  ...props
}: LinkButtonProps) => {
  const isLink = variant === 'link';
  const isButton = variant === 'button';

  const styleVariant = isLink ? 'link' : isButton ? 'secondary' : 'outline';

  const handleAnchorClick = () => {
    if (props.href) {
      document.getElementById(props.href.substring(1))?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'cursor-pointer',
        buttonVariants({ variant: styleVariant, size }),
        isLink && 'flex-row-reverse p-0 text-muted-foreground',
        className
      )}
      onClick={(ev) => {
        if (props.href?.startsWith('#')) {
          ev.preventDefault();
          handleAnchorClick();
        }

        onClick?.();
      }}
    >
      <span className="tracking-wide">{label}</span>
      {icon && <HugeiconsIcon icon={icon} className={`size-${iconSize}`} strokeWidth={isLink ? 2 : 2.5} />}
    </a>
  );
};

export default LinkButton;
