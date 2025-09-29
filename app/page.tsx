import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Dribbble, Mail } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import { testimonials } from '@/data/testimonials';
import { GradientOrbs } from '@/components/gradient-orbs';
import { ProjectCard } from '@/components/project-card';
import { ArticleCard } from '@/components/article-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { SkillsMosaic } from '@/components/skills-mosaic';

const socialLinks = [
  { href: 'https://github.com/alexrivera', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/alexrivera', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://dribbble.com/alexrivera', label: 'Dribbble', icon: Dribbble },
  { href: 'mailto:hello@alexrivera.dev', label: 'Email', icon: Mail }
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestArticle = blogPosts[0];

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="gradient-aurora absolute inset-0 opacity-70" aria-hidden />
        <GradientOrbs />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-28 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6 text-white">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm uppercase tracking-[0.4em] text-white/80"
            >
              Hi, I’m Alex Rivera
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08
                  }
                }
              }}
              className="text-5xl font-extrabold leading-tight sm:text-6xl"
            >
              {['Colorful', 'code.', 'Human-centered', 'design.'].map((word, index) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={index === 1 || index === 3 ? 'text-coral block sm:inline' : 'block sm:inline'}
                >
                  {word}{' '}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80"
            >
              I’m a Student & Junior Full-Stack Developer in Austin, USA building delightful, performant web experiences across education, accessibility, and analytics.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-midnight shadow-md transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See Projects
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download CV
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                  <span>{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/images/profile-hero.png"
              alt="Portrait of Alex Rivera smiling"
              width={420}
              height={480}
              className="rounded-[2.5rem] border border-white/20 shadow-2xl"
              priority
            />
            <div className="absolute -bottom-8 left-1/2 w-64 -translate-x-1/2 rounded-3xl bg-white/80 p-4 text-midnight shadow-lg backdrop-blur">
              <p className="text-sm font-semibold">Open to internships, junior roles, and playful collabs.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="projects-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Featured Work</p>
            <h2 id="projects-heading" className="mt-3 text-3xl font-bold text-[var(--color-text-dark)] dark:text-white">
              Case studies with measurable outcomes.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition hover:text-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Browse all projects
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SkillsMosaic />

      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="testimonials-heading">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Testimonials</p>
            <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold text-[var(--color-text-dark)] dark:text-white">
              Praise from mentors and collaborators.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            Thoughtful research, inclusive design, and reliable engineering earn trust. Here’s what teammates have shared.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20" aria-labelledby="article-heading">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Latest Article</p>
            <h2 id="article-heading" className="mt-3 text-3xl font-bold text-[var(--color-text-dark)] dark:text-white">
              Documenting experiments & learnings.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 transition hover:text-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Read the blog
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ArticleCard post={latestArticle} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="gradient-aurora relative overflow-hidden rounded-3xl px-8 py-12 text-white shadow-lg">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cpath d=\'M0 39h40v1H0z\' fill=\'rgba(255,255,255,0.15)\'/%3E%3C/svg%3E')] opacity-20" aria-hidden />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Open to internships, junior roles, and freelance collabs.</h2>
              <p className="mt-3 max-w-xl text-white/80">
                Need someone who sweats the details, codes with empathy, and ships polished experiences fast? Let’s explore how I can help.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-midnight shadow-md transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
