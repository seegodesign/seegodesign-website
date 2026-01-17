'use client';

import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import AccessibilityFixPriorityEngine from '../../../components/accessibility-fix-priority-engine';
import { AnimatedCubesBackground } from '../../../components/AnimatedCubesBackground';
import { WhatYouReceive } from '../../../components/WhatYouReceive';
import { ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE } from '../../../library/constants';
import { usePaidToolAccess } from '../../../hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '../../../hooks/usePaidToolCheckout';

export default function AccessibilityFixPrioritiesPage() {
  const { hasAccess } = usePaidToolAccess('accessibility-fix-priorities');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'accessibility-fix-priorities',
    '/tools/accessibility-fix-priorities?cancel=1'
  );

  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedCubesBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-6 md:pt-24 flex-1 relative z-10">
        {!hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/55">Accessibility Fix Priorities</span>
                <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-200 mt-4 mb-6">
                  Identify the top accessibility fixes that reduce legal exposure fast.
                </h1>
                <p className="text-lg text-slate-200 max-w-2xl">
                  Answer 10 questions about your site and get the top 3 actions to move toward WCAG
                  compliance. Use this to align your team, then we can handle the audit, remediation, and
                  documentation.
                </p>
                <div className="mt-8 space-y-5 text-sm text-slate-200">
                  {[
                    'Prioritized fixes based on WCAG, ADA, and Section 508 risk.',
                    'A clear roadmap for remediation sprints and documentation.',
                    'Actionable guidance you can send directly to engineering.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={startCheckout}
                    disabled={isRedirecting}
                    className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
                  >
                    {isRedirecting ? 'Redirecting...' : `Unlock for $${ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE}`}
                  </button>
                  <p className="text-xs text-white/60 max-w-xs">
                    Secure checkout via Stripe. You will receive a 24-hour access link instantly.
                  </p>
                </div>
              </div>
              <WhatYouReceive
                heading={`What you get for only $${ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE}`}
                items={[
                  { title: '10-question diagnostic', description: 'Capture your compliance risk fast.' },
                  { title: 'Top 3 fix list', description: 'Prioritized actions mapped to WCAG impact.' },
                  { title: 'Remediation guidance', description: 'Clear next steps and audit-ready notes.' },
                ]}
              />
            </div>
          </section>
        )}

        {hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-20">
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
