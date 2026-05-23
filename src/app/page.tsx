'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';
import { Process } from '@/components/Process';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { Testimonials } from '@/components/Testimonials';
import { portfolioItems } from '@/lib/portfolio';

export default function HomePage() {
  const featuredProjects = portfolioItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.18),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.28),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="relative z-10 flex-1">
        <Hero />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow">Where I help most</span>
            <h2 className="headline">Web design, development, and cleanup work that moves the business forward</h2>
            <p className="subhead">
              Most teams do not need more software for its own sake. They need clearer messaging, a faster path to action, and a website or product experience that stops leaking trust. The homepage now carries that story directly instead of relying on a hero and testimonial block alone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Custom websites that convert',
                description:
                  'I design and build marketing sites, service sites, and content-heavy experiences that make the offer easier to understand and the next step easier to take. That includes messaging structure, visual design, responsive layouts, and implementation details that hold up after launch.',
              },
              {
                title: 'Systems that replace patchwork workflows',
                description:
                  'When teams are juggling manual steps, duplicated data, or disconnected tools, I help simplify the flow. That can mean a custom app, a smarter form experience, a tool that guides decisions, or a more maintainable site setup that reduces operational friction.',
              },
              {
                title: 'Optimization that fixes what is already there',
                description:
                  'Not every project needs a full rebuild. Sometimes the right move is cleaning up accessibility issues, improving performance, tightening conversion paths, and removing the UX problems that quietly cost leads, trust, and internal time every week.',
              },
            ].map((item) => (
              <article key={item.title} className="card card--gradient animate-section-rise animate-section-rise--staggered">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="hero-card hero-card--accent">
              <p className="eyebrow">Why teams reach out</p>
              <h2 className="hero-card__title">The usual trigger is not a lack of ideas. It is a lack of clarity.</h2>
              <p>
                Some clients are growing and their current site no longer matches the quality of the business. Others have already invested in design or development, but the result feels fragmented, slow, or hard to maintain. In both cases, the job is the same: reduce noise, tighten the story, and ship something that makes progress obvious.
              </p>
              <p>
                That means balancing strategy with execution. I work across structure, content hierarchy, interface design, frontend development, accessibility, and launch readiness so the final result is not just attractive, but useful, resilient, and easier to grow.
              </p>
            </div>
            <div className="card card--no-bg">
              <p className="card__eyebrow">Common outcomes</p>
              <h2 className="card__title">What a stronger homepage and site should do</h2>
              <div className="grid gap-4">
                {[
                  'Help the right visitor understand the offer within seconds.',
                  'Support sales conversations with clearer proof and positioning.',
                  'Reduce friction in mobile navigation, forms, and decision paths.',
                  'Give your team a cleaner system to update and extend over time.',
                ].map((item) => (
                  <ul key={item} className="bullets">
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
              <div className="card__tout">
                <p>
                  Good homepage content should answer real buyer questions, not just decorate the brand. That is the standard the rest of the site is built around.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Process />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <span className="eyebrow">Featured work</span>
            <h2 className="headline">Recent projects across WordPress, custom builds, and conversion-first redesigns</h2>
            <p className="subhead">
              The work spans established brands, local businesses, product teams, and organizations that need sharper storytelling and cleaner execution. These examples add proof to the claims on the homepage and give search engines more useful context about what Seego Design actually builds.
            </p>
          </div>
          <PortfolioGrid items={featuredProjects} compact />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/portfolio" className="button">
              View full portfolio
            </Link>
            <Link href="/services" className="button button--secondary">
              Explore services
            </Link>
          </div>
        </section>

        <Testimonials />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="hero-card">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <p className="eyebrow">What working together looks like</p>
                <h2 className="hero-card__title">One partner who can handle strategy, design, build, and follow-through</h2>
                <p>
                  Seego Design is intentionally hands-on. You are not passed between strategy, design, and development silos. I stay close to the work, keep scope grounded, and translate technical decisions into plain language so you can make fast calls without getting buried in process.
                </p>
                <p>
                  That approach works well for founders, lean teams, and organizations that need senior-level execution without adding communication overhead. It is especially useful when the project needs both design judgment and implementation depth from the same person.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Clear recommendations',
                    description: 'You get direct guidance on what to fix first, what can wait, and where the highest leverage lives.',
                  },
                  {
                    title: 'Deliberate execution',
                    description: 'Design choices, content structure, accessibility, and frontend implementation stay connected instead of drifting apart.',
                  },
                  {
                    title: 'Momentum after launch',
                    description: 'The site is easier to maintain, easier to extend, and better positioned for future campaigns or product changes.',
                  },
                ].map((item) => (
                  <div key={item.title} className="what-you-receive-item group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="what-you-receive-title relative text-sm font-semibold text-white">{item.title}</p>
                    <p className="what-you-receive-desc relative mt-2 text-xs text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
