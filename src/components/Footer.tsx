'use client';

import React from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = isInView;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="footer"
    >
      <div className={`max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[color:var(--color-text-muted)] text-sm">
            © {currentYear} <Link href="/" className="hover:underline">Seego Design</Link>. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:cameron@seegodesign.com"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[color:var(--color-surface-muted)] text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/seego-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[color:var(--color-surface-muted)] text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/seegodesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[color:var(--color-surface-muted)] text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
