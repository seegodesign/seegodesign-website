import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatYouReceive } from '@/components/WhatYouReceive';
import ContactButton from '@/components/ContactButton';

export default function WordPressSupportPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="eyebrow">Wordpress Development</span>
              <h1 className="headline animate-hero-headline">
                Keep your WordPress site secure, current, and conversion-ready <span>without the scramble.</span>
              </h1>
              <p className="subhead animate-hero-subhead">
                I handle updates, new pages, fixes, and ongoing maintenance so your site stays fast,
                protected, and aligned with your marketing goals. No more stalled requests or risky
                plugin surprises.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Start Wordpress Development" />
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card__eyebrow">Support Snapshot</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">24-48</p>
                    <p className="hero-card__stat-words">hour turnaround on most updates and fixes.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✓
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">Monthly</p>
                    <p className="hero-card__stat-words">security patches, plugin updates, and backups.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ⛭
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">Unlimited</p>
                    <p className="hero-card__stat-words">small content changes included.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    +
                  </div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  You get a dedicated support lane, proactive maintenance, and clear reporting on every update.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Ongoing Updates',
                description:
                  'New pages, landing updates, layout tweaks, and content changes delivered quickly.',
              },
              {
                title: 'Security + Maintenance',
                description:
                  'Core updates, plugin audits, backups, uptime monitoring, and rapid fixes.',
              },
              {
                title: 'Performance Care',
                description:
                  'Speed checks, image optimization, and technical cleanup that keeps conversions steady.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
              >
                <h3 className="card__title">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="hero-card">
              <p className="eyebrow">Support Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A steady cadence for updates, fixes, and improvements.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Kickoff review of site health, plugins, and hosting setup.',
                  'Shared request board for changes, new pages, and issues.',
                  'Weekly or monthly update windows with QA and reporting.',
                  'Ongoing monitoring, backups, and security patches.',
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
              <p className="eyebrow">What I Handle</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                The WordPress tasks that keep teams moving.
              </h2>
              <div className="grid gap-4">
                {[
                  'New pages, landing pages, and content updates.',
                  'Core, plugin, and theme updates with testing.',
                  'Security hardening, backups, and recovery support.',
                  'Performance tuning, caching, and asset optimization.',
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
                  Ican collaborate with your marketing or internal team, or run the full support lane.
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
                A reliable support lane that protects revenue and brand trust.
              </h2>
              <p className="text-sm leading-relaxed">
                Wordpress Development should be predictable. I build a plan around your release rhythm and
                keep your site healthy so marketing can focus on growth.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Dedicated support queue with clear SLAs.',
                  'Monthly maintenance checklist and reporting.',
                  'Ongoing improvements to speed, UX, and content flow.',
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
                  title: 'Monthly care plan',
                  description: 'Updates, security monitoring, and backups handled on schedule.',
                },
                {
                  title: 'Rapid response',
                  description: 'Triage and fixes for urgent issues, bugs, or broken plugins.',
                },
                {
                  title: 'Content support',
                  description: 'New pages, sections, and layout updates when you need them.',
                },
                {
                  title: 'Performance tuning',
                  description: 'Speed improvements, caching, and technical cleanup.',
                },
              ]}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--variant">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready for support</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Keep WordPress updates moving without the stress.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  Tell us what is broken, what is slow, and what you want to launch. Iwill map the
                  right support plan for your team.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ContactButton text="Get WP Support" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
