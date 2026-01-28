"use client";

import { AnimatedWavesBackground } from '@/components/AnimatedWavesBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import ScrollDownArrow from '@/components/ScrollDownArrow';

export default function ServicesPage() {
  const services = [
    {
      title: 'Accessibility Compliance',
      description:
        'Ensure your digital product is usable by everyone. I will help you meet legal standards and create inclusive experiences that broaden your reach and build trust with all users.',
      outcomes: [
        'Comprehensive accessibility audits and reports',
        'Remediation plans with prioritized fixes',
        'Ongoing monitoring and compliance support',
      ],
      href: '/services/accessibility-compliance',
    },
    {
      title: 'App Development',
      description:
        'Ship a product that feels inevitable: fast, stable, and quietly beautiful. I build modern web and product experiences that reduce friction, scale with your roadmap, and give your team a clean foundation to grow from.',
      outcomes: [
        'Production-ready architecture and thoughtful component systems',
        'Performance-focused builds with analytics baked in',
        'Reliable releases with QA and launch support',
      ],
      href: '/services/app-development',
    },
    {
      title: 'Wordpress Development',
      description:
        'Keep your WordPress site fast, secure, and current without disrupting your team. I handle updates, new pages, fixes, and ongoing maintenance so the site keeps earning its keep.',
      outcomes: [
        'Content updates, new pages, and layout changes on demand',
        'Security patches, plugin updates, and uptime monitoring',
        'Performance tuning and technical cleanup as needed',
      ],
      href: '/services/wordpress-development',
    },
    // {
    //   title: 'Custom Chat Bots',
    //   description:
    //     'Give your site a helpful, on-brand assistant that answers questions, captures leads, and routes visitors to the right next step without adding support overhead.',
    //   outcomes: [
    //     'Custom conversation flows aligned to your services and tone',
    //     'Lead capture, routing, and handoff to email or CRM',
    //     'Analytics-ready setup with clear engagement tracking',
    //   ],
    //   href: '/services/custom-chat-bots',
    // },
    // {
    //   title: 'App Development',
    //   description:
    //     'Ship a product that feels inevitable: fast, stable, and quietly beautiful. I build modern web and product experiences that reduce friction, scale with your roadmap, and give your team a clean foundation to grow from.',
    //   outcomes: [
    //     'Production-ready architecture and thoughtful component systems',
    //     'Performance-focused builds with analytics baked in',
    //     'Reliable releases with QA and launch support',
    //   ],
    //   href: '/services/app-development',
    // },
    // {
    //   title: 'Branding',
    //   description:
    //     'Clarify your story and turn it into a visual system people remember. From naming to identity, I will help you build a brand that feels confident, distinct, and immediately trustworthy across every touchpoint.',
    //   outcomes: [
    //     'Positioning, voice, and messaging frameworks',
    //     'Logo and identity systems built for digital',
    //     'A full kit of brand assets and usage guidance',
    //   ],
    //   href: '/services/branding',
    // },
    // {
    //   title: 'E-Commerce Systems',
    //   description:
    //     'Launch or rebuild a shop that feels premium and converts. I build Shopify themes and WooCommerce stores that are fast, branded, and easy to run.',
    //   outcomes: [
    //     'Custom storefronts designed around your merchandising',
    //     'Product, collection, and checkout flows tuned to convert',
    //     'Clean integrations for inventory, fulfillment, and analytics',
    //   ],
    //   href: '/services/e-commerce-systems',
    // },
    // {
    //   title: 'System Overhaul',
    //   description:
    //     'When your product has outgrown its foundations, I can help modernize it without breaking momentum. I untangle messy UX, simplify complex workflows, and rebuild the system so teams can ship faster with fewer risks.',
    //   outcomes: [
    //     'Audit of UX, IA, and interface debt',
    //     'New system architecture and design language',
    //     'Migration plan that keeps revenue flowing',
    //   ],
    //   href: '/services/system-overhaul',
    // },
    {
      title: 'Web Design',
      description:
        'Build web sites that captivate and convert. I design beautiful, user-focused websites that tell your brand story, engage visitors, and drive action across all devices.',
      outcomes: [
        'Custom, responsive designs that reflect your brand identity',
        'User-centric layouts optimized for engagement and conversion',
        'Designs delivered with clear implementation guidelines',
      ],
      href: '/services/web-design',
    },
    {
      title: 'Website Optimization',
      description:
        'Transform a slow, leaky site into a high-converting platform. I optimize performance, sharpen messaging, and tune every page so your site feels premium and converts like it should.',
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
    <div className="relative overflow-hidden bg-[color:var(--color-bg)] isolate px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)' }}
        />
        <div className="color-overlay"></div>
      </div>
      <AnimatedWavesBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <section className="animate-section-rise max-w-6xl mx-auto min-h-screen relative -top-12 flex flex-col justify-center items-center text-center">
          <h1 className="max-w-2xl text-4xl md:text-6xl font-semibold mb-4">
            Services built for <span className='text-[color:var(--brand-primary)]'>clarity and momentum</span>
          </h1>
          <p className="text-lg text-[color:var(--color-text-muted)] max-w-2xl">
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
            className={`service-section ${
              index % 2 === 0
                ? 'inverse'
                : ''
            }`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
                <div>
                  <span className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Service 0{index + 1}
                  </span>
                  <h2 className="service-section__headline">
                    {service.title}
                  </h2>
                  <p className="service-section__description">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="service-section__link"
                  >
                    Explore {service.title}
                    <span aria-hidden>→</span>
                  </a>
                </div>
                <div className="card">
                  <h3 className="card__title">What you can expect</h3>
                  <ul className="bullets">
                    {service.outcomes.map((item) => (
                      <li key={item}>
                        {item}
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
