import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

const experiments = [
  {
    title: 'Accessible Parallax Playground',
    description: 'Testing sensor-friendly parallax with reduced motion fallbacks and pointer controls.',
    link: 'https://codesandbox.io/s/accessibility-parallax',
    tag: 'Motion'
  },
  {
    title: 'Themeable Charts',
    description: 'Canvas charts powered by theme tokens and voiceover-friendly annotations.',
    link: 'https://codesandbox.io/s/themeable-charts',
    tag: 'Data Viz'
  },
  {
    title: 'Generative Blob Maker',
    description: 'Customizable blob generator built with GLSL for hero backgrounds.',
    link: 'https://codepen.io/alexrivera/pen/blob-maker',
    tag: 'Creative Coding'
  }
];

export const metadata: Metadata = buildMetadata({
  title: 'Lab · Alex Rivera',
  description: 'Small experiments and prototypes exploring motion, accessibility, and creative coding.',
  pathname: '/lab'
});

export default function LabPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/lab', label: 'Lab', isCurrent: true }
        ]}
      />
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Lab</p>
        <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Creative experiments & prototypes.</h1>
        <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          Weekly explorations in motion, accessibility, and generative visuals. Each demo links out to CodePen or CodeSandbox.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experiments.map((experiment) => (
          <a
            key={experiment.title}
            href={experiment.link}
            className="group rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/10"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-indigo-500">{experiment.tag}</span>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-text-dark)] transition group-hover:text-indigo-500 dark:text-white">
              {experiment.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{experiment.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition group-hover:text-cyan-500">
              View demo <span aria-hidden>→</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
