import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return buildMetadata({ title: 'Project not found', description: 'Project detail not found', pathname: '/projects' });
  return buildMetadata({
    title: `${project.title} · Case Study`,
    description: project.summary,
    pathname: `/projects/${project.slug}`,
    image: project.coverImage
  });
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/projects', label: 'Projects' },
          { href: `/projects/${project.slug}`, label: project.title, isCurrent: true }
        ]}
      />
      <header className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Case Study</p>
        <h1 className="text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">{project.title}</h1>
        <p className="text-lg text-[var(--color-text-dark)]/70 dark:text-white/70">{project.summary}</p>
        <dl className="grid gap-4 rounded-3xl border border-white/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-white/10 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">Role</dt>
            <dd className="mt-2 text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">Year</dt>
            <dd className="mt-2 text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">{project.year}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">Tools</dt>
            <dd className="mt-2 text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">{project.tools.join(', ')}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">Duration</dt>
            <dd className="mt-2 text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">{project.duration}</dd>
          </div>
        </dl>
        <Image
          src={project.coverImage}
          alt={project.accessibleAlt}
          width={1280}
          height={720}
          className="w-full rounded-[2rem] border border-white/10 shadow-lg"
        />
      </header>

      <section className="mt-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Overview</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/50 p-5 shadow-sm backdrop-blur dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Problem</h3>
              <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.problem}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/50 p-5 shadow-sm backdrop-blur dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Approach</h3>
              <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.approach}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/50 p-5 shadow-sm backdrop-blur dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Process</h3>
              <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.process}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Solution & Features</h2>
          <p className="mt-4 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.solution}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <figure key={image} className="rounded-3xl border border-white/10 bg-white/60 p-4 shadow-sm backdrop-blur dark:bg-white/10">
                <Image src={image} alt={project.accessibleAlt} width={640} height={360} className="w-full rounded-2xl object-cover" />
                <figcaption className="mt-2 text-xs uppercase tracking-[0.3em] text-[var(--color-text-dark)]/50 dark:text-white/50">
                  Prototype preview
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Results & Metrics</h2>
          <p className="mt-2 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{project.result}</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/60 p-6 text-center shadow-sm backdrop-blur dark:bg-white/10">
                <dt className="text-xs uppercase tracking-[0.3em] text-indigo-500">{metric.label}</dt>
                <dd className="mt-3 text-3xl font-bold text-[var(--color-text-dark)] dark:text-white">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {project.testimonial && (
          <div className="rounded-3xl border border-white/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Testimonial</p>
            <blockquote className="mt-4 text-lg text-[var(--color-text-dark)]/80 dark:text-white/80">
              “{project.testimonial.quote}”
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">— {project.testimonial.author}</p>
          </div>
        )}
        <div className="rounded-3xl border border-white/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:bg-white/10">
          <h2 className="text-2xl font-semibold text-[var(--color-text-dark)] dark:text-white">Next steps</h2>
          <p className="mt-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            Have a similar challenge? Let’s chat about prototyping, performance audits, or shipping polished experiences.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                View live project
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                className="rounded-full border border-indigo-500 px-5 py-2 text-sm font-semibold text-indigo-500 transition hover:bg-indigo-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                View repository
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
