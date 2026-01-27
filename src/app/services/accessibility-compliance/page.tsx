'use client';

import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';
import Link from 'next/link';

export default function AccessibilityCompliancePage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.25),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.35),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <span className="eyebrow">Accessibility Compliance</span>
              <h1 className="headline animate-hero-headline">
                Audit, fix, and document accessibility issues <span>before they become legal exposure.</span>
              </h1>
              <p className="subhead mx-auto animate-hero-subhead">
                I help teams ship WCAG-aligned experiences, prioritize high-risk issues, and build a paper
                trail that proves ongoing compliance. From audit to remediation, I move fast and leave you
                with evidence you can stand behind.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Start a compliance audit" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Risk Snapshot</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">72%</p>
                    <p className="hero-card__stat-words">of homepages I audit fail basic WCAG AA checks.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    !
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">30-45</p>
                    <p className="hero-card__stat-words">day remediation window I target after audit.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    30
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">100%</p>
                    <p className="hero-card__stat-words">Legal peace of mind with documented compliance evidence.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✓
                  </div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  I document every finding with screenshots, code references, and severity ratings so
                  legal, product, and engineering stay aligned.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Compliance Audits',
                description:
                  'Testing for WCAG 2.2 AA, ADA Title III, Section 508, and EN 301 549.',
              },
              {
                title: 'Remediation Sprints',
                description:
                  'Design and development fixes prioritized by legal risk, customer impact, and effort.',
              },
              {
                title: 'Ongoing Monitoring',
                description:
                  'Monthly regression checks, release reviews, and reporting to maintain compliance.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
              >
                <h3 className="card__title">{item.title}</h3>
                <p className="card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-8 md:px-10">
            <p className="eyebrow">Why this matters</p>
            <div className="mt-4 border-l-2 border-[color:var(--brand-primary)]/70 pl-5">
              <p className="text-lg text-slate-100 leading-relaxed">
                “The ways that websites are designed and set up can create unnecessary barriers that make it
                difficult or impossible for people with disabilities to use websites, just as physical barriers
                like steps can prevent some people with disabilities from entering a building.”
              </p>
              <Link
                className="mt-4 inline-flex text-sm uppercase tracking-[0.3em] text-white/50 hover:text-white"
                href="https://www.ada.gov/resources/web-guidance/"
              >
                ADA.gov
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="hero-card">
              <p className="eyebrow">Audit Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                I surface risk fast, then map fixes to a clear owner.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Intake + scope mapping for high-traffic journeys and legal exposure zones.',
                  'Manual testing with assistive tech, color contrast review, and keyboard navigation checks.',
                  'Issue triage scored by severity, business impact, and likelihood of complaint.',
                  'Live remediation plan with design, engineering, and compliance sign-off.',
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
              <p className="text-xs uppercase tracking-[0.35em]">Standards Covered</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Compliance targets that match what legal teams and regulators expect.
              </h2>
              <div className="grid gap-4">
                {[
                  'WCAG 2.2 AA alignment with documented exceptions.',
                  'ADA Title III risk review for public-facing digital experiences.',
                  'Section 508 compliance for government or public sector contracts.',
                  'EN 301 549 guidance for international accessibility requirements.',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-4 text-[color:var(--color-text-muted)]"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-primary)]" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border border-white/10 rounded-xl p-5 bg-slate-900/50">
                <p className="text-sm text-slate-300">
                  You receive a full evidence package: audit report, annotated screenshots, code-level
                  guidance, and remediation verification notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">Fix + Verify</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                I fix what matters most, then validate every change.
              </h2>
              <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                Remediation starts with the highest-risk blockers: forms, navigation, checkout, and critical
                workflows. I ship fixes quickly, retest with assistive technology, and package the evidence
                so you can demonstrate compliance progress to legal and leadership.
              </p>
              <div className="mt-6 space-y-4 text-sm text-[color:var(--color-text-muted)]">
                {[
                  'Design remediation: contrast, focus states, semantics, and content hierarchy.',
                  'Engineering fixes: ARIA labels, keyboard support, and dynamic component updates.',
                  'Verification: re-testing, regression checks, and compliance attestations.',
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
                  title: 'Executive summary',
                  description: 'Risk overview, priority fixes, and business impact in one page.',
                },
                {
                  title: 'Issue tracker',
                  description: 'Severity-rated backlog with owners, screenshots, and code references.',
                },
                {
                  title: 'Remediation plan',
                  description: 'Sequenced sprints with effort estimates and release targets.',
                },
                {
                  title: 'Verification report',
                  description: 'Retest notes, assistive tech findings, and compliance attestations.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--variant">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready when you are</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Protect your customers, your brand, and your legal exposure.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  I deliver audits in two weeks, remediation in 30-45 days, and continuous monitoring after
                  launch. Tell me your risk timeline and I will build the right plan.
                </p>
              </div>
              <div className="flex flex-shrink-0 flex-wrap gap-4">
                <Link
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase text-white transition hover:brightness-110"
                  href="/book-a-call"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Book a discovery call
                </Link>
                {/* <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase text-white/90 border border-white/30 hover:border-white/60 hover:text-white transition"
                >
                  Download sample audit
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
