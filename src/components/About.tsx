import React from 'react';
import { Code2, Zap, Shield } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Code2,
      title: 'Clean, Maintainable Code',
      description: 'I write code that your team can actually work with. No cryptic hacks, no technical debt that comes back to haunt you.',
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Fast websites aren\'t just nice to have—they directly impact your bottom line. I optimize for speed from day one.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Modern architecture that can grow with your business. No more worrying about your site breaking with every update.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900"
      >
      <div
        className="absolute inset-0 opacity-30 w-full h-full"
        style={{
        backgroundImage: 'linear-gradient(var(--tw-gradient-stops)), url(https://img.freepik.com/free-photo/smooth-stucco-wall_1194-7019.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
        }}
      ></div>
      <div className="max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12 md:mb-16">
      <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
      About My Approach
      </h2>
      <p className="text-slate-300 text-lg md:text-xl">
      I specialize transforming outdated or brittle websites & apps and transform them into modern,
      reliable systems. My focus is always on practical improvements that make your team's life easier
      and your business more agile.
      </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
      <div key={index} className="bg-slate-900 p-8 rounded-xl border border-white/20">
        <div className="w-12 h-12 bg-[color:var(--brand-primary)] rounded-lg flex items-center justify-center mb-4">
        <value.icon className="text-white" size={24} />
        </div>
        <h3 className="text-slate-100 mb-3">
        {value.title}
        </h3>
        <p className="text-slate-300">
        {value.description}
        </p>
      </div>
      ))}
      </div>
      </div>
    </section>
  );
}
