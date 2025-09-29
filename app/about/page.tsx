import { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About · Alex Rivera',
  description: 'Learn about Alex Rivera’s journey, values, and toolkit across design and development.',
  pathname: '/about'
});

const timeline = [
  { year: '2025', title: 'CS + HCI Student, University of Texas', description: 'Leading the student developer guild while crafting inclusive campus tools.' },
  { year: '2024', title: 'Design Systems Intern, Velocity Labs', description: 'Built token pipelines and accessibility guardrails across 60+ components.' },
  { year: '2023', title: 'Hackathon Mentor & Winner', description: 'Prototype-first workflows that helped secure two best-in-show awards.' }
];

const values = [
  { title: 'Curiosity first', description: 'Ask generous questions, explore edge cases, and experiment with new mediums.' },
  { title: 'Inclusive by default', description: 'Accessibility is a product requirement, not a nice-to-have.' },
  { title: 'Communicate generously', description: 'Transparent updates and documentation that empower collaborators.' }
];

const toolkit = [
  'Next.js + TypeScript',
  'Framer Motion',
  'Tailwind CSS',
  'Figma Auto Layout',
  'Supabase',
  'Notion + Linear',
  'Storybook',
  'Plausible Analytics'
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">About</p>
        <h1 className="mt-4 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">A technologist who blends code, craft, and care.</h1>
        <p className="mt-6 text-lg text-[var(--color-text-dark)]/70 dark:text-white/70">
          Hello! I’m Alex Rivera, a student and junior full-stack developer based in Austin, USA. I design and build expressive digital experiences that are joyful to use and inclusive by design.
        </p>
      </header>
      <section className="mt-16 grid gap-12 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-6">
          <Image
            src="/images/profile-hero.png"
            alt="Portrait of Alex Rivera smiling"
            width={520}
            height={520}
            className="w-full rounded-[2rem] border border-white/10 shadow-lg"
          />
          <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
            <h2 className="text-xl font-semibold text-[var(--color-text-dark)] dark:text-white">Fun facts</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
              <li>🌈 I create generative art experiments in the lab page weekly.</li>
              <li>🎮 I built a rhythm game that teaches HTML semantics.</li>
              <li>☕ Latte art enthusiast and campus coffee reviewer.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Timeline</h2>
            <ul className="mt-6 space-y-6">
              {timeline.map((entry) => (
                <li key={entry.year} className="rounded-3xl border border-white/10 bg-white/50 p-6 shadow-sm backdrop-blur dark:bg-white/5">
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{entry.year}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{entry.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{entry.description}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Values</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-white/10 bg-white/50 p-5 shadow-sm backdrop-blur dark:bg-white/5">
                  <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Toolkit</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-[var(--color-text-dark)]/80 dark:text-white/80 sm:grid-cols-3">
              {toolkit.map((tool) => (
                <li key={tool} className="rounded-full bg-indigo-500/10 px-4 py-2 text-center font-semibold text-indigo-500">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
