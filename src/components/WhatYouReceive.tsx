'use client';

import { useState } from 'react';

type WhatYouReceiveItem = {
  title: string;
  description: string;
};

type WhatYouReceiveProps = {
  items: WhatYouReceiveItem[];
  heading?: string;
};

export function WhatYouReceive({ items, heading = 'What you receive' }: WhatYouReceiveProps) {
  const [activatedItems, setActivatedItems] = useState<Record<string, boolean>>({});

  return (
    <div className="hero-card">
      <h3 className="hero-card__title">{heading}</h3>
      <div className="grid gap-4">
        {items.map((item) => {
          const isActivated = !!activatedItems[item.title];

          return (
            <div
              key={item.title}
              onMouseEnter={() => {
                if (!isActivated) {
                  setActivatedItems((prev) => ({ ...prev, [item.title]: true }));
                }
              }}
              className="what-you-receive-item group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-4"
            >
              <div
                className={`pointer-events-none absolute inset-y-0 left-0 w-0 bg-[color:var(--brand-primary)]/20 transition-all duration-500 ease-out ${
                  isActivated ? 'w-full' : ''
                }`}
              />
              <div
                className={`pointer-events-none absolute inset-y-0 right-4 flex items-center opacity-0 translate-x-2 transition-all duration-300 ease-out ${
                  isActivated ? 'opacity-100 translate-x-0' : ''
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-slate-950">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path
                      d="M5 10.5l3.2 3.2L15 7.4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="what-you-receive-title relative text-sm font-semibold text-white">{item.title}</p>
              <p className="what-you-receive-desc relative text-xs text-slate-300 mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
