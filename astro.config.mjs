import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import codeblocks from 'starlight-codeblocks/astro';

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
    codeblocks({
      expressiveCode: {
        themes: ['github-light', 'github-dark'],
        // Follow the site's own light/dark switch (Bootstrap's data-bs-theme on <html>).
        // In "auto" mode, prefers-color-scheme picks the theme until theme.js resolves it.
        themeCssSelector: (theme) => `[data-bs-theme='${theme.type}']`,
      },
    }),
    sitemap({
      // Keep noindex pages out: slide decks, their aliases and redirect stubs.
      filter: (page) => {
        const { pathname } = new URL(page);
        return (
          /^\/((about|archive|blog|cv|projects|search|tags)\/.*)?$/.test(pathname) &&
          !hasDatePrefix.test(pathname) &&
          pathname !== '/blog/page/1/'
        );
      },
    }),
  ],
});
