'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import AppDecisionToolEngine from '@/components/app-decision-tool-engine';
import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import { APP_DECISION_TOOL_PRODUCT_PRICE } from '@/library/constants';
import { useEffect, useRef, useState } from 'react';
import { usePaidToolAccess } from '@/hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '@/hooks/usePaidToolCheckout';
import { trackEvent } from '@/lib/analytics';

const freeAccessKey = 'app-decision-tool-free-access';
const freeAccessDurationMs = 24 * 60 * 60 * 1000;

export default function AppDecisionToolClient() {
  const { hasAccess } = usePaidToolAccess('app-decision-tool');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'app-decision-tool',
    '/tools/app-decision-tool?cancel=1'
  );
  const [hasFreeAccess, setHasFreeAccess] = useState(false);
  const hasTrackedAccess = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(freeAccessKey);
    if (!stored) return;
    const expiresAt = Number(stored);
    if (Number.isNaN(expiresAt)) {
      window.localStorage.removeItem(freeAccessKey);
      return;
    }
    if (Date.now() < expiresAt) {
      queueMicrotask(() => {
        setHasFreeAccess(true);
      });
    } else {
      window.localStorage.removeItem(freeAccessKey);
    }
  }, []);

  const handleFreeAccess = () => {
    if (typeof window === 'undefined') return;
    trackEvent('click', {
      event_category: 'engagement',
      event_label: 'app_decision_tool_free_access_claimed',
    });
    const expiresAt = Date.now() + freeAccessDurationMs;
    window.localStorage.setItem(freeAccessKey, String(expiresAt));
    setHasFreeAccess(true);
  };

  const hasToolAccess = hasAccess || hasFreeAccess;

  useEffect(() => {
    if (hasToolAccess && !hasTrackedAccess.current) {
      hasTrackedAccess.current = true;
      trackEvent('view_item', {
        event_category: 'tool_usage',
        event_label: 'app_decision_tool_accessed',
      });
    }
  }, [hasToolAccess]);

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
        {!hasToolAccess && (
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
                {!hasToolAccess && (
                  <div className="checkout-btn-row">
                    <button
                      type="button"
                      onClick={handleCheckout}
                      disabled={isRedirecting}
                      className="button"
                    >
                      <s>{isRedirecting ? 'Redirecting...' : `Unlock for $${APP_DECISION_TOOL_PRODUCT_PRICE}`}</s>
                    </button>
                    <button
                      type="button"
                      onClick={handleFreeAccess}
                      className="button button--secondary"
                    >
                      Free for 24 hours!
                    </button>
                    <p className="checkout-btn-row__note">
                      Secure checkout via Stripe. You will receive a 24-hour access link instantly.
                    </p>
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

        {hasToolAccess && (
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
