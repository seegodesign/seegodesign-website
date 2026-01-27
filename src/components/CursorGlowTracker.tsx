'use client';

import { useEffect } from 'react';

export function CursorGlowTracker() {
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const glowTarget = target.closest('.cursor-glow') as HTMLElement | null;
      if (!glowTarget) return;
      const rect = glowTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      glowTarget.style.setProperty('--glow-x', `${x}px`);
      glowTarget.style.setProperty('--glow-y', `${y}px`);
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return null;
}
