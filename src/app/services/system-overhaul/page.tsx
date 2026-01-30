'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { Compass, Settings, Rocket } from 'lucide-react';
import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';

export default function SystemOverhaulPage() {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });

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
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section
          id="system-overhaul"
          ref={ref}
          className="relative isolate py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div
            className={`relative z-10 max-w-7xl mx-auto section-reveal ${
              isInView ? 'animate-section-rise' : ''
            }`}
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start mb-14 md:mb-20">
              <div>
                <span className="eyebrow">System Overhaul</span>
                <h2 className="text-slate-100 mt-4 mb-6 text-4xl md:text-5xl lg:text-6xl">
                  Clean up chaotic operations and rebuild the systems your team depends on.
                </h2>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl">
                  When tools sprawl, data lives in silos, and teams live in spreadsheets, everything slows down.
                  I stabilize core workflows, eliminate manual workarounds, and rebuild the foundation so
                  operations run cleanly and consistently.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <ContactButton text="Discuss a system overhaul" />
                </div>
              </div>
              <div className="hero-card">
                <p className="hero-card__eyebrow">Operational Clarity</p>
                <div className="mt-6 space-y-6 text-white">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="hero-card__stat">30-60</p>
                      <p className="hero-card__stat-words">days to stabilize core workflows.</p>
                    </div>
                    <div className="hero-card__stat-icon">
                      ✓
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="hero-card__stat">40%</p>
                      <p className="hero-card__stat-words">less manual work once systems are aligned.</p>
                    </div>
                    <div className="hero-card__stat-icon">
                      ↓
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="hero-card__stat">1</p>
                      <p className="hero-card__stat-words">source of truth for data and reporting.</p>
                    </div>
                    <div className="hero-card__stat-icon">
                      ◎
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm text-slate-300">
                    I map every system, flag risks, and build a plan that keeps teams aligned and accountable.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-14 md:mb-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="cursor-glow bg-slate-800/80 p-8 rounded-xl border border-[color:var(--brand-primary)]/20 hover:shadow-lg hover:shadow-black/40 transition-shadow"
                >
                  <div className="w-12 h-12 bg-[color:var(--brand-primary)] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-slate-100 mb-2 text-2xl">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.bestFor}</p>
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

            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start mb-14 md:mb-20">
              <div className="hero-card">
                <p className="eyebrow">Overhaul Workflow</p>
                <h3 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                  I diagnose, stabilize, then rebuild what matters most.
                </h3>
                <ol className="space-y-5 text-slate-200">
                  {[
                    'Deep audit of workflows, tools, data flows, and ownership gaps.',
                    'Stabilization plan that fixes critical breakpoints immediately.',
                    'System redesign with automation, integrations, and documentation.',
                    'Governance + monitoring so the new system stays healthy.',
                  ].map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-[color:var(--brand-primary)]/20 text-[color:var(--brand-primary)] text-sm font-semibold">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="eyebrow">Operational Targets</p>
                <h3 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                  I clean up the layers that create friction every day.
                </h3>
                <div className="grid gap-4">
                  {[
                    'CRM, intake, and sales workflows that stay synced.',
                    'Finance, billing, and reporting systems that reconcile cleanly.',
                    'Project management and handoff pipelines with clear ownership.',
                    'Customer support and fulfillment flows built for speed.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-4 text-slate-200"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-primary)]" />
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="card__tout">
                  <p className="text-sm text-slate-300">
                    Every fix is documented with owners, SLAs, and process maps so the organization can run it
                    long after we are gone.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <div>
                <p className="eyebrow">Deliverables</p>
                <h3 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                  Clarity for teams, confidence for leadership.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I leave you with clean documentation, automation maps, and the tooling stack you need to keep
                  operations stable. You get a plan that keeps your team aligned and your data clean.
                </p>
                <div className="mt-6 space-y-4 text-sm text-slate-200">
                  {[
                    'System map, data flow diagrams, and integration inventory.',
                    'Stabilization backlog with priority fixes and owners.',
                    'Automation playbook with QA and monitoring checkpoints.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <WhatYouReceive
                items={[
                  {
                    title: 'Systems audit report',
                    description: 'Findings, risks, and prioritization for every workflow.',
                  },
                  {
                    title: 'Stabilization plan',
                    description: '30-60 day action plan with owners and timelines.',
                  },
                  {
                    title: 'Automation roadmap',
                    description: 'Integrations, tooling, and automation sequences.',
                  },
                  {
                    title: 'Operating playbook',
                    description: 'Process documentation, SOPs, and governance.',
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
