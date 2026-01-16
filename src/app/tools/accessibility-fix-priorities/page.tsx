'use client';

import { useState } from 'react';
import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import AccessibilityFixPriorityEngine from '../../../components/accessibility-fix-priority-engine';
import { AnimatedCubesBackground } from '../../../components/AnimatedCubesBackground';

export default function AccessibilityFixPrioritiesPage() {
  const [showEngine, setShowEngine] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedCubesBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-24 flex-1 relative z-10">
        {!showEngine && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.35em] text-white/50">Accessibility Fix Priorities</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6">
                Identify the top accessibility fixes that reduce legal exposure fast.
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl">
                Answer 10 questions about your site and get the top 3 actions to move toward WCAG compliance.
                Use this to align your team, then we can handle the audit, remediation, and documentation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setShowEngine(true)}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Let's Begin
                </button>
              </div>
            </div>
          </section>
        )}

        {showEngine && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <AccessibilityFixPriorityEngine />
          </section>
        )}
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
