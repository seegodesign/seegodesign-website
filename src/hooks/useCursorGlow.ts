import { useCallback } from 'react';

export function useCursorGlow() {
  return useCallback((event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--glow-x', `${x}px`);
    event.currentTarget.style.setProperty('--glow-y', `${y}px`);
  }, []);
}
