import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Seego Design',
  description: 'Seego Design marketing site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
