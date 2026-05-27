import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxulysse.github.io',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/slides/') &&
        !/\/\d{4}-\d{2}-\d{2}-/.test(page),
    }),
  ],
});
