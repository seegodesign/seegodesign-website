'use client';

import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <Navigation />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
