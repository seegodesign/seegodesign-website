'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { trackEvent } from '@/lib/analytics';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_LINK } from '@/library/constants';


export function BookCall() {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = isInView;
  const hasTrackedWidgetView = useRef(false);

  useEffect(() => {
    if (isInView && !hasTrackedWidgetView.current) {
      hasTrackedWidgetView.current = true;
      trackEvent('view_item', {
        event_category: 'engagement',
        event_label: 'booking_widget_viewed',
      });
    }
  }, [isInView]);

  return (
    <section
      id="book-a-call"
      ref={ref}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className={`relative max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[color:var(--color-text-muted)]">Prefer to talk right now?</p>
          <a
            href={`tel:${BUSINESS_PHONE_LINK}`}
            className="inline-flex items-center justify-center gap-2 bg-[color:var(--brand-primary-dark)] text-white px-6 py-3 rounded-lg hover:bg-[color:var(--brand-primary)] transition-colors"
            aria-label={`Call ${BUSINESS_PHONE_DISPLAY}`}
          >
            Call now: {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/hUwGR3wfNU2MwJGG0W7q"
          style={{ width: '100%', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="hUwGR3wfNU2MwJGG0W7q_1776803420578"
        />
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
