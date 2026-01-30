import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-24 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="eyebrow">App Development</span>
              <h1 className="headline animate-hero-headline">
                Web, iOS, and Android apps built to <span>launch fast and scale cleanly.</span>
              </h1>
              <p className="subhead mx-auto animate-hero-subhead">
                I design and ship production-ready apps with modern stacks, polished UI, and infrastructure
                that is built for growth. From MVP to v2, I help you move faster without sacrificing
                performance, reliability, or compliance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Plan your app build" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Launch Profile</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">6-10</p>
                    <p className="hero-card__stat-words">weeks for MVP web or mobile release.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ⏱
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">3x</p>
                    <p className="hero-card__stat-words">faster build cycles with reusable components.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ⚡
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">100%</p>
                    <p className="hero-card__stat-words">handoff-ready with docs and QA coverage.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✓
                  </div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  I deliver production code, QA coverage, and onboarding so your team can scale without
                  surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Apps',
                description: 'Next.js, React, and modern APIs tailored for performance and SEO.',
              },
              {
                title: 'iOS + Android',
                description: 'Native and cross-platform builds with unified design and shared logic.',
              },
              {
                title: 'Backend Systems',
                description: 'Secure APIs, auth, billing, and analytics that scale with demand.',
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
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="hero-card">
              <p className="eyebrow">Build Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                I align product, design, and engineering from day one.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery sprint to define scope, target users, and success metrics.',
                  'UX/UI design with rapid prototyping and stakeholder reviews.',
                  'Iterative development with weekly demos and QA checkpoints.',
                  'Launch prep, store submissions, and post-launch monitoring.',
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
              <p className="text-xs uppercase tracking-[0.35em]">Platforms + Stack</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Modern tooling for scalable web and mobile experiences.
              </h2>
              <div className="grid gap-4">
                {[
                  'React, Next.js, and TypeScript for fast, accessible web apps.',
                  'React Native and native modules for iOS and Android parity.',
                  'Node.js, Supabase, or Firebase for secure backend services.',
                  'CI/CD pipelines with monitoring and analytics baked in.',
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
                  Need HIPAA, SOC 2, or PCI in mind? I build with compliance requirements from the start.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em]">Deliverables</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Everything you need to launch, iterate, and grow.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                I ship design systems, feature roadmaps, and clean codebases that your internal team or
                external partners can build on. You get clarity, velocity, and a predictable path to scale.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Product roadmap, prioritized backlog, and sprint delivery plan.',
                  'Design system, reusable components, and responsive UI library.',
                  'App store packaging, release checklists, and post-launch QA.',
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
                  title: 'Product blueprint',
                  description: 'User flows, requirements, and technical architecture aligned to business goals.',
                },
                {
                  title: 'Design + prototype',
                  description: 'High-fidelity UX, interactive prototypes, and usability validation.',
                },
                {
                  title: 'Production codebase',
                  description: 'Clean, documented code with CI/CD and testing foundations.',
                },
                {
                  title: 'Launch support',
                  description: 'Store submissions, monitoring dashboards, and rollout strategy.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--accent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to build</p>
                <h2 className="hero-card__title">
                  Launch the app your customers expect.
                </h2>
                <p>
                  I can start with a discovery sprint, accelerate into development, and keep you supported
                  long after launch. Tell me the platform mix and timeline, and I will scope the right plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ContactButton text="Plan your app build" />
                {/* <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/30 hover:border-white/60 hover:text-white transition"
                >
                  Download sample roadmap
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
