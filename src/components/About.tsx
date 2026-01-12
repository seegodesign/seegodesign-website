import React from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { Layers, Workflow, Compass } from 'lucide-react';

type AboutProps = {
  isLoading: boolean;
};

export function About({ isLoading }: AboutProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.25 });
  const shouldAnimate = !isLoading && isInView;

  const handleGlow = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--glow-x', `${x}px`);
    event.currentTarget.style.setProperty('--glow-y', `${y}px`);
  };

  const values = [
    {
      icon: Layers,
      title: 'Cleanup & Unification',
      description: 'Bring scattered tools, forms, and data into one connected flow so teams can actually see what is happening.',
      keyPoints: [
        'Centralized data from multiple sources (CRM, CMS, forms, spreadsheets)',
        'Seamless integrations between tools',
        'Eliminate duplication and manual work',
      ],
    },
    {
      icon: Workflow,
      title: 'Automate the busywork',
      description: 'Replace manual, error-prone steps with automation that removes duplication and keeps operations moving.',
      keyPoints: [
        'Automated data syncing between tools',
        'Trigger-based workflows that respond to real-time events',
        'Eliminate manual data entry and repetitive tasks',
      ],
    },
    {
      icon: Compass,
      title: 'Design for scale',
      description: 'Create UX and websites that reflect how the business really runs and can grow without breaking.',
      keyPoints: [
        'Clear user journeys that match real workflows',
        'Scalable architecture that supports growth',
        'Optimized performance for all users',
      ],
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1)' }}
      />
      <div className={`relative max-w-7xl mx-auto z-10 section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="max-w-3xl mb-12 md:mb-16 flex flex-col items-center text-center mx-auto">
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            About Our Services
          </h2>
          <p className="text-slate-300 text-lg md:text-2xl">
            If you're a business that has outgrown your old website, or is stuck wrestling with disconnected systems, scattered data across multiple platforms, or trying to fit unique processes into rigid, one-size-fits-all solutions, we have solutions for you. We build custom web sites and tools that actually work the way you do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              onMouseMove={handleGlow}
              className="cursor-glow bg-slate-900 p-8 rounded-xl border border-white/20"
            >
              <div className="w-12 h-12 bg-[color:var(--brand-primary)] rounded-lg flex items-center justify-center mb-4">
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="text-slate-100 text-2xl mb-3">
                {value.title}
              </h3>
              <p className="text-slate-300">
                {value.description}
              </p>
              <ul className="mt-4 list-disc list-outside pl-5 text-slate-400 space-y-1">
                {value.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]"></span>
                    <span className="flex-1 min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
