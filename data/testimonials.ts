export type Testimonial = {
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    author: 'Maya Chen',
    role: 'Design Mentor',
    company: 'InnovateU',
    avatar: '/images/mockups/maya-chen.png',
    quote: 'Alex pairs rigorous research with joyful UI motion. Their handoffs are the smoothest I have seen from a student designer.'
  },
  {
    author: 'Jordan Blake',
    role: 'DevOps Coach',
    company: 'Velocity Labs',
    avatar: '/images/mockups/jordan-blake.png',
    quote: 'We collaborated on Pulseboard Analytics and Alex brought curiosity, clarity, and inclusive documentation to every sprint.'
  },
  {
    author: 'Priya Patel',
    role: 'Director',
    company: 'Accessibility Lab',
    avatar: '/images/mockups/priya-patel.png',
    quote: 'Alex is one of the rare early-career developers who understands inclusive design as a first principle.'
  }
];
