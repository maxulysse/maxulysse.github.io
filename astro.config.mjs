import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://maxulysse.github.io',
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});
