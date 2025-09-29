'use client';

import { useVariant } from './site-provider';

export function VariantToggle() {
  const { variant, setVariant } = useVariant();

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 text-white">
      <button
        type="button"
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${variant === 'student' ? 'bg-white/80 text-midnight' : 'text-white/80'}`}
        onClick={() => setVariant('student')}
        aria-pressed={variant === 'student'}
      >
        Student
      </button>
      <button
        type="button"
        className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${variant === 'pro' ? 'bg-white/80 text-midnight' : 'text-white/80'}`}
        onClick={() => setVariant('pro')}
        aria-pressed={variant === 'pro'}
      >
        Pro
      </button>
    </div>
  );
}
