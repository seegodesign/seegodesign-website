'use client';

import React from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';

type FooterProps = {
  isLoading: boolean;
};

export function Footer({ isLoading }: FooterProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="bg-black/50 text-white py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className={`max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-sm">
            © {currentYear} Seego Design. All rights reserved.
          </div>
          <div className="text-white/80 text-sm">
            Designing seamless systems for growing businesses.
          </div>
        </div>
      </div>
    </footer>
  );
}
