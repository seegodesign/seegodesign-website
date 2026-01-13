'use client';

import { useInViewOnce } from '../hooks/useInViewOnce';
import { Compass, Sparkles, Settings, Pencil } from 'lucide-react';

type ProcessProps = {
  isLoading: boolean;
};

export function Process({ isLoading }: ProcessProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;

  const handleGlow = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty('--glow-x', `${x}px`);
    event.currentTarget.style.setProperty('--glow-y', `${y}px`);
  };

  const steps = [
    {
      icon: Compass,
      eyebrow: 'Typical starting point',
      title: 'Discovery & Planning',
      description:
        'First we seek to understand your goals and requirements. Through research and analysis, we create a tailored plan to guide the project from start to finish.',
    },
    {
      icon: Pencil,
      eyebrow: 'Shaping the vision',
      title: 'Design & Prototyping',
      description:
        'We develop wireframes and prototypes to visualize the user experience and interface. This phase focuses on usability, aesthetics, and aligning with your brand identity.',
    },
    {
      icon: Settings,
      eyebrow: 'Bringing it all together',
      title: 'Development & QA',
      description:
        'Using an agile approach, we build the product in iterations, allowing for regular feedback and adjustments. Rigorous testing ensures quality and performance before launch.',
    },
    {
      icon: Sparkles,
      eyebrow: 'Final step',
      title: 'Launch & Support',
      description:
        'After deployment, we provide ongoing support and maintenance to ensure the product remains effective and up-to-date, helping you achieve long-term success.',
    }
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-800 min-h-screen flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1638262052640-82e94d64664a)' }}
      />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className={`max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
            Our Process
          </h2>
            <p className="text-slate-300 text-lg md:text-xl">
            Our typical client project process begins with a discovery and planning phase to understand your goals and requirements. Next, we move into design and prototyping, followed by iterative development with regular feedback. After thorough testing and quality assurance, we launch your project and provide ongoing support and maintenance to ensure long-term success.
            </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              onMouseMove={handleGlow}
              className="cursor-glow rounded-2xl border border-white/10 bg-slate-900/70 p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-primary)]/15 text-[color:var(--brand-primary)]">
                <step.icon size={24} />
              </div>
              <p className="text-sm uppercase tracking-[0.1em] text-slate-400 mb-4">
                {step.eyebrow}
              </p>
              <h3 className="text-slate-100 text-2xl mb-3">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
              {/* <a href={`#contact`} className="mt-6 inline-block text-[color:var(--brand-primary)] hover:underline">
                I'm interested &rarr;
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
