import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { Mail, Github, Linkedin, Dribbble } from 'lucide-react';

const socials = [
  { name: 'Email', href: 'mailto:hello@alexrivera.dev', icon: Mail, handle: 'hello@alexrivera.dev' },
  { name: 'GitHub', href: 'https://github.com/alexrivera', icon: Github, handle: '@alexrivera' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alexrivera', icon: Linkedin, handle: '/alexrivera' },
  { name: 'Dribbble', href: 'https://dribbble.com/alexrivera', icon: Dribbble, handle: '/alexrivera' }
];

export const metadata: Metadata = buildMetadata({
  title: 'Contact · Alex Rivera',
  description: 'Get in touch with Alex Rivera for internships, junior roles, or freelance collaborations.',
  pathname: '/contact'
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/contact', label: 'Contact', isCurrent: true }
        ]}
      />
      <header className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Contact</p>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Let’s build something vibrant together.</h1>
          <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            Reach out for internships, junior roles, speaking invites, or creative collaborations. I typically respond within 48 hours.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/60 p-4 text-sm font-semibold text-[var(--color-text-dark)] shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-white/10 dark:text-white"
              >
                <social.icon className="h-5 w-5" aria-hidden />
                <span>{social.name}</span>
                <span className="ml-auto text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
          <h2 className="text-xl font-semibold text-[var(--color-text-dark)] dark:text-white">Collaboration checklist</h2>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            <li>✅ Accessibility-first workflow</li>
            <li>✅ Light & dark mode support</li>
            <li>✅ Motion with reduced-motion fallbacks</li>
            <li>✅ Transparent communication & async-friendly updates</li>
          </ul>
        </div>
      </header>
      <section className="mt-16 grid gap-8 lg:grid-cols-[3fr,2fr]">
        <ContactForm />
        <div className="rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
          <h2 className="text-xl font-semibold text-[var(--color-text-dark)] dark:text-white">Studio Hours</h2>
          <p className="mt-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            Monday – Friday, 9am to 5pm CST. Open to async collaboration across time zones.
          </p>
          <div className="mt-6 h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/30 via-cyan-400/30 to-sunshine/30">
            <p className="p-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
              Optional map placeholder. Embed your campus or coworking space here when ready.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
