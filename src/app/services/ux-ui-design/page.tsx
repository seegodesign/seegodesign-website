import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { WhatYouReceive } from '../../../components/WhatYouReceive';
import ContactButton from '../../../components/ContactButton';

export default function UXUIDesignPage() {
  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/55">UX/UI Design</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6 animate-hero-headline">
                Design experiences that feel effortless, modern, and conversion-ready.
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl animate-hero-subhead">
                We translate product strategy into clear user journeys, polished interfaces, and design
                systems that scale. From discovery to prototyping to handoff, we make sure your product
                feels cohesive across web and mobile.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Start your design project" />
              </div>
            </div>
            <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Design Impact</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">3-5</p>
                    <p className="text-sm text-slate-300">weeks to deliver full UX/UI flows.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[color:var(--brand-primary)]/20 flex items-center justify-center text-[color:var(--brand-primary)] text-xl font-semibold">
                    ✳
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">2x</p>
                    <p className="text-sm text-slate-300">faster handoff with a reusable design system.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ⚡
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">100%</p>
                    <p className="text-sm text-slate-300">annotated designs with dev-ready specs.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ✓
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-300">
                  We align UX, UI, and product strategy so the final experience feels intentional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Product UX',
                description: 'Research, journey mapping, and architecture that remove friction.',
              },
              {
                title: 'UI Systems',
                description: 'Design systems, components, and documentation for consistent UI.',
              },
              {
                title: 'Prototyping',
                description: 'Clickable prototypes for testing, validation, and stakeholder alignment.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/30"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-white/10 rounded-2xl p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Design Workflow</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                We research, prototype, and refine with a clear process.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery to align goals, users, and success metrics.',
                  'User flows and IA mapping for key journeys.',
                  'Wireframes, UI design, and component systems.',
                  'Prototype testing, iteration, and final dev handoff.',
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
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Platforms + Use Cases</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                Experience design across web, mobile, and product ecosystems.
              </h2>
              <div className="grid gap-4">
                {[
                  'Responsive web apps, marketing sites, and SaaS platforms.',
                  'Native mobile flows with gesture-first UX and UI.',
                  'Design systems for multi-team product consistency.',
                  'Accessibility-first UI standards and component audits.',
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
                  We validate with real users and accessibility standards to ensure the UI works for
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Deliverables</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                Design systems that make shipping easier, faster, and cleaner.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We give you design systems, reusable UI libraries, and documentation that make every future
                release faster. Your team gets visual consistency and product clarity in one kit.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'UX research summary, persona snapshots, and journey maps.',
                  'Component library, UI kits, and Figma documentation.',
                  'Prototype files, annotations, and handoff specs.',
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
                  title: 'UX audit + insights',
                  description: 'Findings, pain points, and opportunity mapping.',
                },
                {
                  title: 'Screen library',
                  description: 'High-fidelity UI for core journeys and edge cases.',
                },
                {
                  title: 'Design system',
                  description: 'Typography, spacing, components, and tokens.',
                },
                {
                  title: 'Handoff package',
                  description: 'Specs, assets, and dev-ready design documentation.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[color:var(--brand-primary)]/20 via-slate-900/60 to-slate-900/20 px-8 py-12 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">Ready to design</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Build interfaces your users want to stay in.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  We can redesign a product, build a new UI system, or run a rapid prototype sprint. Share
                  your goals and we will map the right design plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  Book a UX audit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/30 hover:border-white/60 hover:text-white transition"
                >
                  Request sample files
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
