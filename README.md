# [maxulysse.github.io](https://maxulysse.github.io)

[![License](https://img.shields.io/github/license/maxulysse/maxulysse.github.io.svg)](https://github.com/maxulysse/maxulysse.github.io/blob/main/LICENSE)
[![CI](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/ci.yml)
[![build-cv](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/build-cv.yml/badge.svg)](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/build-cv.yml)
[![Deploy to GitHub Pages](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/maxulysse/maxulysse.github.io/actions/workflows/deploy.yml)

Personal website built with [Astro](https://astro.build).

## Dependencies

- [Astro](https://astro.build/)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [@orcid/bibtex-parse-js](https://github.com/ORCID/bibtexParseJs)
- [Prism](https://prismjs.com/)
- [Reveal.js](https://revealjs.com/)
- [academicons](https://jpswalsh.github.io/academicons/)

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

## CV Automation

The CV PDF is rebuilt automatically by the [build-cv workflow](.github/workflows/build-cv.yml).
Generation is done via the [maxulysse/compile-latex](https://github.com/maxulysse/compile-latex) Nextflow lightweight pipeline.

- Triggered on pushes to `main` when either `src/data/CV-MGarcia.tex` or `src/data/biblio.bib` changes
- Can also be run on demand with `workflow_dispatch` from the GitHub Actions UI
- Generates `CV-MGarcia-latest.pdf` and force-pushes it to the `cv` branch
