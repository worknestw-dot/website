import Link from 'next/link';

const footerLinks = [
  {
    title: 'Explore',
    items: [
      { href: '/projects', label: 'Projects' },
      { href: '/design', label: 'Design Work' },
      { href: '/lab', label: 'Lab' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { href: '/blog', label: 'Articles' },
      { href: '/resume', label: 'Resume' },
      { href: '/services', label: 'Services' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[var(--color-surface)]/80 py-16 text-sm text-[var(--color-text-dark)] dark:text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-sunshine text-white shadow-md">
              AR
            </span>
            <p className="font-semibold">Alex Rivera</p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-[var(--color-text-dark)]/80 dark:text-white/70">
            Student &amp; Junior Full-Stack Developer crafting immersive, inclusive web experiences with a playful edge.
          </p>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dark)]/60 dark:text-white/50">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dark)]/60 dark:text-white/50">Connect</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="mailto:hello@alexrivera.dev" className="transition hover:text-indigo-500">
                hello@alexrivera.dev
              </a>
            </li>
            <li>
              <a href="https://github.com/alexrivera" className="transition hover:text-indigo-500">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexrivera" className="transition hover:text-indigo-500">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/alexrivera" className="transition hover:text-indigo-500">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://twitter.com/alexrivera" className="transition hover:text-indigo-500">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-4 px-4 text-xs text-[var(--color-text-dark)]/60 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Alex Rivera. Built with curiosity and care.</p>
        <p>
          Prefer a different language? <span className="font-semibold">i18n-ready</span> – add more locales via Contentlayer.
        </p>
      </div>
    </footer>
  );
}
