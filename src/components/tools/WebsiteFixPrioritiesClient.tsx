'use client';

import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import WebsiteFixPriorityEngine from '../../components/website-fix-priority-engine';
import { AnimatedNetworkBackground } from '../../components/AnimatedNetworkBackground';
import { WhatYouReceive } from '../../components/WhatYouReceive';
import { WEBSITE_FIX_PRIORITY_PRODUCT_PRICE } from '../../library/constants';
import { usePaidToolAccess } from '../../hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '../../hooks/usePaidToolCheckout';

export default function WebsiteFixPrioritiesClient() {
  const { hasAccess } = usePaidToolAccess('website-fix-priorities');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'website-fix-priorities',
    '/tools/website-fix-priorities?cancel=1'
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
                <span className="text-xs uppercase tracking-[0.35em] text-white/55">Website Fix Priority Engine</span>
                <h1 className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-200 mt-4 mb-6">
                  Get instant clarity on the 3 fixes that move your site forward.
                </h1>
                <p className="text-lg text-slate-200 max-w-2xl">
                  This guided tool turns a messy backlog into a clear, high-impact action plan. Answer 10
                  quick questions and walk away with the exact priorities we would recommend in a paid audit.
                </p>
                <div className="mt-8 space-y-5 text-sm text-slate-200">
                  {[
                    'Impact scoring across conversion, clarity, performance, and trust.',
                    'A ranked list of fixes you can hand directly to your team.',
                    'A clear roadmap to book a deeper optimization sprint when you are ready.',
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
                      {isRedirecting ? 'Redirecting...' : `Unlock for $${WEBSITE_FIX_PRIORITY_PRODUCT_PRICE}`}
                    </button>
                    <p className="text-xs text-white/60 max-w-xs">
                      Secure checkout via Stripe. You will receive a 24-hour access link instantly.
                    </p>
                  </div>
                )}
              </div>
              <WhatYouReceive
                heading={`What you get for only $${WEBSITE_FIX_PRIORITY_PRODUCT_PRICE}`}
                items={[
                  { title: '10-question diagnostic', description: 'Quickly assess the most critical website issues.' },
                  { title: 'Top 3 fix list', description: 'Actionable priorities ranked by impact.' },
                  { title: 'Implementation guidance', description: 'Clear next steps and recommended scope.' },
                ]}
              />
            </div>
          </section>
        )}

        {hasAccess && (
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
