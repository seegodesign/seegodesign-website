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
        <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-emerald-200 mt-4 mb-6 pb-4">
          Thanks for your purchase! Let&apos;s get started on identifying your top accessibility fixes.
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
          className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 text-[color:var(--brand-primary-dark)] bg-[color:var(--brand-primary)]"
        >
          Let&apos;s Begin
        </button>
      </div>
    </div>
  );
}
