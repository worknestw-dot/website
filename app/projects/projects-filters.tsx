'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';

const TAGS = ['frontend', 'backend', 'full-stack', 'ui-ux', 'data', 'devops'];

export default function ProjectsFilters() {
  const params = useSearchParams();
  const router = useRouter();
  const activeTag = params.get('tag');
  const initialQuery = params.get('query') ?? '';
  const [value, setValue] = useState(initialQuery);

  const counts = useMemo(() => {
    return TAGS.reduce<Record<string, number>>((acc, tag) => {
      acc[tag] = projects.filter((project) => project.tags.includes(tag)).length;
      return acc;
    }, {});
  }, []);

  const applyFilters = (tag?: string, query?: string) => {
    const next = new URLSearchParams(params.toString());
    if (tag) {
      next.set('tag', tag);
    } else {
      next.delete('tag');
    }
    if (query) {
      next.set('query', query);
    } else {
      next.delete('query');
    }
    next.delete('page');
    router.push(`/projects${next.toString() ? `?${next.toString()}` : ''}`);
  };

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => applyFilters(undefined, value)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${!activeTag ? 'bg-indigo-500 text-white shadow-md' : 'bg-white/40 text-[var(--color-text-dark)]/70 dark:bg-white/5 dark:text-white/70'}`}
        >
          All ({projects.length})
        </button>
        {TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => applyFilters(tag, value)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${activeTag === tag ? 'bg-indigo-500 text-white shadow-md' : 'bg-white/40 text-[var(--color-text-dark)]/70 dark:bg-white/5 dark:text-white/70'}`}
          >
            {tag} ({counts[tag] ?? 0})
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="search" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
          Search
        </label>
        <div className="relative w-full sm:max-w-md">
          <input
            id="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                applyFilters(activeTag ?? undefined, value.trim());
              }
            }}
            placeholder="Search by title or keywords"
            className="w-full rounded-full border border-white/30 bg-white/80 px-5 py-3 text-sm text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
          />
          <button
            type="button"
            onClick={() => applyFilters(activeTag ?? undefined, value.trim())}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-sm transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
