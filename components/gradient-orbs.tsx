'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function GradientOrbs() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });
  const translateX = useTransform(springX, (value) => `${value}px`);
  const translateY = useTransform(springY, (value) => `${value}px`);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = ((event.clientX - innerWidth / 2) / innerWidth) * 40;
      const offsetY = ((event.clientY - innerHeight / 2) / innerHeight) * 40;
      x.set(offsetX);
      y.set(offsetY);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ translateX, translateY }}
        className="gradient-aurora absolute -top-32 right-0 h-96 w-96 rounded-full opacity-70 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ translateX: useTransform(translateX, (value) => `calc(${value} * -0.6)`), translateY: useTransform(translateY, (value) => `calc(${value} * -0.6)`) }}
        className="gradient-aurora absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-60 blur-3xl"
        aria-hidden
      />
    </div>
  );
}
