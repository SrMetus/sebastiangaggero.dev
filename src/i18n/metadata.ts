import type { Locale, Page } from './routes';

export interface PageMetadata {
  title: string;
  description: string;
  ogType: 'website' | 'article';
}

export const metadata = {
  home: {
    en: {
      title: 'Sebastian Gaggero | Python Backend Developer',
      description:
        'Python backend developer focused on FastAPI, REST APIs and automation. Explore Sebastian Gaggero’s projects, engineering decisions and freelance services.',
      ogType: 'website',
    },
    es: {
      title: 'Sebastian Gaggero | Desarrollador Backend Python',
      description:
        'Desarrollador backend Python enfocado en FastAPI, APIs REST y automatización. Conoce mis proyectos, decisiones técnicas y servicios freelance.',
      ogType: 'website',
    },
  },
  jobRadar: {
    en: {
      title: 'Job Radar: FastAPI Case Study | Sebastian Gaggero',
      description:
        'Explore Job Radar’s backend design: data ingestion, normalization, URL deduplication, PostgreSQL persistence and rule-based scoring with FastAPI.',
      ogType: 'article',
    },
    es: {
      title: 'Job Radar: caso de estudio con FastAPI | Sebastian Gaggero',
      description:
        'Conoce el diseño backend de Job Radar: ingesta y normalización de datos, deduplicación por URL, persistencia en PostgreSQL y scoring basado en reglas con FastAPI.',
      ogType: 'article',
    },
  },
} satisfies Record<Page, Record<Locale, PageMetadata>>;
