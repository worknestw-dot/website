import { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

const galleryItems = [
  {
    title: 'UI Kit for Study Sprints',
    category: 'UI/UX',
    image: '/images/design/ui-kit-study.png',
    alt: 'UI kit components with colorful cards and buttons'
  },
  {
    title: 'Motion Prototype — Campus Compass',
    category: 'Interaction',
    image: '/images/design/campus-motion.png',
    alt: 'Storyboard showing motion frames for navigation app'
  },
  {
    title: 'Brand Explorations',
    category: 'Brand',
    image: '/images/design/brand-explorations.png',
    alt: 'Colorful branding exploration with squircle cards'
  },
  {
    title: 'Poster Series — Hackathon 2025',
    category: 'Poster',
    image: '/images/design/hackathon-poster.png',
    alt: 'Poster design with gradients and geometric shapes'
  }
];

export const metadata: Metadata = buildMetadata({
  title: 'Design Work · Alex Rivera',
  description: 'A playful gallery of UI/UX, illustration, and branding work by Alex Rivera with accessible lightbox-ready assets.',
  pathname: '/design'
});

export default function DesignPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/design', label: 'Design Work', isCurrent: true }
        ]}
      />
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Design Work</p>
          <h1 className="mt-3 text-4xl font-bold text-[var(--color-text-dark)] dark:text-white">Playful visuals & interaction studies.</h1>
        </div>
        <p className="max-w-xl text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          From UI kits to editorial posters, this gallery highlights experiments in color, motion, and accessibility.
        </p>
      </header>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {galleryItems.map((item) => (
          <figure key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/50 shadow-sm backdrop-blur transition hover:shadow-lg dark:bg-white/5">
            <Image
              src={item.image}
              alt={item.alt}
              width={800}
              height={600}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)] dark:text-white">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">{item.category}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-indigo-500">View</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
