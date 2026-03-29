import type { Project } from '@/types/project';

export const projectList: Project[] = [
  {
    name: 'PitchDesk',
    description:
      'Platform for DJs to promote unreleased tracks by generating personalized messages and streamlining outreach to artists and labels.',
    tech: ['Next.js', 'TypeScript', 'OpenAI'],
    img: 'pitchdesk.png',
    clickAction: { type: 'none' },
  },
  {
    name: 'CaixaBankNow',
    description:
      'Enterprise banking web application used across multiple countries. Contributed to frontend features, maintenance, and multi-region support.',
    tech: ['Java', 'JSP', 'JavaScript'],
    img: 'caixabanknow.png',
    clickAction: { type: 'web', url: 'https://loc.caixabank.de/GPeticiones' },
  },
  {
    name: 'inCV',
    description:
      'Mobile application that helps users create professional CVs through a guided and accessible experience.',
    tech: ['React Native', 'Android'],
    img: 'incv.png',
    clickAction: {
      type: 'app',
      androidUrl: 'https://play.google.com/store/apps/details?id=com.soprasteria.incv&hl=es_US',
      iosUrl: 'https://apps.apple.com/bo/app/incv/id6449279005?l=en-GB',
    },
  },
];
