import Link from 'next/link';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
  tag?: string;
  search?: string;
};

export function Pagination({ currentPage, totalPages, basePath, tag, search }: PaginationProps) {
  if (totalPages <= 1) return null;

  const createHref = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set('page', page.toString());
    if (tag) params.set('tag', tag);
    if (search) params.set('query', search);
    const suffix = params.toString() ? `?${params.toString()}` : '';
    return `${basePath}${suffix}`;
  };

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-between">
      <Link
        href={createHref(Math.max(currentPage - 1, 1))}
        aria-disabled={currentPage === 1}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${currentPage === 1 ? 'pointer-events-none text-[var(--color-text-dark)]/40 dark:text-white/40' : 'text-indigo-500 hover:text-cyan-500'}`}
      >
        Previous
      </Link>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/60 dark:text-white/60">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        href={createHref(Math.min(currentPage + 1, totalPages))}
        aria-disabled={currentPage === totalPages}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${currentPage === totalPages ? 'pointer-events-none text-[var(--color-text-dark)]/40 dark:text-white/40' : 'text-indigo-500 hover:text-cyan-500'}`}
      >
        Next
      </Link>
    </nav>
  );
}
