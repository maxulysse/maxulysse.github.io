# [maxulysse.github.io](https://maxulysse.github.io)

[![License](https://img.shields.io/github/license/maxulysse/maxulysse.github.io.svg)](https://github.com/maxulysse/maxulysse.github.io/blob/main/LICENSE)
[![CI](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/ci.yml)

Personal website built with [Astro](https://astro.build).

## Dependencies

- [academicons](https://jpswalsh.github.io/academicons/) `1.9.6`
- [Astro](https://astro.build/) `^5.2.0`
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/) `^4.0.1`
- [Bootstrap](https://getbootstrap.com/) `5.3.8`
- [Font Awesome](https://fontawesome.com/) `6.5.2`
- [Prism](https://prismjs.com/) `1.29.0`
- [Reveal.js](https://revealjs.com/) `5.2.1`

## Inspirations

- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
- [Tips and Tutorials](https://github.com/dalanzg/tips-tutorials)
- [dridk.me](https://github.com/dridk/blog)
- [talks.bebatut.fr](https://github.com/bebatut-slides/bebatut-slides.github.io)

## Quick Start

Prerequisites:

- Node.js 24+
- npm

Install:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
public/           Static assets
src/content/      Blog posts and presentations
src/pages/        Astro routes
src/layouts/      Shared layouts
src/data/         Site data (authors, social links)
```

## Deployment

Deployment is handled by GitHub Actions to GitHub Pages.
