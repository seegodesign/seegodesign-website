import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { portfolioItems } from '@/lib/portfolio';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfolio</span>
            <h1 className="headline animate-hero-headline">
              Selected projects
            </h1>
            <p className="subhead animate-hero-subhead">
              These projects span custom web design, WordPress builds, and conversion-first redesigns.
              Each one balances clarity, polish, and performance.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <PortfolioGrid items={portfolioItems} />
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="hero-card hero-card--accent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Want details?</p>
                <h2 className="hero-card__title">Ask for a tailored walkthrough.</h2>
                <p className="text-slate-200 mt-4 max-w-2xl">
                  I can share project goals, workflows, and results for any of these builds.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="button">
                  Request project details
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
