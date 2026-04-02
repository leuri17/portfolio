import { HugeiconsIcon } from '@hugeicons/react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { TechStack } from '@/types/techStack';

type TechStackCardProps = {
  techStack: TechStack;
  className?: string;
};

const TechStackCard = ({ techStack, className }: TechStackCardProps) => {
  return (
    <Card key={techStack.name} className={`sm:max-w-100 ${className}`}>
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          <div className="mb-6 size-16 flex items-center justify-center rounded-full ring text-destructive bg-destructive/20 ring-destructive/40">
            <HugeiconsIcon icon={techStack.icon} size={36} strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-white">{techStack.name}</h3>
        </CardTitle>
        <CardDescription className="text-center mb-2">{techStack.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-3">
        {techStack.items.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="px-4 py-4 tracking-wide text-sm font-semibold text-muted-foreground"
          >
            {item}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default TechStackCard;
