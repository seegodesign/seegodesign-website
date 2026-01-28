'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import AppDecisionToolEngine from '@/components/app-decision-tool-engine';
import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import { InviteCodeModal } from '@/components/InviteCodeModal';
import { APP_DECISION_TOOL_PRODUCT_PRICE } from '@/library/constants';
import { useEffect, useRef, useState } from 'react';
import { usePaidToolAccess } from '@/hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '@/hooks/usePaidToolCheckout';
import { trackEvent } from '@/lib/analytics';

export default function AppDecisionToolClient() {
  const { hasAccess } = usePaidToolAccess('app-decision-tool');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'app-decision-tool',
    '/tools/app-decision-tool?cancel=1'
  );
  const hasTrackedAccess = useRef(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  useEffect(() => {
    if (hasAccess && !hasTrackedAccess.current) {
      hasTrackedAccess.current = true;
      trackEvent('view_item', {
        event_category: 'tool_usage',
        event_label: 'app_decision_tool_accessed',
      });
    }
  }, [hasAccess]);

  const handleCheckout = () => {
    trackEvent('begin_checkout', {
      event_category: 'conversion',
      event_label: 'app_decision_tool_checkout_started',
      value: APP_DECISION_TOOL_PRODUCT_PRICE,
    });
    startCheckout();
  };

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
                <span className="eyebrow">App Decision Tool</span>
                <h1 className="headline headline--gradient">
                  Know if your app idea is ready before you build.
                </h1>
                <p className="subhead">
                  This paid diagnostic helps you validate scope, complexity, and risk. Answer 14 questions
                  and walk away with a readiness score, clear next step, and a one-page PDF summary.
                </p>
                <div className="mt-8 space-y-5">
                  {[
                    'Readiness score calibrated for early-stage app builds.',
                    'Complexity tier and risk flags you can act on immediately.',
                    'A personalized action plan you can share with partners or investors.',
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
                      onClick={handleCheckout}
                      disabled={isRedirecting}
                      className="button"
                    >
                      {isRedirecting ? 'Redirecting...' : `Unlock for $${APP_DECISION_TOOL_PRODUCT_PRICE}`}
                    </button>
                    <p className="checkout-btn-row__note">
                      Secure checkout via Stripe. You will receive a 24-hour access link instantly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsInviteOpen(true)}
                      className="checkout-btn-row__invite-code"
                    >
                      Enter invite code
                    </button>
                  </div>
                )}
              </div>
              <WhatYouReceive
                heading="What's included"
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
      <InviteCodeModal
        tool="app-decision-tool"
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </div>
  );
}
