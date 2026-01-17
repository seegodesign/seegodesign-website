import { ArrowRight } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full text-center min-h-[500px] flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-200 mt-4 mb-6 pb-4">
          Thank you for your purchase! Let's get started.
        </h1>

        <p
          className="text-xl mb-12"
          style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', fontWeight: '400' }}
        >
          Answer a few questions and get a clear, prioritized action plan in minutes.
        </p>

        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-sm hover:shadow-md"
          style={{
            backgroundColor: 'var(--engine-cta)',
            color: 'var(--engine-primary-contrast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--engine-cta-hover)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--engine-cta)'}
        >
          Get My Priorities
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}
