import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';

export default function AIReceptionistPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(68,165,248,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(66,85,99,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <span className="eyebrow">AI Receptionist</span>
              <h1 className="headline animate-hero-headline">
                Answer every inbound call <span>without adding front desk overhead.</span>
              </h1>
              <p className="subhead animate-hero-subhead">
                I set up AI receptionist systems for service businesses that need calls answered after hours,
                appointments booked without back-and-forth, and every lead captured with context. The result is a
                phone experience that sounds professional, routes callers correctly, and keeps your team focused on
                the work only humans should handle.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Plan Your AI Receptionist" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Receptionist Snapshot</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">24/7</p>
                    <p className="hero-card__stat-words">coverage for nights, weekends, and overflow hours.</p>
                  </div>
                  <div className="hero-card__stat-icon">✓</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">Fast</p>
                    <p className="hero-card__stat-words">answers, booking, and routing without voicemail tag.</p>
                  </div>
                  <div className="hero-card__stat-icon">◎</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">Logged</p>
                    <p className="hero-card__stat-words">caller details, transcripts, and intent for follow-up.</p>
                  </div>
                  <div className="hero-card__stat-icon">✦</div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  You get a configured phone workflow, business-specific scripts, and reporting on what callers need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Always-on call coverage',
                description:
                  'Answer new leads, repeat customers, and after-hours calls without forcing people to leave voicemail and hope for a callback.',
              },
              {
                title: 'Booking + qualification',
                description:
                  'Check availability, capture the reason for the call, and move people into the right appointment or follow-up path.',
              },
              {
                title: 'Call routing with records',
                description:
                  'Transfer urgent calls when needed and keep a transcript trail so your team knows exactly what happened on every conversation.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="card__title">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="hero-card">
              <p className="eyebrow">Setup Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A quick rollout that makes your phone line useful again.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Map your hours, services, FAQs, escalation rules, and the exact language callers should hear.',
                  'Connect scheduling, calendars, forwarding, and any intake details the assistant needs to capture.',
                  'Test booking logic, transfer rules, and edge cases so callers reach the right next step.',
                  'Launch with monitoring, transcript review, and tuning based on real call patterns.',
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
              <p className="eyebrow">Good Fit For</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Service businesses that lose revenue when the phone goes unanswered.
              </h2>
              <div className="grid gap-4">
                {[
                  'Home service teams that need after-hours coverage for estimates, emergencies, and dispatch questions.',
                  'Medical, wellness, and clinic teams that need scheduling, rescheduling, and intake captured reliably.',
                  'Law firms and consultative businesses that need lead qualification before a human steps in.',
                  'Multi-location or busy front-desk teams that need overflow support without adding staffing overhead.',
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
                <p>
                  This works best when the caller journey is clear: answer questions, book where possible, and route humans only when nuance matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="eyebrow">Deliverables</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A receptionist setup that answers, books, routes, and documents.
              </h2>
              <p className="text-sm leading-relaxed">
                AI Receptionist projects are built to reduce missed calls and lighten front-desk load without making the caller experience feel robotic. You get a configured assistant, clear rules, and the operating details needed to trust it in production.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Phone script and knowledge base tailored to your services, hours, and policies.',
                  'Appointment booking or intake logic connected to your existing workflow.',
                  'Call routing, transcript review, and follow-up guidance for your team.',
                ].map((item) => (
                  <ul key={item} className="bullets">
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
            </div>
            <WhatYouReceive
              items={[
                {
                  title: 'Business-specific call flow',
                  description: 'Questions, answers, and branching logic aligned to your services and terminology.',
                },
                {
                  title: 'Scheduling integration',
                  description: 'Booking and rescheduling paths that work with your calendar or intake process.',
                },
                {
                  title: 'Lead records + transcripts',
                  description: 'Caller details, reasons for calling, and conversation history captured for review.',
                },
                {
                  title: 'Smart human handoff',
                  description: 'Urgent or high-value calls can transfer cleanly when a person needs to step in.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--accent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to launch</p>
                <h2 className="hero-card__title">
                  Stop sending good leads to voicemail.
                </h2>
                <p>
                  Share your call flow, calendar setup, and edge cases. I will map the right AI receptionist setup so callers get fast answers and your team gets cleaner follow-up.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pr-12">
                <ContactButton text="Start Today" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
