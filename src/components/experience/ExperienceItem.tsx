import { cn } from '@/lib/utils';

import { Experience } from '@/types/experience';

import PingDot from '../ui/PingDot';

type ExperienceItemProps = {
  detailed?: boolean;
  experience: Experience;
};

const ExperienceItem = ({ detailed = false, experience }: ExperienceItemProps) => {
  return (
    <>
      {/* TODO: Create detailed version */}
      {detailed && <div></div>}
      {!detailed && (
        <div
          className={cn(
            'relative pl-10',
            experience.current &&
              'before:absolute before:left-0 before:top-0.75 before:-bottom-8 before:w-[2px] before:bg-border'
          )}
        >
          <PingDot className="absolute top-0.75 -left-1" disabled={!experience.current} />

          <div className="flex flex-col">
            <span
              className={cn(
                'text-xs font-black uppercase tracking-widest mb-2',
                experience.current ? 'text-destructive' : 'text-muted-foreground'
              )}
            >
              {`${experience.initDate} - ${experience.current ? 'Present' : experience.finishDate}`}
            </span>
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p className="text-ring/80 font-medium">{experience.company}</p>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{experience.shortDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceItem;
