import { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = buildMetadata({
  title: 'Resume · Alex Rivera',
  description: 'Download Alex Rivera’s resume and explore experience, education, and certifications.',
  pathname: '/resume'
});

const experience = [
  {
    company: 'Velocity Labs',
    role: 'Design Systems Intern',
    dates: 'Summer 2024',
    bullets: [
      'Expanded design token pipeline to support light/dark modes with zero regression bugs.',
      'Partnered with accessibility lab to ship 14 WCAG fixes with measurable impact.'
    ]
  },
  {
    company: 'Pioneer Hack Club',
    role: 'Mentor & Workshop Lead',
    dates: '2023 – Present',
    bullets: [
      'Hosted front-end workshops for 200+ students, focusing on animation performance.',
      'Coached teams to ship accessible MVPs under 48 hours.'
    ]
  }
];

const education = [
  {
    school: 'University of Texas at Austin',
    program: 'B.S. Computer Science + HCI Certificate',
    dates: '2022 – 2026',
    details: 'Coursework in accessible computing, product design, and distributed systems.'
  }
];

const certifications = ['Google UX Design Certificate', 'Web Accessibility Specialist (IAAP) – In progress'];

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/resume', label: 'Resume', isCurrent: true }
        ]}
      />
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Resume</p>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Alex Rivera · Student & Junior Full-Stack Developer</h1>
          <p className="mt-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            Austin, USA · hello@alexrivera.dev · github.com/alexrivera
          </p>
        </div>
        <Link
          href="/files/alex-rivera-resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Download PDF
        </Link>
      </header>
      <section className="mt-12 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Experience</h2>
          <ul className="mt-6 space-y-6">
            {experience.map((item) => (
              <li key={item.company} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{item.role}</h3>
                    <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">{item.company}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">{item.dates}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Education</h2>
          <ul className="mt-6 space-y-4">
            {education.map((item) => (
              <li key={item.school} className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{item.school}</h3>
                <p className="text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{item.program}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">{item.dates}</p>
                <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{item.details}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Certifications</h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            {certifications.map((cert) => (
              <li key={cert} className="rounded-full bg-white/60 px-4 py-2 font-semibold text-[var(--color-text-dark)] shadow-xs dark:bg-white/10 dark:text-white">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
