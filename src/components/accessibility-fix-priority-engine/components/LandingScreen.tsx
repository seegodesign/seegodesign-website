interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl text-center">
        <p
          className="text-sm uppercase tracking-[0.35em] mb-4"
          style={{ color: 'var(--engine-text-muted)' }}
        >
          Accessibility Fix Priorities
        </p>
        <h1
          className="text-4xl sm:text-5xl font-semibold mb-6"
          style={{ color: 'var(--engine-text)', lineHeight: '1.2' }}
        >
          Find the top 3 accessibility fixes that reduce legal risk fast.
        </h1>
        <p
          className="text-lg mb-8"
          style={{ color: 'var(--engine-text-strong)', lineHeight: '1.7' }}
        >
          Answer 10 quick questions and get a prioritized action plan built from WCAG, ADA, and Section 508
          compliance best practices.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
          style={{ backgroundColor: 'var(--engine-cta)' }}
        >
          Start the audit
        </button>
      </div>
    </div>
  );
}
