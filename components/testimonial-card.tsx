import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/data/testimonials';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-white/10 bg-white/40 p-6 shadow-sm backdrop-blur dark:bg-white/5"
    >
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={`Portrait of ${testimonial.author}`}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <figcaption className="text-base font-semibold text-[var(--color-text-dark)] dark:text-white">
            {testimonial.author}
          </figcaption>
          <p className="text-sm text-[var(--color-text-dark)]/60 dark:text-white/60">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-[var(--color-text-dark)]/80 dark:text-white/80">
        “{testimonial.quote}”
      </blockquote>
    </motion.figure>
  );
}
