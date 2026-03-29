import { cn } from '@/lib/utils';

type PingDotProps = {
  className?: string;
  disabled?: boolean;
};

const PingDot = ({ className, disabled = false }: PingDotProps) => {
  return (
    <div className={cn('size-2.5 rounded-full', disabled ? 'bg-accent' : 'bg-destructive', className)}>
      {!disabled && <div className="size-full rounded-full bg-destructive animate-ping"></div>}
    </div>
  );
};

export default PingDot;
