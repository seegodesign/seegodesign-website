'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/Modal';
import type { PortfolioItem } from '@/lib/portfolio';

const TOOL_LIMIT = 4;

type PortfolioGridProps = {
  items: PortfolioItem[];
  compact?: boolean;
};

export function PortfolioGrid({ items, compact = false }: PortfolioGridProps) {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div
        className={`grid gap-6 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}
      >
        {items.map((item) => (
          <article
            key={item.title}
            className="group h-full overflow-hidden border border-white/10 bg-slate-900/70 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="relative aspect-[4/3] w-full overflow-hidden text-left"
              aria-label={`Open ${item.title} preview`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={compact ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
                quality={70}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
            </button>
            <div className="flex h-full flex-col gap-4 px-5 py-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tools.slice(0, TOOL_LIMIT).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
                {item.tools.length > TOOL_LIMIT && (
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                    +{item.tools.length - TOOL_LIMIT}
                  </span>
                )}
              </div>
              <div className="mt-auto">
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)] transition-colors hover:text-white"
              >
                View project
                <span aria-hidden="true">→</span>
              </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal
        isOpen={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        ariaLabel={activeItem ? `${activeItem.title} preview` : undefined}
        className="modal__panel--wide"
        showCloseButton={false}
      >
        {activeItem && (
          <div className="relative overflow-hidden border border-white/10 bg-slate-950/90 shadow-2xl shadow-black/50">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-30 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white/80 backdrop-blur transition-colors hover:border-white/50 hover:text-white"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="relative z-0 w-full h-[70vh]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="100vw"
                quality={80}
                className="object-contain"
              />
            </div>
            <div className="px-6 py-5 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white">{activeItem.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{activeItem.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
