import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { projects } from '@/data/projects';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ProjectCard } from '@/components/project-card';
import { Pagination } from '@/components/pagination';
import ProjectsFilters from './projects-filters';

export const metadata: Metadata = buildMetadata({
  title: 'Projects · Alex Rivera',
  description: 'Browse Alex Rivera’s featured engineering and design case studies across frontend, backend, data, and DevOps.',
  pathname: '/projects'
});

const PAGE_SIZE = 6;

export default function ProjectsPage({ searchParams }: { searchParams?: { tag?: string; query?: string; page?: string } }) {
  const tag = searchParams?.tag;
  const query = searchParams?.query?.toLowerCase();
  const page = Number(searchParams?.page ?? '1');

  const filtered = projects.filter((project) => {
    const matchesTag = tag ? project.tags.includes(tag) : true;
    const matchesQuery = query
      ? project.title.toLowerCase().includes(query) || project.summary.toLowerCase().includes(query)
      : true;
    return matchesTag && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/projects', label: 'Projects', isCurrent: true }
        ]}
      />
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Projects</p>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Selected case studies & experiments.</h1>
        </div>
        <p className="max-w-xl text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          Filter by discipline, search by keyword, and dig into detailed case studies covering research, process, and measurable outcomes.
        </p>
      </header>
      <ProjectsFilters />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {paginated.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {paginated.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/50 p-10 text-center shadow-sm backdrop-blur dark:bg-white/5">
            <p className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">No results just yet.</p>
            <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
              Try another combination of tags or search terms to reveal more colorful work.
            </p>
          </div>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/projects" tag={tag} search={searchParams?.query} />
    </div>
  );
}
