export type Skill = {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Design' | 'Data' | 'DevOps' | string;
  years: number;
};

export const skills: Skill[] = [
  { name: 'Next.js', level: 4, category: 'Frontend', years: 3 },
  { name: 'TypeScript', level: 4, category: 'Frontend', years: 3 },
  { name: 'React', level: 4, category: 'Frontend', years: 4 },
  { name: 'Tailwind CSS', level: 5, category: 'Frontend', years: 3 },
  { name: 'Framer Motion', level: 4, category: 'Frontend', years: 3 },
  { name: 'Node.js', level: 3, category: 'Backend', years: 3 },
  { name: 'Supabase', level: 3, category: 'Backend', years: 2 },
  { name: 'PostgreSQL', level: 3, category: 'Data', years: 3 },
  { name: 'D3.js', level: 2, category: 'Data', years: 2 },
  { name: 'Figma', level: 5, category: 'Design', years: 4 },
  { name: 'Accessibility Audits', level: 4, category: 'Design', years: 3 },
  { name: 'CI/CD', level: 3, category: 'DevOps', years: 2 }
];
