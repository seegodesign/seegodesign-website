'use client';

import { useSyncExternalStore } from 'react';

type ThemeMode = 'dark' | 'light';

function readTheme(): ThemeMode {
  const attr = document.documentElement.dataset.theme;
  return attr === 'dark' || attr === 'light' ? attr : 'light';
}

function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

export function useTheme(): ThemeMode {
  return useSyncExternalStore(subscribe, readTheme, () => 'light');
}

/** Returns `darkValue` when in dark mode, `lightValue` otherwise. */
export function useThemeValue<T>(darkValue: T, lightValue: T): T {
  const theme = useTheme();
  return theme === 'dark' ? darkValue : lightValue;
}
