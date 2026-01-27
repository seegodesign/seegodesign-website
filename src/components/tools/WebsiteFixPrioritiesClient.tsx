'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import WebsiteFixPriorityEngine from '@/components/website-fix-priority-engine';
import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import { WEBSITE_FIX_PRIORITY_PRODUCT_PRICE } from '@/library/constants';
import { usePaidToolAccess } from '@/hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '@/hooks/usePaidToolCheckout';

export default function WebsiteFixPrioritiesClient() {
  const { hasAccess } = usePaidToolAccess('website-fix-priorities');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'website-fix-priorities',
    '/tools/website-fix-priorities?cancel=1'
  );

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        {!hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
              <div>
                <span className="eyebrow">Website Fix Priority Engine</span>
                <h1 className="headline headline--gradient">
                  Get instant clarity on the 3 fixes that move your site forward.
                </h1>
                <p className="subhead">
                  This guided tool turns a messy backlog into a clear, high-impact action plan. Answer 10
                  quick questions and walk away with the exact priorities Iwould recommend in a paid audit.
                </p>
                <div className="mt-8 space-y-5">
                  {[
                    'Impact scoring across conversion, clarity, performance, and trust.',
                    'A ranked list of fixes you can hand directly to your team.',
                    'A clear roadmap to book a deeper optimization sprint when you are ready.',
                  ].map((item) => (
                    <ul key={item} className="bullets">
                      <li>
                        {item}
                      </li>
                    </ul>
                  ))}
                </div>
                {!hasAccess && (
                  <div className="checkout-btn-row">
                    <button
                      type="button"
                      onClick={startCheckout}
                      disabled={isRedirecting}
                      className="button"
                    >
                      {isRedirecting ? 'Redirecting...' : `Unlock for $${WEBSITE_FIX_PRIORITY_PRODUCT_PRICE}`}
                    </button>
                    <p className="checkout-btn-row__note">
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
