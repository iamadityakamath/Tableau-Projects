# Tableau Projects Portfolio

A React + Vite portfolio site for showcasing Tableau dashboards, embedded Tableau Public views, supporting documentation, datasource links, and downloadable project assets.

## Overview

This project presents multiple Tableau projects in a clean portfolio format:

- A homepage with a personal introduction and featured project cards
- Dedicated project pages for each Tableau project
- Embedded Tableau dashboards using Tableau Public embeds
- Project-level resource actions such as datasource links, documentation, resume download, and optional TWB downloads

## Stack

- React
- TypeScript
- Vite
- React Router

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.tsx              Main routes and page UI
  data/projects.ts     Portfolio project metadata
  styles.css           Global styles

public/
  docs/                PDF documentation files
  twb/                 Tableau workbook files
  datasources/         Optional datasource files
  images/              Optional image assets
```

## Updating Content

Most project content is managed from:

`src/data/projects.ts`

For each project, you can update:

- project title
- subtitle
- description
- datasource link
- documentation link
- TWB link
- dashboard titles and summaries
- Tableau Public embed settings

## Tableau Embeds

The app supports:

- iframe-based embeds
- Tableau script embeds for dashboards that need Tableau Public's generated embed code

Script-based embed settings are configured per dashboard in `src/data/projects.ts`.

## Assets

Place local supporting files in:

- `public/docs/`
- `public/twb/`
- `public/datasources/`
- `public/images/`

Files inside `public/` are served directly by Vite.

## Notes

- Routing uses `HashRouter`, which keeps the site compatible with static hosting platforms such as GitHub Pages.
- The `Download TWB` button only appears for projects that actually have a `twbUrl`.
- Tableau dashboards are embedded directly into each project page when supported.
