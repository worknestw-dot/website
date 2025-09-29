import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ArticleCard } from '@/components/article-card';
import { Pagination } from '@/components/pagination';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Blog · Alex Rivera',
  description: 'Articles and notes from Alex Rivera covering front-end development, design systems, and accessibility.',
  pathname: '/blog'
});

const PAGE_SIZE = 6;

export default function BlogPage({ searchParams }: { searchParams?: { tag?: string; page?: string } }) {
  const tag = searchParams?.tag;
  const page = Number(searchParams?.page ?? '1');

  const filtered = tag ? blogPosts.filter((post) => post.tags.includes(tag)) : blogPosts;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog', isCurrent: true }
        ]}
      />
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Articles</p>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Sharing processes, tools, and lessons learned.</h1>
        </div>
        <p className="max-w-xl text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          Expect accessibility deep dives, design-to-code workflows, and notes from experiments in the lab.
        </p>
      </header>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/blog"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${!tag ? 'bg-indigo-500 text-white shadow-md' : 'bg-white/50 text-[var(--color-text-dark)]/70 dark:bg-white/10 dark:text-white/70'}`}
        >
          All ({blogPosts.length})
        </a>
        {tags.map((item) => (
          <a
            key={item}
            href={`/blog?tag=${item}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${tag === item ? 'bg-indigo-500 text-white shadow-md' : 'bg-white/50 text-[var(--color-text-dark)]/70 dark:bg-white/10 dark:text-white/70'}`}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {paginated.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
        {paginated.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/50 p-10 text-center shadow-sm backdrop-blur dark:bg-white/5">
            <p className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">No posts yet for this tag.</p>
            <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">Come back soon for new write-ups.</p>
          </div>
        )}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" tag={tag} />
      <section className="mt-16 rounded-3xl border border-white/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-white/10">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Subscribe</h2>
        <p className="mt-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          Want updates on new articles and lab experiments? Join the monthly dispatch.
        </p>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-full border border-white/30 bg-white/80 px-5 py-3 text-sm text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
          />
          <button className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
            Join list
          </button>
        </form>
        <p className="mt-2 text-xs text-[var(--color-text-dark)]/50 dark:text-white/50">No spam. Unsubscribe anytime.</p>
      </section>
      <section className="mt-16 rounded-3xl border border-white/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-white/10">
        <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Archive</h2>
        <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`} className="flex items-center justify-between gap-4 transition hover:text-indigo-500">
                <span>{post.title}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">{formatDate(post.publishedAt)}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
