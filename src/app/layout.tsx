import type { ReactNode } from 'react';
import { CursorGlowTracker } from '@/components/CursorGlowTracker';
import '../styles/base.scss';
import '../styles/components.scss';
import '../styles/utilities.scss';
import '../styles/light-theme.scss';

export const metadata = {
  title: 'Creative Solutions for Business | Seego Design',
  description: 'Seego Design marketing site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
      <CursorGlowTracker />
    </html>
  );
}
