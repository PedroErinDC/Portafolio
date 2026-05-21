# Portafolio — Pedro Erin Diaz Cumes

Personal portfolio site. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Bilingual (ES / EN). Deployed to GitHub Pages.

## Stack

- Astro 6 (static SSG)
- Tailwind CSS 4
- TypeScript (strict)
- Built-in i18n routing (default: `es`, alt: `en` under `/en/*`)

## Local development

Requires **Node 22+** (`nvm install 22`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to ./dist
npm run preview  # previews ./dist locally
```

## Project structure

```
src/
├── components/        Reusable UI (Hero, ProjectCard, demos, etc.)
├── i18n/              ui.ts (translations), utils.ts (helpers)
├── layouts/           Layout.astro (head, header, footer wrapper)
├── pages/             ES routes (default)
│   ├── trabajo/       Cotton, PublicVector
│   └── escuela/       Unity game
└── pages/en/          EN mirror routes
    ├── work/
    └── school/
```

## Deployment (GitHub Pages)

1. Push the repo to GitHub.
2. In **Settings → Pages** select **Build and deployment: GitHub Actions**.
3. Update `astro.config.mjs`:
   - `site: 'https://<your-username>.github.io'`
   - `base: '/<repo-name>'` (or `'/'` if hosting at the apex)
4. Push to `main`. The workflow at `.github/workflows/deploy.yml` will build + deploy automatically.

## Demos

The Cotton and PublicVector demos are **simulated**. They do not run the real Whisper / Qwen / YOLO models — those are too heavy for static free hosting. The data shown is illustrative.

## License

MIT.
