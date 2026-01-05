import React from 'react';
import { Layers, RefreshCw, Wrench, Rocket } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: RefreshCw,
      title: 'Frontend Modernization',
      description: 'Replace outdated, fragile systems with modern React, Vue, or Next.js applications that are faster, more reliable, and easier to maintain.',
    },
    {
      icon: Layers,
      title: 'API Integration & Architecture',
      description: 'Build clean API layers that connect your new frontend to existing backend systems without requiring a complete rebuild.',
    },
    {
      icon: Wrench,
      title: 'Performance Optimization',
      description: 'Diagnose and fix performance bottlenecks. Improve load times, responsiveness, and SEO rankings.',
    },
    {
      icon: Rocket,
      title: 'Custom Web Applications',
      description: 'Build bespoke configurators, dashboards, portals, and tools that match your unique business requirements.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            Services
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            I offer focused frontend development services designed to solve real business problems—
            not just make things look pretty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl border border-[color:var(--brand-primary)]/20 hover:shadow-lg hover:shadow-black/40 transition-shadow">
              <div className="w-12 h-12 bg-[color:var(--brand-primary)] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-slate-100 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
