export type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  content: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Designing Delight with Accessibility in Mind',
    slug: 'designing-delight-with-accessibility',
    summary: 'How I balance playful motion with WCAG requirements across student projects.',
    coverImage: '/images/blog-covers/accessibility-delight.png',
    content: `## Overview

Designing playful interfaces while meeting WCAG guidelines is a balancing act. I start by establishing a robust token system, then plan animation alternatives using prefers-reduced-motion.

## Key Practices

1. Prototype motion early and test with keyboard-first flows.
2. Ensure color contrast stays above 4.5:1 in both themes.
3. Pair every animation with a non-motion fallback.

## Tooling

- Figma plugins for contrast and motion preview.
- Framer Motion for controllable physics.
- Storybook accessibility add-ons.

## Next Steps

I am exploring how to automate reduced-motion snapshots in CI to catch regressions before launch.`,
    tags: ['accessibility', 'design'],
    readingTime: '6 min read',
    publishedAt: '2024-11-12'
  },
  {
    title: 'From Figma to Production with Next.js App Router',
    slug: 'figma-to-production-nextjs',
    summary: 'A walkthrough of my design-to-code workflow using tokens, Contentlayer, and DX guardrails.',
    coverImage: '/images/blog-covers/figma-nextjs.png',
    content: `## Why App Router

The App Router keeps routing, layouts, and streaming data simple. I lean on loading UI patterns to keep perceived performance high.

## Checklist

- Define CMS schema first.
- Map tokens to Tailwind.
- Bake in SEO metadata via next-seo.

## Lessons Learned

Ship animations behind sensible defaults. Provide toggles for recruiters who want focus-friendly experiences.`,
    tags: ['nextjs', 'frontend'],
    readingTime: '5 min read',
    publishedAt: '2024-09-28'
  }
];
