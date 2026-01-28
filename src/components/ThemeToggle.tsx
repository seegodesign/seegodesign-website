'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemeMode = 'dark' | 'light';

const getCurrentTheme = (): ThemeMode => {
  if (typeof document === 'undefined') return 'light';
  const attr = document.documentElement.dataset.theme;
  return attr === 'dark' || attr === 'light' ? attr : 'light';
};

export function ThemeToggle() {
  const toggleTheme = () => {
    const current = getCurrentTheme();
    const nextTheme: ThemeMode = current === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', nextTheme);
    }
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] hover:border-[color:var(--brand-primary)]/60 hover:text-[color:var(--brand-primary)] transition-colors"
    >
      <span className="theme-toggle__icon theme-toggle__icon--dark" aria-hidden="true">
        <Sun size={18} />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--light" aria-hidden="true">
        <Moon size={18} />
      </span>
    </button>
  );
}
