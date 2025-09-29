import { skills } from '@/data/skills';

const categoryOrder = ['Frontend', 'Design', 'Backend', 'Data', 'DevOps'];

export function SkillsMosaic() {
  const grouped = categoryOrder.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category)
  }));

  return (
    <section className="mt-20" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Skills</p>
            <h2 id="skills-heading" className="mt-3 text-3xl font-bold text-[var(--color-text-dark)] dark:text-white">
              A curious generalist with focused strengths.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
            I love exploring the seams between design, development, and data storytelling. Each skill block below includes rough proficiency levels and years of hands-on experience.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group) => (
            <div key={group.category} className="rounded-3xl border border-white/10 bg-white/50 p-6 shadow-sm backdrop-blur dark:bg-white/5">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{group.category}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between text-sm text-[var(--color-text-dark)]/80 dark:text-white/80">
                    <span>{skill.name}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                      {skill.level}/5 · {skill.years}y
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
