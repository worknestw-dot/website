import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/data/blog';

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/40 p-6 shadow-sm backdrop-blur transition dark:bg-white/5"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          alt={`Cover image for ${post.title}`}
          width={640}
          height={360}
          className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-dark)] transition group-hover:text-cyan-500 dark:text-white">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{post.summary}</p>
        <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--color-text-dark)]/50 dark:text-white/50">
          {post.readingTime}
        </div>
        <div className="mt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition hover:text-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Read Article
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
