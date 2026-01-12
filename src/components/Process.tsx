import { useInViewOnce } from '../hooks/useInViewOnce';
import { Compass, Sparkles, Settings } from 'lucide-react';

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
      title: 'Stabilize first',
      description:
        'We map the full system, remove duplication, and fix brittle integrations so the business can operate without constant fire drills. This creates a solid foundation for future growth.',
    },
    {
      icon: Settings,
      eyebrow: 'Next phase',
      title: 'Optimize or Scale',
      description:
        'Once the foundation is stable, we automate and streamline what exists or redesign the platform for growth, migrations, and new product lines.',
    },
    {
      icon: Sparkles,
      eyebrow: 'Ongoing support',
      title: 'Maintain & Evolve',
      description:
        'We provide ongoing support, monitoring, and iterative improvements to ensure systems continue to perform as the business grows and changes.',
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
            How We Engage
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            Most engagements start with Stabilize to untangle what is brittle or fragmented. From
            there, we decide whether to Optimize what exists or Scale with a redesigned foundation.
            After launch, we provide ongoing maintenance to keep things running smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
              <a href={`#contact`} className="mt-6 inline-block text-[color:var(--brand-primary)] hover:underline">
                I'm interested &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
