'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { CaseStudyCard } from './CaseStudyCard';

const caseStudies = [
  {
    title: 'Custom Water Bottle Customizer',
    client: 'Owala',
    image: 'owala.jpg',
    problem: 'Customer needed a modern 3D product customizer to allow users to build and price custom water bottles. Their existing Flash-based tool was outdated, not mobile-friendly, and couldn\'t integrate with their ERP system. Sales reps spent hours manually quoting simple orders.',
    work: 'Developed a Vue.js customizer with real-time 3D previews and dynamic pricing. Made it fully responsive for mobile.',
    outcome: 'Client sold 32,625 custom bottles in 2025.',
    tech: ['Vue.js', 'Three.js', 'API Integration', 'Responsive Design'],
  },
  {
    title: 'Custom Goalie Gear Customizer',
    client: 'Bauer Skates',
    image: 'bauer.jpg',
    problem: 'Customer struggled with a clunky Flash-based product customizer from 2008. It only worked on desktop, crashed frequently, and couldn\'t integrate with their modern ERP system. Sales reps spent hours manually quoting simple orders.',
    work: 'Developed a Vue.js customizer with real-time 3D previews and pricing. Built integrations with their ERP and CRM systems for seamless quote generation. Made it fully responsive so field sales could demo products on tablets.',
    outcome: 'Quote generation time dropped from hours to minutes. Mobile orders increased 200% in the first quarter. The customizer reduced pricing errors by 90%, and customer satisfaction scores jumped significantly.',
    tech: ['Vue.js', 'Three.js', 'API Integration', 'Responsive Design'],
  },
  {
    title: 'Find a Trade Ally Contractor Tool',
    client: 'EnergyTrust of Oregon',
    image: 'eto-fac.jpg',
    problem: 'Their existing contractor search tool was outdated, slow, and hard to use. It relied on a static database that was difficult to update, leading to inaccurate listings. Users often complained about poor search functionality and long load times.',
    work: 'Built a new Vue.js application with a dynamic backend that allowed for easy updates to contractor listings. Implemented advanced search and filtering options, along with a responsive design for mobile users. Optimized performance to ensure fast load times.',
    outcome: 'User engagement increased by 150%, with average session duration rising from 2 to 5 minutes. The number of contractor searches grew by 80%, and user satisfaction surveys showed a significant improvement in usability ratings.',
    tech: ['Vue', 'Javascript', 'REST API'],
  },
  {
    title: 'HAEMR Website',
    client: 'Harvard Affiliated Emergency Residency Program',
    image: 'haemr.jpg',
    problem: 'The existing website was built on an outdated CMS that made content updates cumbersome. The design was not mobile-friendly, leading to a poor user experience on smartphones and tablets. Additionally, the site had slow load times and accessibility issues.',
    work: 'Redesigned the website using Wordpress for easy content management. Implemented a responsive design to ensure optimal viewing on all devices. Focused on performance optimization and accessibility compliance throughout the development process.',
    outcome: 'The new website saw a 60% increase in mobile traffic and a 40% reduction in bounce rates. Content updates became significantly easier for the staff, leading to more frequent updates. Accessibility audits showed full compliance with WCAG 2.1 standards.',
    tech: ['WordPress', 'Performance Optimization'],
  },

];

type CaseStudiesProps = {
  isLoading: boolean;
};

export function CaseStudies({ isLoading }: CaseStudiesProps) {
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
  }, [isPaused]);

  const goTo = (index: number) => {
    const safeIndex = (index + caseStudies.length) % caseStudies.length;
    setActiveIndex(safeIndex);
  };

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800"
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
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            Case Studies
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            These case studies show how we approach frontend modernization —
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
