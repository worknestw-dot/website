import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

const packages = [
  {
    name: 'Portfolio Glow-Up',
    price: '$850',
    description: 'Two-week sprint to refresh design systems, performance, and storytelling.',
    deliverables: ['Audit existing site', 'Refine hero, projects, and contact flows', 'Lighthouse + accessibility report']
  },
  {
    name: 'MVP Accelerator',
    price: '$1.8k',
    description: 'Design + develop a polished MVP with animations, tokens, and docs.',
    deliverables: ['Discovery workshop', 'Interactive prototype', 'Next.js build with CMS-ready content']
  },
  {
    name: 'DevOps Dashboard',
    price: 'Custom',
    description: 'Data-rich dashboards with realtime charts and inclusive theming.',
    deliverables: ['UX research & instrumentation', 'Visualization system', 'Performance + accessibility QA']
  }
];

const faqs = [
  {
    q: 'Do you offer student pricing?',
    a: 'Yes! I love collaborating with students and community nonprofits—reach out for sliding scale options.'
  },
  {
    q: 'How do engagements start?',
    a: 'We begin with a 45-minute workshop to align on goals, timeline, and success metrics. You’ll receive a summary deck and roadmap.'
  },
  {
    q: 'What tools do you use for collaboration?',
    a: 'Linear, Notion, Figma, Loom, and GitHub. I’m flexible with your team’s stack.'
  }
];

export const metadata: Metadata = buildMetadata({
  title: 'Services · Alex Rivera',
  description: 'Explore freelance packages, process, and FAQs for working with Alex Rivera.',
  pathname: '/services'
});

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/services', label: 'Services', isCurrent: true }
        ]}
      />
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Services</p>
        <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Freelance packages designed for speed and delight.</h1>
        <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          From case-study-ready portfolios to interactive dashboards, I help teams ship inclusive experiences quickly. Pick a package or request a custom scope.
        </p>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div key={pkg.name} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/10">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{pkg.price}</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-text-dark)] dark:text-white">{pkg.name}</h2>
            <p className="mt-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{pkg.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
              {pkg.deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="mt-16 grid gap-6 md:grid-cols-[2fr,3fr]">
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Process</h2>
          <ol className="mt-4 space-y-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            <li><strong>Discover:</strong> Collaborative workshop to uncover goals, users, and constraints.</li>
            <li><strong>Design:</strong> Rapid prototypes, motion studies, and design system alignment.</li>
            <li><strong>Build:</strong> Accessible, performant implementation with documentation.</li>
            <li><strong>Launch:</strong> QA, analytics instrumentation, and handoff assets.</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">FAQs</h2>
          <ul className="mt-4 space-y-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            {faqs.map((faq) => (
              <li key={faq.q}>
                <p className="font-semibold text-[var(--color-text-dark)] dark:text-white">{faq.q}</p>
                <p className="mt-1">{faq.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="mt-16 rounded-3xl border border-indigo-500/40 bg-indigo-500/10 p-8 text-[var(--color-text-dark)] dark:text-white">
        <h2 className="text-2xl font-semibold">Ready to collaborate?</h2>
        <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          Send a note with context, timeline, and budget via the contact form. I respond within two days.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Contact Alex
        </a>
      </div>
    </div>
  );
}
