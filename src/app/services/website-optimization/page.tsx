'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import WebsiteFixPriorityEngine from '../../../components/website-fix-priority-engine';
import { AnimatedNetworkBackground } from '../../../components/AnimatedNetworkBackground';
import { WhatYouReceive } from '../../../components/WhatYouReceive';
import ContactButton from '../../../components/ContactButton';

export default function WebsiteOptimizationPage() {
  const [showEngine, setShowEngine] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-24 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/55">Website Optimization</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6 animate-hero-headline">
                Fix the blockers that hold your site back, then unlock the growth.
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl animate-hero-subhead">
                We diagnose the bottlenecks that hurt conversion, speed, and trust. Then we prioritize fixes
                that move the needle in weeks, not quarters. Every sprint is built around impact, not busywork.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Schedule a consultation" />
              </div>
            </div>
            <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Optimization Impact</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">2-4</p>
                    <p className="text-sm text-slate-300">weeks to ship the highest-impact fixes.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[color:var(--brand-primary)]/20 flex items-center justify-center text-[color:var(--brand-primary)] text-xl font-semibold">
                    ⚡
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">3x</p>
                    <p className="text-sm text-slate-300">faster prioritization with our scoring model.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ↑
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">100%</p>
                    <p className="text-sm text-slate-300">handoff-ready roadmap with owners and metrics.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ✓
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-300">
                  We focus on conversion blockers, trust signals, and performance issues that show up in the
                  data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {showEngine && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <WebsiteFixPriorityEngine />
          </section>
        )}

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[color:var(--brand-primary)]/20 via-slate-900/60 to-slate-900/20 px-8 py-12 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">Website Fix Priorities</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Try our free tool to identify your top 3 fixes.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  Use the Website Fix Priorities tool to surface the top 3 changes you should make right
                  now. It is a fast way to prioritize fixes before you invest in a full redesign.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tools/website-fix-priorities"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Use the tool
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-white/10 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Optimization Workflow</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                We prioritize with data, then ship the fixes that matter.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Audit performance, analytics, and conversion flow.',
                  'Score opportunities by impact, effort, and urgency.',
                  'Ship rapid fixes with before/after benchmarks.',
                  'Retest, document, and build the next sprint.',
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="h-8 w-8 flex items-center justify-center rounded-full bg-[color:var(--brand-primary)]/20 text-[color:var(--brand-primary)] text-sm font-semibold">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Signals We Track</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                Clear data points that prove what to fix next.
              </h2>
              <div className="grid gap-4">
                {[
                  'Scroll depth, click heatmaps, and friction drop-offs.',
                  'Core Web Vitals, speed scores, and SEO health.',
                  'Conversion rates, session replays, and funnel exits.',
                  'Brand trust signals, review mentions, and clarity gaps.',
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
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Deliverables</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                A prioritized roadmap your team can execute immediately.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We document the highest-impact fixes, the data behind them, and the exact changes needed to
                move conversion and performance.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Optimization audit with priority scoring and impact estimates.',
                  'Fix backlog with owner assignments and timelines.',
                  'Before/after benchmarks and testing results.',
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
                  title: 'Fix priority scorecard',
                  description: 'Ranked list of opportunities with impact and effort scores.',
                },
                {
                  title: 'UX friction report',
                  description: 'Annotated findings, screenshots, and behavior insights.',
                },
                {
                  title: 'Performance plan',
                  description: 'Speed fixes, technical debt cleanup, and monitoring plan.',
                },
                {
                  title: 'Iteration roadmap',
                  description: '90-day optimization path with measurable targets.',
                },
              ]}
            />
          </div>
        </section>

      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
