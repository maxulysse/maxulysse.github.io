import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Matches blog post URLs that include a date prefix (e.g. /2021-06-08-post-slug/).
// These are generated from src/content/blog/YYYY/YYYY-MM-DD-title.md files.
const hasDatePrefix = /\/\d{4}-\d{2}-\d{2}-/;

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
        !hasDatePrefix.test(page),
    }),
  ],
});
