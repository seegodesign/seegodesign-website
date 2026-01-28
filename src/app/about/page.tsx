'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
// import ContactButton from '@/components/ContactButton';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.18),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-36 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.3),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="animate-section-rise max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <span className="eyebrow">About Seego Design</span>
              <h1 className="headline">
                Hi! I&apos;m Cameron. <span>Nice to meet you!</span>
              </h1>
              <p className="subhead">
                I’m a solo web design and development studio owner with over 20 years of experience creating accessible, visually engaging, and results-driven web experiences. My work lives at the intersection of design and development—crafting interfaces that not only look great, but are thoughtfully engineered for performance, usability, and longevity.
              </p>
              <div
                id="bio-continued"
                className={`bio-continued transition-all duration-300 ease-in-out ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                aria-hidden={!showMore}
              >
                <p className="subhead">
                  Over the years, I’ve built software across a wide range of environments, from small businesses to advertising agencies and educational institutions. That breadth of experience has shaped a flexible, collaborative approach and a deep understanding of how to deliver solutions that work in the real world.
                </p>
                <p className="subhead">
                  When I’m not building for the web, I’m raising two amazing children with my wife, making music, and soaking up the natural beauty of life on Kaua‘i.
                </p>
              </div>
              <p>
                <button
                  className="text-[color:var(--brand-primary)] underline hover:no-underline focus:outline-none"
                  onClick={() => setShowMore((v) => !v)}
                  aria-expanded={showMore}
                  aria-controls="bio-continued"
                  type="button"
                >
                  {showMore ? 'Show less' : 'Show more'}
                </button>
              </p>
              {/* <div className="checkout-btn-row">
                <ContactButton text="Let's chat" />
                <Link className="button button--secondary" href="/services">
                  View services
                </Link>
              </div> */}
            </div>
            {/* <div className="hero-card">
              <p className="hero-card__eyebrow">Credibility at a glance</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">20+</p>
                    <p className="hero-card__stat-words">years building web products and systems.</p>
                  </div>
                  <div className="hero-card__stat-icon">✓</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">40+</p>
                    <p className="hero-card__stat-words">launches across SaaS, services, and public sector.</p>
                  </div>
                  <div className="hero-card__stat-icon">✳</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">1</p>
                    <p className="hero-card__stat-words">point of contact from strategy to launch.</p>
                  </div>
                  <div className="hero-card__stat-icon">⛭</div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  Clients come to me for speed, clarity, and clean execution. I keep scopes focused and
                  deliver measurable outcomes.
                </p>
              </div>
            </div> */}
            <div className="flex h-full flex-col items-center">
              <Image src="/cameron-bio-photo.jpg" alt="Cameron Gaut, Seego Design" width={256} height={384} className="rounded-lg shadow-lg w-64 h-96 object-cover border-8 border-white/20" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategy + Structure',
                description:
                  'I clarify messaging, map the conversion path, and build information architecture that makes decisions easy.',
              },
              {
                title: 'Design + Build',
                description:
                  'I design polished interfaces and ship clean, performance-first builds that are easy to maintain.',
              },
              {
                title: 'Ongoing Support',
                description:
                  'I stay involved for updates, optimization, and maintenance so your site keeps performing.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card card--gradient animate-section-rise animate-section-rise--staggered"
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
              <p className="eyebrow">How I work</p>
              <h2 className="hero-card__title">
                A clear, fast process from kickoff to launch.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery to align on goals, audience, and conversion priorities.',
                  'Structure and design system that turns strategy into clear screens.',
                  'Build, QA, and launch with performance and accessibility checks.',
                  'Ongoing support or handoff with clear documentation.',
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
            <div className="card card--no-bg">
              <p className="card__eyebrow">Recent outcomes</p>
              <h2 className="card__title">
                Proof that the work delivers.
              </h2>
              <div className="grid gap-4">
                {[
                  'Reduced quote generation time from hours to minutes for a custom product tool.',
                  'Shipped mobile-first redesigns that lowered bounce rates and improved engagement.',
                  'Delivered accessibility upgrades to support WCAG-aligned experiences.',
                ].map((item) => (
                  <ul
                    key={item}
                    className="bullets"
                  >
                    <li>{item}</li>
                  </ul>
                ))}
              </div>
              <div className="mt-6 border border-white/10 rounded-xl p-5 bg-slate-900/50">
                <p className="text-sm text-slate-300">
                  If you want a site that feels premium, works on mobile, and converts, I can help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[color:var(--brand-primary)]/20 via-slate-900/60 to-slate-900/20 px-8 py-12 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to talk?</p>
                <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">
                  Let’s turn your site into a real growth asset.
                </h2>
                <p className="text-sm text-slate-200 mt-4 max-w-2xl">
                  If you want clarity, fast execution, and a site that pulls its weight, I’m ready to help.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-a-call"
                  className="button"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
