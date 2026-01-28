import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';

export default function CustomChatBotsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(68,165,248,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(66,85,99,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <span className="eyebrow">Custom Chat Bots</span>
              <h1 className="headline animate-hero-headline">
                Give every visitor a helpful guide <span>without adding a support queue.</span>
              </h1>
              <p className="subhead animate-hero-subhead">
                I build branded chat experiences that answer real questions, qualify leads, and send
                people to the right next step. Your bot stays on message, captures intent, and hands
                off to you when it matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Start a Chat Bot Build" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Bot Snapshot</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">24/7</p>
                    <p className="hero-card__stat-words">answers to your most common questions.</p>
                  </div>
                  <div className="hero-card__stat-icon">✓</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">On-brand</p>
                    <p className="hero-card__stat-words">voice aligned to your tone and offers.</p>
                  </div>
                  <div className="hero-card__stat-icon">◎</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">Warm leads</p>
                    <p className="hero-card__stat-words">captured with context, not just emails.</p>
                  </div>
                  <div className="hero-card__stat-icon">✦</div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  You get a structured conversation flow, guardrails, and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Intent Mapping',
                description:
                  'We map real customer questions, objections, and goals into a clear conversation tree.',
              },
              {
                title: 'Lead Capture + Routing',
                description:
                  'Capture names, emails, and project intent, then route to email, forms, or CRM.',
              },
              {
                title: 'Launch + Monitoring',
                description:
                  'Deploy to your site with analytics so you can see what people ask and where they drop off.',
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
              <p className="eyebrow">Build Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A focused sprint that turns questions into a conversion engine.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery session to capture your services, tone, and primary conversion goals.',
                  'Conversation mapping and copywriting for key intents.',
                  'Bot build with guardrails, routing, and handoff rules.',
                  'Launch, QA, and ongoing tuning based on real usage.',
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
              <p className="eyebrow">What It Covers</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                The pieces that make a bot feel human and useful.
              </h2>
              <div className="grid gap-4">
                {[
                  'On-brand tone, FAQs, and service positioning.',
                  'Lead qualification flows tailored to your offers.',
                  'Fallback paths and escalation to human support.',
                  'Analytics hooks for intent and conversion tracking.',
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
              <div className="mt-6 border border-white/10 rounded-xl p-5 bg-slate-900/50">
                <p className="text-sm text-slate-300">
                  The bot never claims to book calls or access calendars. It routes visitors to the
                  right next step and captures intent for you.
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
                A bot that answers, qualifies, and converts.
              </h2>
              <p className="text-sm leading-relaxed">
                Custom Chat Bots are built to reduce repetitive support while keeping conversion
                quality high. You get a clear conversation flow, guardrails, and reporting.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Conversation map and copy deck.',
                  'Bot build with routing, lead capture, and handoff.',
                  'Launch checklist and performance reporting.',
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
                  title: 'Conversation design',
                  description: 'Clear flows that answer key questions and guide next steps.',
                },
                {
                  title: 'Lead intelligence',
                  description: 'Capture context, budget range, and intent without friction.',
                },
                {
                  title: 'Safe handoff',
                  description: 'Escalate to email or a form when a human should step in.',
                },
                {
                  title: 'Performance insights',
                  description: 'Measure engagement, drop-off, and conversion trends.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--variant">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to build</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Turn your FAQ into a lead-ready assistant.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  Share your services, common questions, and goals. I will map the right flow and
                  launch a chat bot that feels like part of your team.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ContactButton text="Plan a Chat Bot" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
