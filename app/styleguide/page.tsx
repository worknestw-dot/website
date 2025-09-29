import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Styleguide · Alex Rivera',
  description: 'Design tokens, typography, and reusable components for Alex Rivera’s portfolio system.',
  pathname: '/styleguide'
});

const colors = [
  { name: 'Primary Indigo', token: '--color-primary', hex: '#6C5CE7' },
  { name: 'Secondary Cyan', token: '--color-secondary', hex: '#00D2FF' },
  { name: 'Accent Coral', token: '--color-accent-a', hex: '#FF7A59' },
  { name: 'Accent Sunshine', token: '--color-accent-b', hex: '#FFD166' },
  { name: 'Midnight', token: '--color-dark', hex: '#0B1021' }
];

const shadows = [
  { name: 'Shadow XS', token: '--shadow-xs' },
  { name: 'Shadow SM', token: '--shadow-sm' },
  { name: 'Shadow MD', token: '--shadow-md' },
  { name: 'Shadow LG', token: '--shadow-lg' }
];

const radii = [
  { name: 'Radius XS', token: '--radius-xs' },
  { name: 'Radius MD', token: '--radius-md' },
  { name: 'Radius XL', token: '--radius-xl' }
];

export default function StyleguidePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Design System Styleguide</h1>
      <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
        This page documents the palette, typography, motion, and UI components powering the portfolio. Extend these tokens to keep future pages cohesive.
      </p>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Color Tokens</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {colors.map((color) => (
            <div key={color.token} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
              <div className="h-20 w-full rounded-2xl" style={{ background: `var(${color.token})` }} />
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{color.name}</h3>
              <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">Token: {color.token}</p>
              <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">Hex: {color.hex}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Typography</h2>
        <div className="mt-4 space-y-4">
          <p className="text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Sora 700 — Headlines</p>
          <p className="text-lg text-[var(--color-text-dark)]/80 dark:text-white/80">Inter 400 — Body copy with 1.7 line-height.</p>
          <p className="font-mono text-sm text-[var(--color-text-dark)]/80 dark:text-white/80">JetBrains Mono — Code snippets</p>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Radii & Shadows</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {radii.map((radius) => (
            <div key={radius.token} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
              <div className="h-20 w-full" style={{ borderRadius: `var(${radius.token})`, background: 'var(--color-secondary)' }} />
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{radius.name}</h3>
              <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">Token: {radius.token}</p>
            </div>
          ))}
          {shadows.map((shadow) => (
            <div key={shadow.token} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
              <div className="h-20 w-full rounded-2xl bg-white" style={{ boxShadow: `var(${shadow.token})` }} />
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{shadow.name}</h3>
              <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">Token: {shadow.token}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Components</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
            <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md">Primary</button>
              <button className="rounded-full border border-indigo-500 px-4 py-2 text-sm font-semibold text-indigo-500">Secondary</button>
              <button className="rounded-full border border-white/40 px-4 py-2 text-sm text-[var(--color-text-dark)] dark:text-white">Ghost</button>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
            <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">Cards</h3>
            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/80 p-4 shadow-sm dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Project Card</p>
                <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">Image, tags, summary, CTA.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/80 p-4 shadow-sm dark:bg-white/10">
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">Article Card</p>
                <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">Cover, tags, summary, meta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
