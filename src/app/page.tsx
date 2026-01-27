'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      {isLoading && (
        <div className="loading-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="loading-screen__ring"></div>
            <span className="loading-screen__text">
              Loading
            </span>
          </div>
        </div>
      )}
      <Navigation />
      <Hero isLoading={isLoading} />
      <Testimonials />
      <Footer isLoading={isLoading} />
    </div>
  );
}
