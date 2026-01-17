"use client";

import { AnimatedWavesBackground } from '../../components/AnimatedWavesBackground';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import ScrollDownArrow from '../../components/ScrollDownArrow';

export default function ServicesPage() {
  const services = [
    {
      title: 'App Development',
      description:
        'Ship a product that feels inevitable: fast, stable, and quietly beautiful. We build modern web and product experiences that reduce friction, scale with your roadmap, and give your team a clean foundation to grow from.',
      outcomes: [
        'Production-ready architecture and thoughtful component systems',
        'Performance-focused builds with analytics baked in',
        'Reliable releases with QA and launch support',
      ],
      href: '/services/app-development',
    },
    {
      title: 'Branding',
      description:
        'Clarify your story and turn it into a visual system people remember. From naming to identity, we give you a brand that feels confident, distinct, and immediately trustworthy across every touchpoint.',
      outcomes: [
        'Positioning, voice, and messaging frameworks',
        'Logo and identity systems built for digital',
        'A full kit of brand assets and usage guidance',
      ],
      href: '/services/branding',
    },
    {
      title: 'E-Commerce Systems',
      description:
        'Launch or rebuild a shop that feels premium and converts. We build Shopify themes and WooCommerce stores that are fast, branded, and easy to run.',
      outcomes: [
        'Custom storefronts designed around your merchandising',
        'Product, collection, and checkout flows tuned to convert',
        'Clean integrations for inventory, fulfillment, and analytics',
      ],
      href: '/services/e-commerce-systems',
    },
    {
      title: 'System Overhaul',
      description:
        'When your product has outgrown its foundations, we modernize it without breaking momentum. We untangle messy UX, simplify complex workflows, and rebuild the system so teams can ship faster with fewer risks.',
      outcomes: [
        'Audit of UX, IA, and interface debt',
        'New system architecture and design language',
        'Migration plan that keeps revenue flowing',
      ],
      href: '/services/system-overhaul',
    },
    {
      title: 'UX/UI Design',
      description:
        'Design that moves people forward. We pair research-backed UX with elegant UI so your product is easier to use, easier to love, and measurably better at converting curious visitors into customers.',
      outcomes: [
        'User flows and journey maps that remove friction',
        'High-fidelity UI with a cohesive component library',
        'Prototype testing and iteration before build',
      ],
      href: '/services/ux-ui-design',
    },
    {
      title: 'Website Optimization',
      description:
        'Transform a slow, leaky site into a high-converting platform. We optimize performance, sharpen messaging, and tune every page so your site feels premium and converts like it should.',
      outcomes: [
        'Speed, SEO, and accessibility improvements',
        'Conversion-focused page structure and copy',
        'Ongoing optimization with measurable impact',
      ],
      href: '/services/website-optimization',
    },
  ];
  const goToNextSection = () => {
    const sections = Array.from(document.querySelectorAll('main > section'));
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      if (section.offsetTop > scrollPosition) {
        section.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  };
  return (
    <div className="relative overflow-hidden bg-[#0b1828] isolate">
      <AnimatedWavesBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <section className="max-w-6xl mx-auto min-h-screen relative -top-12 flex flex-col justify-center items-center text-center">
          <h1 className="max-w-2xl text-4xl md:text-6xl font-semibold text-white mb-4">
            Services built for <span className='text-[color:var(--brand-primary)]'>clarity and momentum</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Each engagement is designed to reduce friction, elevate your brand,
            and move your product forward. Explore the services below and dive
            deeper into each offering.
          </p>
          <ScrollDownArrow handleDownArrowClick={goToNextSection} />
        </section>
        {services.map((service, index) => (
          <section
            key={service.title}
            id={service.title.toLowerCase().replace(/\s+/g, '-')}
            className={`min-h-screen flex items-center border-b border-slate-300/20 ${
              index % 2 === 0
                ? 'bg-gradient-to-b from-slate-800/80 to-slate-900/80'
                : ''
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
                <div>
                  <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Service 0{index + 1}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[color:var(--brand-primary)] font-semibold hover:text-white transition-colors"
                  >
                    Explore {service.title}
                    <span aria-hidden>→</span>
                  </a>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30">
                  <h3 className="text-white text-xl mb-4">What you can expect</h3>
                  <ul className="space-y-3 text-slate-300">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--brand-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ScrollDownArrow handleDownArrowClick={goToNextSection} />
            </div>
          </section>
        ))}
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
