'use client';

import { useState } from 'react';
import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import WebsiteFixPriorityEngine from '../../../components/website-fix-priority-engine';
import { AnimatedNetworkBackground } from '../../../components/AnimatedNetworkBackground';

export default function WebsiteFixPrioritiesPage() {
  const [showEngine, setShowEngine] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-24 flex-1 relative z-10">
        {!showEngine && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <>
                <span className="text-sm uppercase tracking-[0.35em] text-white/50">Website Optimization</span>
                <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6">
                  Find the highest-impact fixes before you redesign
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl">
                  Use the Website Fix Priority Engine to identify the 3 changes that will move your site
                  forward fastest. This is the same framework we use to guide optimization sprints and
                  One-Day Fix engagements.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowEngine(true);
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Let&apos;s go
                </button>
              </>
            </div>
          </section>
        )}
        {showEngine && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <WebsiteFixPriorityEngine />
          </section>
        )}
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
