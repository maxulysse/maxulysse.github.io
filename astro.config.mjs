import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxulysse.github.io',
  output: 'static',
  redirects: {
    // Handled by Astro rather than a hand-written stub in public/, so that
    // astro dev resolves it too (it does not serve public/<dir>/index.html
    // as a directory index). Kept out of the sitemap below.
    '/publications': '/cv#publications',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/slides/') &&
        !page.includes('/publications') &&
        !/\/\d{4}-\d{2}-\d{2}-/.test(page),
    }),
  ],
});
