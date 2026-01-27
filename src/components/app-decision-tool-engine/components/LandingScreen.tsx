interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="min-h-[760px] px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="text-xs uppercase tracking-[0.35em]"
          style={{ color: 'var(--engine-text-muted)' }}
        >
          App Decision Tool
        </span>
        <h1
          className="text-4xl md:text-5xl font-semibold mt-4 mb-6"
          style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
        >
          Thank you for your purchase!
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto"
          style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7' }}
        >
          Answer 14 fast questions to score readiness, complexity, and risk. We&apos;ll give you a clear next step and a one-page PDF summary.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          {[
            {
              title: 'Readiness score',
              body: 'Know if your idea is ready for a full build or needs validation first.',
            },
            {
              title: 'Complexity tier',
              body: 'Understand what will drive cost, timeline, and technical risk.',
            },
            {
              title: 'Action plan',
              body: 'Walk away with a recommended path that saves time and money.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5"
              style={{ backgroundColor: 'var(--engine-card-bg)', border: '1px solid var(--engine-border)' }}
            >
              <h3 className="text-lg font-semibold" style={{ color: 'var(--engine-text)' }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={onStart}
            className="button"
          >
            Start the diagnostic
          </button>
          <p className="mt-4 text-xs text-[color:var(--engine-text-muted)]">
            Takes about 3-5 minutes. You can download a PDF at the end.
          </p>
        </div>
      </div>
    </div>
  );
}
