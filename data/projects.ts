export type ProjectTag = 'frontend' | 'backend' | 'full-stack' | 'ui-ux' | 'data' | 'devops' | string;

export type ProjectMetric = {
  label: string;
  value: string | number;
};

export type ProjectTestimonial = {
  author: string;
  quote: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  gallery: string[];
  tags: ProjectTag[];
  role: string;
  team: string;
  tools: string[];
  duration: string;
  year: number;
  problem: string;
  approach: string;
  process: string;
  solution: string;
  result: string;
  metrics: ProjectMetric[];
  links: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  testimonial?: ProjectTestimonial;
  accessibleAlt: string;
};

export const projects: Project[] = [
  {
    title: 'Study Sprints Planner',
    slug: 'study-sprints-planner',
    summary: 'A colorful, animated PWA that helps students plan accountable study sprints with focus timers and streaks.',
    coverImage: '/images/projects/study-sprints-cover.png',
    gallery: ['/images/projects/study-1.png', '/images/projects/study-2.png'],
    tags: ['frontend', 'ui-ux', 'full-stack'],
    role: 'Product Designer & Frontend Developer',
    team: 'Solo',
    tools: ['React', 'Next.js', 'Framer Motion', 'Tailwind'],
    duration: '6 weeks',
    year: 2025,
    problem: 'Students struggle to maintain focus across remote classes and personal study time.',
    approach: 'Gamified accountability loops, friendly animations, and adaptive reminders to sustain motivation.',
    process: 'Research → Wireframes → Prototypes → Build → Test',
    solution: 'A responsive PWA with playful motion, offline support, and progress visualizations.',
    result: '+37% average session length during beta with 4,100 active users.',
    metrics: [
      { label: 'Active users', value: 4100 },
      { label: 'Avg. time on task', value: '18m' }
    ],
    links: {
      live: 'https://studysprints.app',
      repo: 'https://github.com/alexrivera/study-sprints',
      caseStudy: '/projects/study-sprints-planner'
    },
    testimonial: {
      author: 'Maya Chen, Mentor at InnovateU',
      quote: 'Alex shipped a standout build with thoughtful UX and measurable impact.'
    },
    accessibleAlt: 'Screenshots of a vibrant study planner app with timers and badges'
  },
  {
    title: 'Campus Compass',
    slug: 'campus-compass',
    summary: 'An inclusive campus navigation platform with AR-enabled micro-interactions and accessible routing.',
    coverImage: '/images/projects/campus-compass-cover.png',
    gallery: ['/images/projects/campus-compass-1.png', '/images/projects/campus-compass-2.png'],
    tags: ['full-stack', 'data', 'frontend'],
    role: 'Full-Stack Developer',
    team: 'Trio',
    tools: ['Next.js', 'Mapbox', 'Supabase', 'TypeScript'],
    duration: '10 weeks',
    year: 2024,
    problem: 'First-year students need accessible navigation that respects mobility needs.',
    approach: 'Data-backed accessible paths, live feedback, and contextual campus tips.',
    process: 'Research → Service Blueprint → API Architecture → Frontend Build → Accessibility Testing',
    solution: 'Responsive web app with AR overlays, accessible route planning, and inclusive UI controls.',
    result: '91% of pilot users reported reduced stress navigating campus.',
    metrics: [
      { label: 'Test participants', value: 68 },
      { label: 'Accessibility score', value: '98/100' }
    ],
    links: {
      live: 'https://campuscompass.dev',
      repo: 'https://github.com/alexrivera/campus-compass',
      caseStudy: '/projects/campus-compass'
    },
    testimonial: {
      author: 'Dr. Priya Patel, Accessibility Lab',
      quote: 'Thoughtful research meets performant delivery. Campus Compass is a model student project.'
    },
    accessibleAlt: 'Mobile screens showing an accessible campus navigation app with AR highlights'
  },
  {
    title: 'Pulseboard Analytics',
    slug: 'pulseboard-analytics',
    summary: 'A realtime DevOps dashboard for tracking CI health, incidents, and release cadence in one immersive workspace.',
    coverImage: '/images/projects/pulseboard-cover.png',
    gallery: ['/images/projects/pulseboard-1.png', '/images/projects/pulseboard-2.png'],
    tags: ['devops', 'backend', 'data'],
    role: 'Frontend Engineer',
    team: 'Cross-functional team',
    tools: ['Next.js', 'D3.js', 'Node.js', 'Tailwind'],
    duration: '8 weeks',
    year: 2024,
    problem: 'Ops teams juggle multiple dashboards with poor signal-to-noise ratios.',
    approach: 'Centralized live metrics, ambient alerts, and accessible theming for low-light ops rooms.',
    process: 'Interviews → Data modeling → Visualization prototypes → Engineering sprints',
    solution: 'A modular analytics UI with real-time streaming charts, keyboard shortcuts, and dark mode.',
    result: 'Cut release incident response time by 23%.',
    metrics: [
      { label: 'Deploy frequency uplift', value: '1.8x' },
      { label: 'MTTR', value: '↓23%' }
    ],
    links: {
      live: 'https://pulseboard.dev',
      repo: 'https://github.com/alexrivera/pulseboard',
      caseStudy: '/projects/pulseboard-analytics'
    },
    testimonial: {
      author: 'Jordan Blake, DevOps Coach',
      quote: 'The dashboard nails clarity and motion without overwhelming ops teams.'
    },
    accessibleAlt: 'Laptop mockup of a dark analytics dashboard with colorful charts'
  }
];
