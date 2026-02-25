# maxulysse.github.io - Migrated to Astro

This repository has been migrated from Jekyll to [Astro](https://astro.build), a modern static site builder focused on performance and content authoring.

## What Changed

- **Jekyll → Astro**: Complete migration from Jekyll to Astro static site generator
- **Markdown Posts**: All 24 blog posts migrated to Astro's content collections
- **Layouts**: Jekyll Liquid templates converted to Astro components
- **Styling**: Bootstrap styling preserved, custom SCSS converted to CSS
- **Build System**: npm-based build instead of Ruby/bundler

## Project Structure

```text
├── public/                    # Static assets
│   └── assets/               # Images, CSS, etc.
├── src/
│   ├── components/           # Astro components
│   ├── content/
│   │   └── blog/            # Blog posts organized by year
│   ├── data/                # Data files (authors, etc.)
│   ├── layouts/             # Layout components
│   ├── pages/               # Page routes
│   └── styles/              # Global styles
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## Quick Start

### Prerequisites

- Node.js 24.13.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` directory, ready to be deployed to GitHub Pages.

### Preview Build

```bash
npm run preview
```

## Content Management

### Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/YYYY/` directory
2. Add frontmatter with required fields:

```yaml
---
title: "Your Post Title"
description: "Short description of the post"
date: 2024-02-24
author: "maxulysse"  # Optional, defaults to maxulysse
tags: ["tag1", "tag2"]  # Optional
image:
  path: "/assets/img/path/to/image.png"  # Optional
---
```

3. Write your post in Markdown below the frontmatter

### Site Configuration

Edit `astro.config.mjs` to modify:

- Site URL
- Integrations
- Build options

## Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions. When you push to the `main` branch:

1. GitHub Actions triggers the build workflow
2. Astro builds the site
3. The output is deployed to GitHub Pages

The workflow file is located at `.github/workflows/deploy.yml`.

## Features

- ✅ Fast, static site generation with Astro
- ✅ Content collections for organized content management
- ✅ Automatic sitemap generation
- ✅ Bootstrap styling
- ✅ Code syntax highlighting with Prism
- ✅ Responsive design
- ✅ Automatic GitHub Pages deployment

## Migration Notes

### What's Compatible

- All 24 blog posts migrated
- All page layouts converted
- Author data preserved
- Tags and archives functionality maintained
- Search functionality logic ready to be re-integrated

### What May Need Updates

- Search implementation (was Jekyll-based, now can use Pagefind or other Astro search solutions)
- Some existing plugins/features from Jekyll may need Astro equivalents
- Custom JavaScript may need to be wrapped in Astro scripts

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Deployment - GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

## Previous Jekyll Setup

The original Jekyll configuration and files are still present in the repository (Gemfile, _config.yml, etc.) for reference, but they are no longer used. The Astro setup is the primary source of truth.

## Next Steps

1. Test the site locally: `npm run dev`
2. Review the build output: `npm run build`
3. Push to GitHub to trigger automatic deployment
4. Configure any additional features needed (e.g., search, analytics, etc.)

---

**Built with [Astro](https://astro.build)**
