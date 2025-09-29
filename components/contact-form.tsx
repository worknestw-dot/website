'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectTypes = ['Web App', 'UI/UX', 'Workshop', 'Other'];
const budgets = ['<$1k', '$1k-$5k', '$5k-$10k', '$10k+'];
const timelines = ['1-2 weeks', '1 month', '3 months', 'Flexible'];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [startTime] = useState(() => Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const elapsed = Date.now() - startTime;
    if (elapsed < 2000 || (formData.get('topic') as string)?.length > 0) {
      setStatus('error');
      return;
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = (formData.get('message') as string) ?? '';

    if (!name || !email || !message || message.length < 10) {
      setStatus('error');
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/60 p-8 shadow-md backdrop-blur dark:bg-white/10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input type="text" name="topic" className="hidden" tabIndex={-1} aria-hidden="true" />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
              Name<span className="text-coral">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
              Email<span className="text-coral">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
            />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label htmlFor="projectType" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
            >
              <option value="">Select</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
            >
              <option value="">Select</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
            >
              <option value="">Select</option>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text-dark)] dark:text-white">
            Message<span className="text-coral">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            minLength={10}
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-white/30 bg-white/70 px-4 py-3 text-[var(--color-text-dark)] shadow-xs transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-white/10 dark:text-white"
          />
        </div>
        <label className="flex items-center gap-3 text-sm text-[var(--color-text-dark)]/70 dark:text-white/70">
          <input type="checkbox" name="consent" required className="h-4 w-4 rounded border-white/30 text-indigo-500 focus:ring-cyan-400" />
          I agree to keep my message respectful and understand Alex will reply within 48 hours.
        </label>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
        >
          Send Message
        </button>
        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500"
            >
              Message sent! Expect a friendly reply soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-full bg-coral/10 px-4 py-2 text-sm font-semibold text-coral"
            >
              Oops! Please check the fields and try again.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
