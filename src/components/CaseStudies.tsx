import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';

const caseStudies = [
  {
    title: 'MSP Client Portal Rebuild',
    client: 'Regional IT Services Provider',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njc1Njk3MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Their client portal was built on a heavily customized WordPress setup. Every small feature request required days of work navigating plugin conflicts. The site frequently broke after updates, and mobile performance was poor.',
    work: 'Built a new React-based frontend with a clean REST API connecting to their existing backend systems. Implemented a design system for consistency and created reusable components for common workflows like ticket submission and billing.',
    outcome: 'Feature development time dropped by 60%. The portal now handles 3x the traffic without performance issues. Most importantly, their team can confidently add new features without fear of breaking existing functionality.',
    tech: ['React', 'TypeScript', 'REST API', 'TailwindCSS'],
  },
  {
    title: 'SaaS Marketing Site Modernization',
    client: 'B2B Analytics Platform',
    image: 'https://images.unsplash.com/photo-1601940250260-979d887883e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBTYWFTJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzY3NTY5NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Their marketing site was a Frankenstein of legacy jQuery and inline scripts. Making updates required a developer, and A/B testing was nearly impossible. Page load times were hurting SEO rankings.',
    work: 'Migrated to Next.js with server-side rendering and static generation. Set up a headless CMS for content management, allowing the marketing team to update pages without developer intervention. Optimized images and implemented proper caching strategies.',
    outcome: 'Page load times improved from 6.2s to 1.4s. Marketing can now deploy changes independently, and they run 5-10 A/B tests monthly. Organic traffic increased 40% within three months of launch.',
    tech: ['Next.js', 'Headless CMS', 'SSR/SSG', 'Performance Optimization'],
  },
  {
    title: 'Custom Product Configurator',
    client: 'Industrial Manufacturing Company',
    image: 'https://images.unsplash.com/photo-1742786274465-299d8128c00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzY3NDg0MTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    problem: 'Customers struggled with a clunky Flash-based product configurator from 2008. It only worked on desktop, crashed frequently, and couldn\'t integrate with their modern ERP system. Sales reps spent hours manually quoting simple orders.',
    work: 'Developed a Vue.js configurator with real-time 3D previews and pricing. Built integrations with their ERP and CRM systems for seamless quote generation. Made it fully responsive so field sales could demo products on tablets.',
    outcome: 'Quote generation time dropped from hours to minutes. Mobile orders increased 200% in the first quarter. The configurator reduced pricing errors by 90%, and customer satisfaction scores jumped significantly.',
    tech: ['Vue.js', 'Three.js', 'API Integration', 'Responsive Design'],
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            Real Projects, Real Results
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            These case studies show how I approach frontend modernization —
            identifying the real pain points, implementing clean solutions, and delivering measurable improvements.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
