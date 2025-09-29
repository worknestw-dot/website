import Link from 'next/link';

export type Crumb = {
  href: string;
  label: string;
  isCurrent?: boolean;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.isCurrent ? (
              <span aria-current="page" className="font-semibold text-[var(--color-text-dark)] dark:text-white">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="transition hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
