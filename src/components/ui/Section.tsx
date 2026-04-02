import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = HTMLAttributes<HTMLElement> & {
  separator?: boolean;
};

const Section = ({ children, className, separator = false, ...sectionProps }: SectionProps) => {
  return (
    <section className={cn('py-18 flex flex-col', 'sm:py-24', separator && 'border-t', className)} {...sectionProps}>
      {children}
    </section>
  );
};

export default Section;
