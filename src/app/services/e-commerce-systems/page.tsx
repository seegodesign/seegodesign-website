import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { WhatYouReceive } from '../../../components/WhatYouReceive';
import ContactButton from '../../../components/ContactButton';

export default function EcommerceSystemsPage() {
  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,205,255,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.2),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/55">E-Commerce Systems</span>
              <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-6 animate-hero-headline">
                Build a storefront that feels premium and converts on every device.
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl animate-hero-subhead">
                We design and build Shopify themes, WooCommerce shops, and custom commerce experiences that
                move fast, look sharp, and scale with your catalog. Every flow is tuned for clarity, trust,
                and conversion.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Plan a commerce build" />
              </div>
            </div>
            <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Commerce Impact</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">4-6</p>
                    <p className="text-sm text-slate-300">weeks to launch a tailored storefront.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[color:var(--brand-primary)]/20 flex items-center justify-center text-[color:var(--brand-primary)] text-xl font-semibold">
                    🛒
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">2x</p>
                    <p className="text-sm text-slate-300">faster updates with clean sections and blocks.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ⚡
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-white">100%</p>
                    <p className="text-sm text-slate-300">handoff-ready with documentation and QA.</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-semibold">
                    ✓
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-300">
                  We focus on product discovery, checkout confidence, and post-purchase retention.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Shopify Theme Builds',
                description: 'Custom themes built around your merchandising and brand experience.',
              },
              {
                title: 'WooCommerce Stores',
                description: 'Flexible storefronts with optimized performance and checkout flow.',
              },
              {
                title: 'Commerce Integrations',
                description: 'Inventory, fulfillment, subscriptions, and analytics wired cleanly.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900/70 border border-white/10 rounded-2xl p-6">
                <p className="text-lg font-semibold text-white mb-3">{item.title}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Commerce Workflow</p>
              <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4 mb-6">
                A clear build process that keeps launches predictable.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Audit catalog structure, merchandising, and conversion path.',
                  'Design the storefront, product pages, and checkout experience.',
                  'Build the theme and integrate tools for ops and analytics.',
                  'QA, launch, and document for ongoing updates.',
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
            <WhatYouReceive
              heading="What you receive"
              items={[
                {
                  title: 'Conversion-ready theme',
                  description: 'A storefront tuned for clarity, trust, and easy checkout.',
                },
                {
                  title: 'CMS-ready sections',
                  description: 'Flexible blocks your team can edit without dev help.',
                },
                {
                  title: 'Launch support',
                  description: 'QA, analytics checks, and a smooth handoff.',
                },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
