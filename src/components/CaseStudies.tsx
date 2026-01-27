'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { CaseStudyCard } from '@/components/CaseStudyCard';

type CaseStudiesProps = {
  isLoading: boolean;
  caseStudies: Array<{
    title: string;
    client: string;
    image: string;
    problem: string;
    work: string;
    outcome: string;
    tech: Array<string>;
  }>;
};

export function CaseStudies({ isLoading, caseStudies }: CaseStudiesProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % caseStudies.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isPaused, caseStudies.length]);

  const goTo = (index: number) => {
    const safeIndex = (index + caseStudies.length) % caseStudies.length;
    setActiveIndex(safeIndex);
  };

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[color:var(--color-surface-strong)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a)' }}
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      <div
        className={`relative max-w-7xl mx-auto section-reveal ${
          shouldAnimate ? 'animate-section-rise' : ''
        }`}
      >
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-slate-100 mb-4 text-4xl font-semibold md:text-5xl lg:text-6xl">
            Case Studies
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            These case studies show how I approach frontend modernization —
            identifying the real pain points, implementing clean solutions, and delivering measurable improvements.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={study.title} className="w-full flex-shrink-0 px-1">
                  <CaseStudyCard {...study} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {caseStudies.map((study, index) => (
                <button
                  key={study.title}
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-[color:var(--brand-primary)]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Previous case study"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Next case study"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
