import { ServerStackIcon, ToolsIcon, WebDesignIcon } from '@hugeicons/core-free-icons';

import type { TechStack } from '@/types/techStack';

export const techStackList: TechStack[] = [
  {
    name: 'Frontend',
    description: 'Crafting responsive and user-focused interfaces with modern frameworks',
    icon: WebDesignIcon,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
  },
  {
    name: 'Backend',
    description: 'Building robust APIs and scalable backend services',
    icon: ServerStackIcon,
    items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'PostgreSQL'],
  },
  {
    name: 'Tools',
    description: 'Supporting efficient development, collaboration and delivery pipelines',
    icon: ToolsIcon,
    items: ['Git', 'Docker', 'CI/CD', 'Jira / Agile', 'Postman'],
  },
];
