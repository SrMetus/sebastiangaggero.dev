export type Locale = 'en' | 'es';
export type Page = 'home' | 'jobRadar';

export const routes = {
  home: { en: '/', es: '/es/' },
  jobRadar: { en: '/projects/job-radar', es: '/es/projects/job-radar' },
} satisfies Record<Page, Record<Locale, string>>;

export const cvPaths = {
  en: '/sebastian-gaggero-cv-en.pdf',
  es: '/sebastian-gaggero-cv-es.pdf',
} satisfies Record<Locale, string>;
