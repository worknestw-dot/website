import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found · Alex Rivera'
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500 via-cyan-400 to-sunshine opacity-80">
        <div className="absolute inset-6 rounded-full border-4 border-dashed border-white/70 animate-pulse" aria-hidden />
      </div>
      <h1 className="text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Well, this is unexpected.</h1>
      <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
        The page you’re looking for has gone on an adventure in the lab. Try heading back to the homepage or explore the latest projects.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Return home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-indigo-500 px-5 py-3 text-sm font-semibold text-indigo-500 transition hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          View projects
        </Link>
      </div>
    </div>
  );
}
