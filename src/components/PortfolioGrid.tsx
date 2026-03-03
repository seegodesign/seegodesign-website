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
      <div className={`portfolio-grid ${compact ? 'portfolio-grid--compact' : ''}`.trim()}>
        {items.map((item) => (
          <article
            key={item.title}
            className="portfolio-grid__card group"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="portfolio-grid__image-button"
              aria-label={`Open ${item.title} preview`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={compact ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
                quality={70}
                className="portfolio-grid__image"
              />
              <div className="portfolio-grid__image-overlay" />
            </button>
            <div className="portfolio-grid__content">
              <div className="portfolio-grid__text">
                <h3 className="portfolio-grid__title">{item.title}</h3>
                <p className="portfolio-grid__description">{item.description}</p>
              </div>
              <div className="portfolio-grid__tools">
                {item.tools.slice(0, TOOL_LIMIT).map((tool) => (
                  <span
                    key={tool}
                    className="portfolio-grid__tool"
                  >
                    {tool}
                  </span>
                ))}
                {item.tools.length > TOOL_LIMIT && (
                  <span className="portfolio-grid__tool portfolio-grid__tool--more">
                    +{item.tools.length - TOOL_LIMIT}
                  </span>
                )}
              </div>
              <div className="portfolio-grid__footer">
                <a
                  href={item.href}
                  className="portfolio-grid__link"
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
          <div className="portfolio-grid__lightbox">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close preview"
              className="portfolio-grid__lightbox-close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="portfolio-grid__lightbox-media">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="100vw"
                quality={80}
                className="portfolio-grid__lightbox-image"
              />
            </div>
            <div className="portfolio-grid__lightbox-meta">
              <h3 className="portfolio-grid__lightbox-title">{activeItem.title}</h3>
              <p className="portfolio-grid__lightbox-description">{activeItem.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
