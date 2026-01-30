'use client';

import { useEffect, useRef, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import AccessibilityFixPriorityEngine from '@/components/accessibility-fix-priority-engine';
import { AnimatedCubesBackground } from '@/components/AnimatedCubesBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import { InviteCodeModal } from '@/components/InviteCodeModal';
import { ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE } from '@/library/constants';
import { usePaidToolAccess } from '@/hooks/usePaidToolAccess';
import { usePaidToolCheckout } from '@/hooks/usePaidToolCheckout';
import { trackEvent } from '@/lib/analytics';

export default function AccessibilityFixPrioritiesClient() {
  const { hasAccess } = usePaidToolAccess('accessibility-fix-priorities');
  const { isRedirecting, startCheckout } = usePaidToolCheckout(
    'accessibility-fix-priorities',
    '/tools/accessibility-fix-priorities?cancel=1'
  );
  const hasTrackedAccess = useRef(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  useEffect(() => {
    if (hasAccess && !hasTrackedAccess.current) {
      hasTrackedAccess.current = true;
      trackEvent('view_item', {
        event_category: 'tool_usage',
        event_label: 'accessibility_tool_accessed',
      });
    }
  }, [hasAccess]);

  const handleCheckout = () => {
    trackEvent('begin_checkout', {
      event_category: 'conversion',
      event_label: 'accessibility_tool_checkout_started',
      value: ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
    });
    startCheckout();
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate">
      <AnimatedCubesBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-6 md:pt-24 flex-1 relative z-10">
        {!hasAccess && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
              <div>
                <span className="eyebrow">Accessibility Fix Priorities</span>
                <h1 className="headline headline--gradient">
                  Identify the top accessibility fixes that reduce legal exposure fast.
                </h1>
                <p className="subhead">
                  Answer 10 questions about your site and get the top 3 actions to move toward WCAG
                  compliance. Use this to align your team, then we can handle the audit, remediation, and
                  documentation.
                </p>
                <div className="mt-8 space-y-5">
                  {[
                    'Prioritized fixes based on WCAG, ADA, and Section 508 risk.',
                    'A clear roadmap for remediation sprints and documentation.',
                    'Actionable guidance you can send directly to engineering.',
                  ].map((item) => (
                    <ul key={item} className="bullets">
                      <li>
                        {item}
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="checkout-btn-row">
                  <button
                    type="button"
                    onClick={handleCheckout}
                    disabled={isRedirecting}
                    className="button"
                  >
                    {isRedirecting ? 'Redirecting...' : `Unlock for $${ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE}`}
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
              </div>
              <WhatYouReceive
                heading="What's included"
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
        <Footer />
      </div>
      <InviteCodeModal
        tool="accessibility-fix-priorities"
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
      />
    </div>
  );
}
