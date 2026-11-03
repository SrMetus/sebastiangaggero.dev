import type { Locale } from './routes';

interface UIContent {
  primaryLabel: string;
  work: string;
  services: string;
  about: string;
  contact: string;
  downloadCV: string;
  languageLabel: string;
}

export const ui = {
  en: {
    primaryLabel: 'Primary',
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    downloadCV: 'Download CV',
    languageLabel: 'Language',
  },
  es: {
    primaryLabel: 'Principal',
    work: 'Proyectos',
    services: 'Servicios',
    about: 'Sobre mí',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    languageLabel: 'Idioma',
  },
} satisfies Record<Locale, UIContent>;
