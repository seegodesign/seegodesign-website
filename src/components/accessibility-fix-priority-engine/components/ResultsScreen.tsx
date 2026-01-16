import type { Answers } from '../types';
import { calculatePriorities } from '../utils/scoring';

interface ResultsScreenProps {
  answers: Answers;
  onRestart: () => void;
}

export function ResultsScreen({ answers, onRestart }: ResultsScreenProps) {
  const priorities = calculatePriorities(answers);

  return (
    <div className="min-h-screen p-10 sm:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-4"
            style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Your Top 3 Accessibility Fixes
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', fontWeight: '400' }}
          >
            These priorities reduce compliance risk and improve usability the fastest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110"
              style={{ backgroundColor: 'var(--engine-cta)' }}
            >
              Book a compliance audit
            </button>
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] transition"
              style={{
                border: '2px solid var(--engine-border)',
                color: 'var(--engine-text-muted)',
                backgroundColor: 'var(--engine-card-bg)',
              }}
            >
              Restart questionnaire
            </button>
          </div>
        </div>

        <div className="space-y-5">
          {priorities.map((priority, index) => (
            <div
              key={priority.id}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: index === 0 ? 'var(--engine-highlight-bg)' : 'var(--engine-card-bg)',
                border: `2px solid ${index === 0 ? 'var(--engine-primary)' : 'var(--engine-border)'}`,
                boxShadow: index === 0
                  ? '0 18px 30px rgba(10, 18, 30, 0.4)'
                  : '0 10px 20px rgba(10, 18, 30, 0.3)',
              }}
            >
              <div className="p-8">
                <div className="flex items-start gap-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold"
                    style={{
                      backgroundColor: index === 0 ? 'var(--engine-primary)' : 'var(--engine-text-muted)',
                      color: 'var(--engine-primary-contrast)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-semibold mb-3"
                      style={{ color: 'var(--engine-text)', lineHeight: '1.3' }}
                    >
                      {priority.title}
                    </h3>
                    <p
                      className="mb-5"
                      style={{ color: 'var(--engine-text-strong)', lineHeight: '1.7', fontSize: '1.0625rem' }}
                    >
                      {priority.why}
                    </p>
                    <div className="flex gap-2 mb-5">
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold"
                        style={{
                          backgroundColor:
                            priority.impact === 'High' ? 'var(--engine-success-bg)' : 'var(--engine-warning-bg)',
                          color: priority.impact === 'High' ? 'var(--engine-success)' : 'var(--engine-warning)',
                        }}
                      >
                        {priority.impact} Impact
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold"
                        style={{
                          backgroundColor:
                            priority.effort === 'Low' ? 'var(--engine-card-soft)' : 'var(--engine-warning-bg)',
                          color: priority.effort === 'Low' ? 'var(--engine-text-muted)' : 'var(--engine-warning)',
                        }}
                      >
                        {priority.effort} Effort
                      </span>
                    </div>
                    <div
                      className="rounded-lg border p-4"
                      style={{
                        backgroundColor: 'var(--engine-card-soft)',
                        borderColor: 'var(--engine-border)',
                      }}
                    >
                      <h4
                        className="text-xs uppercase tracking-[0.2em] mb-2"
                        style={{ color: 'var(--engine-text-muted)' }}
                      >
                        Recommended Actions
                      </h4>
                      <ul className="space-y-2">
                        {priority.actions.map((action) => (
                          <li
                            key={action}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'var(--engine-primary)' }} />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm" style={{ color: 'var(--engine-text-muted)' }}>
            Want help executing these? We deliver audits, remediation sprints, and compliance documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
