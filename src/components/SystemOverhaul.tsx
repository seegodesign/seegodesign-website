'use client';

import React from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { Compass, Settings, Rocket } from 'lucide-react';
import { AnimatedNetworkBackground } from './AnimatedNetworkBackground';

type SystemOverhaulProps = {
  isLoading: boolean;
};

export function SystemOverhaul({ isLoading }: SystemOverhaulProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;

  const handleGlow = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--glow-x', `${x}px`);
    event.currentTarget.style.setProperty('--glow-y', `${y}px`);
  };

  const services = [
    {
      icon: Compass,
      title: 'Stabilize',
      bestFor: 'Best for businesses that feel brittle or chaotic.',
      focus: [
        'Audit existing systems and workflows',
        'Centralize scattered data (CRM, forms, CMS, spreadsheets)',
        'Fix broken or fragile integrations',
        'Remove duplication and manual work',
        'Improve reliability and performance',
      ],
      outcome: 'Things finally make sense — and stop breaking.',
    },
    {
      icon: Settings,
      title: 'Optimize',
      bestFor: 'Best for businesses that function, but inefficiently.',
      focus: [
        'Workflow automation',
        'System integrations',
        'Performance, UX, and usability improvements',
        'Internal tools, dashboards, and reporting',
        'Process refactoring for scale',
      ],
      outcome: 'We run leaner, faster, and with fewer headaches.',
    },
    {
      icon: Rocket,
      title: 'Scale',
      bestFor: 'Best for companies preparing to grow, pivot, or modernize.',
      focus: [
        'End-to-end systems redesign',
        'Custom UX and web platforms',
        'Data architecture + automation strategy',
        'Tool consolidation or migration',
        'Long-term scalability planning',
      ],
      outcome: 'Our systems finally support where we are going.',
    },
  ];

  return (
    <section
      id="system-overhaul"
      ref={ref}
      className="relative isolate py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <AnimatedNetworkBackground />
      {/* <div className="absolute inset-0 bg-black/50 pointer-events-none" /> */}
      <div
        className={`relative z-10 max-w-7xl mx-auto section-reveal ${
          shouldAnimate ? 'animate-section-rise' : ''
        }`}
      >
        <div className="max-w-5xl mb-12 md:mb-16">
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            System Overhaul
          </h2>
          <h3 className="text-slate-300 text-lg md:text-xl mb-6">
            We fix deep-seated problems, modernize, enhance performance, improve security, and increase scalability.
          </h3>
          {/* <p className="text-slate-300 mb-4">
            Is your business running on systems that have been duct-taped together over the years? Struggling with unreliable tools, manual workarounds, or data scattered across platforms? These issues slow you down, create risk, and make it hard to grow. A system overhaul solves these pain points by bringing clarity, stability, and efficiency to your operations.
          </p>
          <p className="text-slate-300 mb-4">
            Most projects start with Stabilize. From there, we optimize or redesign based on what
            your business actually needs.
          </p> */}
        </div>

        {/* <h3 className="text-slate-300 text-lg md:text-xl mb-6">Recommended 3-Tier Service Structure</h3> */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseMove={handleGlow}
              className="cursor-glow bg-slate-800 p-8 rounded-xl border border-[color:var(--brand-primary)]/20 hover:shadow-lg hover:shadow-black/40 transition-shadow"
            >
              <div className="w-12 h-12 bg-[color:var(--brand-primary)] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-slate-100 mb-2 text-2xl">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {service.bestFor}
              </p>
              <div className="mb-4">
                <p className="text-slate-200 font-semibold mb-2">Focus</p>
                <ul className="space-y-2 text-slate-300">
                  {service.focus.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]"></span>
                      <span className="flex-1 min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200">
                <span className="text-slate-400 text-xs uppercase tracking-[0.1em]">Your outcome</span>
                <p className="mt-2">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
