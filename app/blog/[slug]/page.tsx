import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { marked } from 'marked';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return buildMetadata({ title: 'Article not found', description: 'Article not available', pathname: '/blog' });
  return buildMetadata({
    title: `${post.title} · Article`,
    description: post.summary,
    pathname: `/blog/${post.slug}`,
    image: post.coverImage
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const html = marked.parse(post.content) as string;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/${post.slug}`, label: post.title, isCurrent: true }
        ]}
      />
      <article className="prose prose-invert:max-w-3xl prose-headings:text-[var(--color-text-dark)] prose-headings:dark:text-white prose-p:text-[var(--color-text-dark)]/80 prose-p:dark:text-white/80 prose-li:text-[var(--color-text-dark)]/80 prose-li:dark:text-white/80 dark:prose-invert">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-500">{post.tags.join(' · ')}</p>
          <h1 className="mt-4 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">{post.title}</h1>
          <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            {formatDate(post.publishedAt)} · {post.readingTime}
          </p>
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            width={1280}
            height={720}
            className="mt-8 w-full rounded-[2rem] border border-white/10 shadow-lg"
          />
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <footer className="mt-12 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10">
        <h2 className="text-xl font-semibold text-[var(--color-text-dark)] dark:text-white">Share</h2>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://alexrivera.dev/blog/${post.slug}`} className="rounded-full bg-indigo-500 px-4 py-2 font-semibold text-white transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
            Twitter/X
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://alexrivera.dev/blog/${post.slug}`} className="rounded-full border border-indigo-500 px-4 py-2 font-semibold text-indigo-500 transition hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
            LinkedIn
          </a>
          <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: https://alexrivera.dev/blog/${post.slug}`)}`} className="rounded-full border border-white/40 px-4 py-2 font-semibold text-[var(--color-text-dark)] transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 dark:text-white">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
