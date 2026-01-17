import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Creative Solutions for Business | Seego Design',
  description: 'Seego Design marketing site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
