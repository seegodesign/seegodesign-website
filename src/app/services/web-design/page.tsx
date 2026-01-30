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
//   },
//   {
//     title: 'Custom Goalie Gear Customizer',
//     client: 'Bauer Skates',
//     image: '/bauer.jpg',
//     problem: 'Customer struggled with a clunky Flash-based product customizer from 2008. It only worked on desktop, crashed frequently, and couldn\'t integrate with their modern ERP system. Sales reps spent hours manually quoting simple orders.',
//     work: 'Developed a Vue.js customizer with real-time 3D previews and pricing. Built integrations with their ERP and CRM systems for seamless quote generation. Made it fully responsive so field sales could demo products on tablets.',
//     outcome: 'Quote generation time dropped from hours to minutes. Mobile orders increased 200% in the first quarter. The customizer reduced pricing errors by 90%, and customer satisfaction scores jumped significantly.',
//     tech: ['Vue.js', 'Three.js', 'API Integration', 'Responsive Design'],
//   },
//   {
//     title: 'Find a Trade Ally Contractor Tool',
//     client: 'EnergyTrust of Oregon',
//     image: '/eto-fac.jpg',
//     problem: 'Their existing contractor search tool was outdated, slow, and hard to use. It relied on a static database that was difficult to update, leading to inaccurate listings. Users often complained about poor search functionality and long load times.',
//     work: 'Built a new Vue.js application with a dynamic backend that allowed for easy updates to contractor listings. Implemented advanced search and filtering options, along with a responsive design for mobile users. Optimized performance to ensure fast load times.',
//     outcome: 'User engagement increased by 150%, with average session duration rising from 2 to 5 minutes. The number of contractor searches grew by 80%, and user satisfaction surveys showed a significant improvement in usability ratings.',
//     tech: ['Vue', 'Javascript', 'REST API'],
//   },
//   {
//     title: 'HAEMR Website',
//     client: 'Harvard Affiliated Emergency Residency Program',
//     image: '/haemr.jpg',
//     problem: 'The existing website was built on an outdated CMS that made content updates cumbersome. The design was not mobile-friendly, leading to a poor user experience on smartphones and tablets. Additionally, the site had slow load times and accessibility issues.',
//     work: 'Redesigned the website using Wordpress for easy content management. Implemented a responsive design to ensure optimal viewing on all devices. Focused on performance optimization and accessibility compliance throughout the development process.',
//     outcome: 'The new website saw a 60% increase in mobile traffic and a 40% reduction in bounce rates. Content updates became significantly easier for the staff, leading to more frequent updates. Accessibility audits showed full compliance with WCAG 2.1 standards.',
//     tech: ['WordPress', 'Performance Optimization'],
//   },

// ];

export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div>
              <span className="eyebrow">Web Design</span>
              <h1 className="headline animate-hero-headline">
                Modern design that feels effortless, modern, and <span>conversion-ready.</span>
              </h1>
              <p className="subhead animate-hero-subhead">
                Translate product strategy into clear user journeys, polished interfaces, and design
                systems that scale. From discovery to prototyping to handoff, I make sure your site
                feels cohesive across web and mobile.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-hero-cta-primary">
                <ContactButton text="Start your design project" />
              </div>
            </div>
            <div className="hero-card cursor-glow">
              <p className="hero-card__eyebrow">Design Impact</p>
              <div className="mt-6 space-y-6 text-white">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">4-6</p>
                    <p className="hero-card__stat-words">weeks to launch a custom, conversion-ready site.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    🚀
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">35%</p>
                    <p className="hero-card__stat-words">lower bounce rate from clearer structure and CTA flow.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    📉
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="hero-card__stat">1</p>
                    <p className="hero-card__stat-words">clear path from homepage to conversion.</p>
                  </div>
                  <div className="hero-card__stat-icon">
                    ✓
                  </div>
                </div>
              </div>
              <div className="hero-card__footer">
                <p>
                  I build custom sites that turn strategy into clear navigation, modern visuals, and measurable action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Conversion-First Structure',
                description: 'Homepage, service pages, and CTAs mapped to a clear path that turns visits into leads.',
              },
              {
                title: 'Custom Visual System',
                description: 'A bespoke layout, typography, and component system that feels premium and consistent.',
              },
              {
                title: 'Performance + SEO Ready',
                description: 'Fast load times, clean markup, and content hierarchy that ranks and reads well.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card card--gradient"
              >
                <h3 className="card__title">{item.title}</h3>
                <p className="card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <CaseStudies caseStudies={caseStudies} /> */}

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div className="hero-card">
              <p className="eyebrow">Design Workflow</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A clear path from strategy to a live custom website.
              </h2>
              <ol className="space-y-5 text-slate-200">
                {[
                  'Discovery to define positioning, offers, and conversion goals.',
                  'Site map + content structure focused on the core buyer journey.',
                  'Visual system, layout, and copy hierarchy for clarity and trust.',
                  'Build, QA, and launch with performance and SEO checks.',
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
              <p className="eyebrow">Platforms + Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Custom websites that convert across key business models.
              </h2>
              <div className="grid gap-4">
                {[
                  'Marketing sites for service businesses with lead capture baked in.',
                  'Product and SaaS sites that clarify value in the first 10 seconds.',
                  'E-commerce landing flows that reduce friction to purchase.',
                  'Multi-page sites with CMS controls for fast internal updates.',
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
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="eyebrow">Deliverables</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                A custom website package that is ready to launch and iterate.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                You get a complete site foundation: structure, visuals, content hierarchy, and the assets
                needed to ship fast and keep improving after launch.
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Site map, page flow, and conversion-focused content hierarchy.',
                  'Custom layout system with reusable sections and visual guidelines.',
                  'Launch-ready assets, SEO basics, and responsive QA checklist.',
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
                  title: 'Conversion-first architecture',
                  description: 'Site map, page flow, and CTA structure that move visitors to action.',
                },
                {
                  title: 'Custom design system',
                  description: 'Typography, sections, and styling rules built for your brand.',
                },
                {
                  title: 'Performance + SEO setup',
                  description: 'Core web vitals, metadata, and responsive QA before launch.',
                },
                {
                  title: 'Post-launch playbook',
                  description: 'Prioritized tweaks and guidance for future iterations.',
                },
              ]}
            />
          </div>
        </section>
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="hero-card hero-card--light-orbs">
            <div className="hero-card__eyebrow">Our Guarantee</div>
            <h2 className="hero-card__title">The project stays low-risk from day one.</h2>
            <ul>
              {[
                {
                  title: 'Design direction guarantee.',
                  copy:
                    'If you’re not happy with the initial design direction, I will revise it at no cost until it matches the agreed goals — or you can walk away before development begins.',
                },
                {
                  title: 'Two-week exit window.',
                  copy:
                    'If you decide the project isn’t a fit after the first two weeks, you only pay for completed work — no questions asked.',
                },
                {
                  title: 'You own everything.',
                  copy:
                    'You’ll have full access to the code, repo, and hosting from day one. If we ever part ways, you keep everything.',
                },
              ].map((item) => (
                <li key={item.title} className="hero-card__info-bubble">
                  <p className="leading-relaxed">
                    <strong>{item.title}</strong> {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="hero-card hero-card--accent">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <p className="eyebrow">Ready to design</p>
                <h2 className="hero-card__title">
                  Build web sites that captivate and convert.
                </h2>
                <p className="text-slate-200 mt-4 max-w-2xl">
                  I can redesign a product, build a new UI system, or run a rapid prototype sprint. Share
                  your goals and I will map the right design plan.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ContactButton text="Start your design project" />
                {/* <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 border border-white/30 hover:border-white/60 hover:text-white transition"
                >
                  Request sample files
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
