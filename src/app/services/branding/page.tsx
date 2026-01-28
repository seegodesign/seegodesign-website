import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';
// import { CaseStudies } from '@/components/CaseStudies';

// const caseStudies = [
//   {
//     title: 'Custom Water Bottle Customizer',
//     client: 'Owala',
//     image: '/owala.jpg',
//     problem: 'Customer needed a modern 3D product customizer to allow users to build and price custom water bottles. Their existing Flash-based tool was outdated, not mobile-friendly, and couldn\'t integrate with their ERP system. Sales reps spent hours manually quoting simple orders.',
//     work: 'Developed a Vue.js customizer with real-time 3D previews and dynamic pricing. Made it fully responsive for mobile.',
//     outcome: 'Client sold 32,625 custom bottles in 2025.',
//     tech: ['Vue.js', 'Three.js', 'API Integration', 'Responsive Design'],
//   }
// ];

export default function BrandingPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="eyebrow">Brand Strategy + Identity</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6 animate-hero-headline">
                Build a brand that feels consistent, trusted, and unmistakably you.
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl animate-hero-subhead">
                I will craft your brand strategy, visual identity systems, and marketing collateral that align every
                touchpoint. From your logo and typography to pitch decks and product UI, I keep the story
                tight and the experience cohesive.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Schedule a brand audit" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Brand Impact</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">5-7</p>
                    <p className="hero-card__stat-words">weeks to launch a full identity system.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ⏱
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">12+</p>
                    <p className="hero-card__stat-words">touchpoints aligned across web, mobile, and print.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✳
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">100%</p>
                    <p className="hero-card__stat-words">brand toolkit delivered with usage guidelines.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✓
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-300">
                  I deliver brand guidelines, assets, and templates so your team can scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand Strategy',
                description: 'Positioning, messaging, and narrative that clarifies who you are.',
              },
              {
                title: 'Visual Identity',
                description: 'Logo systems, typography, color, and UI foundations that scale.',
              },
              {
                title: 'Marketing Collateral',
                description: 'Decks, one-pagers, ads, and templates that keep everything consistent.',
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
            <div className="hero-card">
              <p className="eyebrow">Brand Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                I define, design, and deploy the brand across every surface.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery workshops to align on vision, audience, and differentiation.',
                  'Brand strategy, voice, and messaging with clear positioning.',
                  'Visual identity system: logo, typography, palette, and UI patterns.',
                  'Collateral rollout across web, product, and marketing channels.',
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
              <p className="eyebrow">Touchpoints Covered</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A unified system across every customer moment.
              </h2>
              <div className="grid gap-4">
                {[
                  'Website + product UI aligned with core brand identity.',
                  'Sales, pitch, and investor materials with consistent voice.',
                  'Email templates, lifecycle touchpoints, and onboarding flows.',
                  'Social + ad creative packs for campaigns and launches.',
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
                  I include templates and usage rules so every team member stays on-brand.
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
                Everything you need to scale a trusted brand.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                I package strategy, creative, and production assets so your internal team can execute fast
                without brand drift. Every deliverable ties back to the positioning and story I define
                together.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Brand strategy doc, messaging hierarchy, and positioning map.',
                  'Logo suite, typography system, color palette, and iconography.',
                  'Campaign templates, sales assets, and product marketing kits.',
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
                  title: 'Brand blueprint',
                  description: 'Vision, values, audience personas, and strategic positioning.',
                },
                {
                  title: 'Identity system',
                  description: 'Logo suite, typography, color palette, and UI kit.',
                },
                {
                  title: 'Collateral suite',
                  description: 'Sales decks, one-pagers, social templates, and ad assets.',
                },
                {
                  title: 'Brand guidelines',
                  description: 'Usage rules, tone of voice, and asset governance.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--accent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to align</p>
                <h2 className="hero-card__title">
                  Build consistency across every customer interaction.
                </h2>
                <p>
                  I can run a strategy sprint, launch a visual refresh, or build a full collateral system.
                  Tell me where you need consistency most, and I will scope the right plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="button"
                >
                  Schedule a brand audit
                </button>
                {/* <button
                  type="button"
                  className="button button--secondary"
                >
                  Request sample deliverables
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
