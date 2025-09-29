import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/40 p-6 shadow-sm backdrop-blur transition dark:bg-white/5"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 transition group-hover:opacity-100" />
        <Image
          src={project.coverImage}
          alt={project.accessibleAlt}
          width={640}
          height={360}
          className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[var(--color-text-dark)] transition group-hover:text-indigo-500 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.summary}</p>
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            View Case Study
            <span aria-hidden>→</span>
          </Link>
          {project.links.live && (
            <a
              href={project.links.live}
              className="text-sm text-[var(--color-text-dark)]/60 transition hover:text-indigo-500 dark:text-white/60"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
