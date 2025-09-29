'use client';

import { ThemeProvider } from 'next-themes';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Variant = 'student' | 'pro';

type VariantContextValue = {
  variant: Variant;
  setVariant: (variant: Variant) => void;
};

const VariantContext = createContext<VariantContextValue | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const [variant, setVariantState] = useState<Variant>('student');

  useEffect(() => {
    const queryVariant = params?.get('theme');
    if (queryVariant === 'pro' || queryVariant === 'student') {
      setVariantState(queryVariant);
    }
  }, [params, pathname]);

  const setVariant = useCallback((value: Variant) => {
    setVariantState(value);
  }, []);

  const value = useMemo(() => ({ variant, setVariant }), [variant, setVariant]);

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <VariantContext.Provider value={value}>
        <div data-variant={variant} className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-dark)]">
          {children}
        </div>
      </VariantContext.Provider>
    </ThemeProvider>
  );
}

export function useVariant() {
  const context = useContext(VariantContext);
  if (!context) {
    throw new Error('useVariant must be used within SiteProvider');
  }
  return context;
}
