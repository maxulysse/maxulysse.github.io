import { defineConfig } from 'astro/config';

const siteUrl = 'https://maxulysse.github.io';

const replaceJekyllVars = (value) =>
  value
    .replace(/\{\{\s*site\.url\s*\}\}/g, siteUrl)
    .replace(/\{\{\s*site\.baseurl\s*\}\}/g, '')
    .replace(
      /\{\{\s*"([^"]+)"\s*\|\s*prepend:\s*site\.baseurl\s*\}\}/g,
      '$1'
    )
    .replace(
      /\{\{\s*"([^"]+)"\s*\|\s*prepend:\s*site\.url\s*\}\}/g,
      `${siteUrl}$1`
    );

const walkMarkdownTree = (node, visit) => {
  visit(node);
  if (node && Array.isArray(node.children)) {
    node.children.forEach((child) => walkMarkdownTree(child, visit));
  }
};

const jekyllLinkFixer = () => (tree) => {
  walkMarkdownTree(tree, (node) => {
    if (node.type === 'text' && typeof node.value === 'string') {
      node.value = replaceJekyllVars(node.value);
    }

    if (
      (node.type === 'link' || node.type === 'image' || node.type === 'definition') &&
      typeof node.url === 'string'
    ) {
      node.url = replaceJekyllVars(node.url);
    }

    if (node.type === 'html' && typeof node.value === 'string') {
      node.value = replaceJekyllVars(node.value);
    }
  });
};

export default defineConfig({
  site: 'https://maxulysse.github.io',
  output: 'static',
  markdown: {
    remarkPlugins: [jekyllLinkFixer]
  },
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
