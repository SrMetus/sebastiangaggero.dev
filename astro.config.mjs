// @ts-check
import { URL } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastiangaggero.dev',
  integrations: [
    sitemap({
      filter: (page) => !/^\/cv\/(en|es)\/?$/.test(new URL(page).pathname),
      serialize: (item) => ({
        ...item,
        url: item.url.replace(/(\/projects\/job-radar)\/$/, '$1'),
      }),
    }),
  ],
});
