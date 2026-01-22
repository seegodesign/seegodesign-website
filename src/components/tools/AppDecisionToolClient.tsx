'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import AppDecisionToolEngine from '@/components/app-decision-tool-engine';
import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import { APP_DECISION_TOOL_PRODUCT_PRICE } from '@/library/constants';
import { usePaidToolAccess } from '@/hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '@/hooks/usePaidToolCheckout';

export default function AppDecisionToolClient() {
  const { hasAccess } = usePaidToolAccess('app-decision-tool');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'app-decision-tool',
    '/tools/app-decision-tool?cancel=1'
  );

  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        {!hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/55">App Decision Tool</span>
                <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-200 mt-4 mb-6">
                  Know if your app idea is ready before you build.
                </h1>
                <p className="text-lg text-slate-200 max-w-2xl">
                  This paid diagnostic helps you validate scope, complexity, and risk. Answer 14 questions
                  and walk away with a readiness score, clear next step, and a one-page PDF summary.
                </p>
                <div className="mt-8 space-y-5 text-sm text-slate-200">
                  {[
                    'Readiness score calibrated for early-stage app builds.',
                    'Complexity tier and risk flags you can act on immediately.',
                    'A personalized action plan you can share with partners or investors.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                {!hasAccess && (
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={startCheckout}
                      disabled={isRedirecting}
                      className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
                    >
                      {isRedirecting ? 'Redirecting...' : `Unlock for $${APP_DECISION_TOOL_PRODUCT_PRICE}`}
                    </button>
                    <p className="text-xs text-white/60 max-w-xs">
                      Secure checkout via Stripe. You will receive a 24-hour access link instantly.
                    </p>
                  </div>
                )}
              </div>
              <WhatYouReceive
                heading={`What you get for only $${APP_DECISION_TOOL_PRODUCT_PRICE}`}
                items={[
                  { title: '14-question diagnostic', description: 'Clarify scope, users, and platform risk.' },
                  { title: 'Readiness score + insights', description: 'Understand what is blocking launch.' },
                  { title: 'PDF summary', description: 'Use it to align partners and make decisions fast.' },
                ]}
              />
            </div>
          </section>
        )}

        {hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <AppDecisionToolEngine />
          </section>
        )}
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
