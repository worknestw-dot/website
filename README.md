# Alex Rivera Portfolio

A colorful, animated multi-page portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The site highlights student-friendly case studies, design experiments, and a CMS-ready content model.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience.

> **Note:** The repository ships with placeholder images and a sample resume PDF. Replace assets in `public/images` and `public/files` with production-ready media before launch.

## Features

- App Router architecture with dedicated pages for projects, case studies, blog, design work, services, lab experiments, resume, and policies.
- Design tokens exposed via CSS variables and mirrored in Tailwind configuration.
- Motion-rich interactions using Framer Motion, respecting `prefers-reduced-motion`.
- Dark/light theme toggle plus variant switcher for Student and Pro vibes.
- Contact form with validation, honeypot, and celebratory success state.
- JSON-LD metadata, sitemap, robots.txt, and Open Graph defaults.
- Styleguide page documenting the design system primitives.

## Content Model

Structured data lives under `data/` for projects, blog posts, testimonials, and skills. Extend or connect to a CMS by replacing these collections with dynamic sources.

## Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Launch the production server.
- `npm run lint` – Run ESLint checks.

## Deployment

Configure environment variables and analytics credentials as needed. The project is ready for deployment on platforms like Vercel or Netlify.
