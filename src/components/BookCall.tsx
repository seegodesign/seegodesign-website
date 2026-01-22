'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

type BookCallProps = {
  isLoading: boolean;
};

export function BookCall({ isLoading }: BookCallProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;
  const widgetHostRef = useRef<HTMLDivElement | null>(null);
  const [isWidgetLoading, setIsWidgetLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const scriptId = 'honeybook-widget-loader';

    (window as typeof window & { _HB_?: { pid?: string } })._HB_ = {
      pid: '693c73881592dd002ef0c31b',
    };

    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src =
      'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const host = widgetHostRef.current;
    if (!host) return;

    if (host.childElementCount > 0) {
      const initialReveal = window.setTimeout(() => {
        setIsWidgetLoading(false);
      }, 1000);
      return () => {
        window.clearTimeout(initialReveal);
      };
    }

    let revealTimeout: number | null = null;
    const observer = new MutationObserver(() => {
      if (host.childElementCount > 0) {
        revealTimeout = window.setTimeout(() => {
          setIsWidgetLoading(false);
        }, 1000);
        observer.disconnect();
      }
    });

    observer.observe(host, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      setIsWidgetLoading(false);
      observer.disconnect();
    }, 5000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      if (revealTimeout) {
        window.clearTimeout(revealTimeout);
      }
    };
  }, []);

  return (
    <section
      id="book-a-call"
      ref={ref}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 bg-[color:#121928]"
    >
      <div className={`relative max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div>
          <div className="relative min-h-[420px]">
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-200 transition-opacity duration-500 ${
                isWidgetLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Loading scheduler</p>
            </div>
            <div ref={widgetHostRef} className="hb-p-693c73881592dd002ef0c31b-1" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" className="hidden" src="https://www.honeybook.com/p.png?pid=693c73881592dd002ef0c31b" alt="" />
        </div>
      </div>
    </section>
  );
}
