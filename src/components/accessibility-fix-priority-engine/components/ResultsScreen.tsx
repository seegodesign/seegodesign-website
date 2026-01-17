import { ArrowRight, Check, Download, RefreshCw } from 'lucide-react';
import type { Answers } from '../types';
import { calculatePriorities } from '../utils/scoring';
import { generatePDFSummary } from '../utils/pdfGenerator';

interface ResultsScreenProps {
  answers: Answers;
  onRestart: () => void;
  onViewVIPDay: () => void;
}

export function ResultsScreen({ answers, onRestart, onViewVIPDay }: ResultsScreenProps) {
  const priorities = calculatePriorities(answers);
  const comparisonRows = [
    {
      label: 'Time',
      diy: 'Weeks of manual checks and rework',
      doneForYou: 'Structured sprint with clear milestones',
    },
    {
      label: 'Risk',
      diy: 'Missed WCAG issues or incomplete fixes',
      doneForYou: 'Risk reduced with expert testing',
    },
    {
      label: 'Outcome',
      diy: 'Partial compliance, unclear documentation',
      doneForYou: 'Verified fixes + audit-ready evidence',
    },
  ];

  const handleDownloadPDF = () => {
    generatePDFSummary(priorities);
  };

  return (
    <div className="min-h-screen p-5 sm:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4 md:mb-12">
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
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all mb-6"
            style={{
              border: '2px solid var(--engine-primary)',
              color: 'var(--engine-primary)',
              backgroundColor: 'var(--engine-card-bg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--engine-primary)';
              e.currentTarget.style.color = 'var(--engine-primary-contrast)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--engine-card-bg)';
              e.currentTarget.style.color = 'var(--engine-primary)';
            }}
          >
            <Download className="w-4 h-4" />
            Download One-Page Summary
          </button>
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
                <div className="flex flex-col items-start gap-5 md:flex-row">
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

        <div className="my-16">
          <h2 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--engine-text)' }}>
            If You Do This Yourself vs. If We Do This For You
          </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: '2px solid var(--engine-border)',
              backgroundColor: 'var(--engine-card-bg)',
            }}
          >
            <div className="md:hidden">
              {comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`px-6 py-5 ${index < comparisonRows.length - 1 ? 'border-b' : ''}`}
                  style={{ borderColor: 'var(--engine-border)' }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] mb-2 text-center md:text-left" style={{ color: 'var(--engine-text-muted)' }}>
                    {row.label}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--engine-text-muted)' }}>
                        DIY
                      </p>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-1" style={{ color: 'var(--engine-text-muted)' }} />
                        <p className="text-base" style={{ color: 'var(--engine-text-strong)' }}>
                          {row.diy}
                        </p>
                      </div>
                    </div>
                    <div
                      className="rounded-lg p-4"
                      style={{ backgroundColor: 'var(--engine-highlight-bg)', border: '1px solid var(--engine-border)' }}
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--engine-text)' }}>
                        Remediation Sprint
                      </p>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-1" style={{ color: 'var(--engine-primary)' }} />
                        <p className="text-base font-semibold" style={{ color: 'var(--engine-text-strong)' }}>
                          {row.doneForYou}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b" style={{ borderColor: 'var(--engine-border)' }}>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--engine-text-muted)' }}>
                      Category
                    </th>
                    <th className="px-6 py-4 text-sm uppercase tracking-[0.2em]" style={{ color: 'var(--engine-text-muted)' }}>
                      DIY
                    </th>
                    <th
                      className="px-6 py-4 text-sm uppercase tracking-[0.2em]"
                      style={{
                        color: 'var(--engine-text)',
                        backgroundColor: 'var(--engine-highlight-bg)',
                        borderLeft: '1px solid var(--engine-border)',
                      }}
                    >
                      Remediation Sprint
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.label} className={index < 2 ? 'border-b' : ''} style={{ borderColor: 'var(--engine-border)' }}>
                      <td
                        className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.2em]"
                        style={{ color: 'var(--engine-text-muted)' }}
                      >
                        {row.label}
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 mt-1" style={{ color: 'var(--engine-text-muted)' }} />
                          <p className="text-lg" style={{ color: 'var(--engine-text-strong)' }}>
                            {row.diy}
                          </p>
                        </div>
                      </td>
                      <td
                        className="px-6 py-5"
                        style={{ backgroundColor: 'var(--engine-highlight-bg)', borderLeft: '1px solid var(--engine-border)' }}
                      >
                        <div className="flex items-start gap-2">
                          <Check className="w-5 h-5 mt-1" style={{ color: 'var(--engine-primary)' }} />
                          <p className="text-lg font-semibold" style={{ color: 'var(--engine-text-strong)' }}>
                            {row.doneForYou}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="my-16 p-8 rounded-xl"
          style={{
            backgroundColor: 'var(--engine-warning-bg)',
            border: '2px solid var(--engine-warning)'
          }}
        >
          <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--engine-text)' }}>
            Common Mistakes People Make at This Stage
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Relying only on automated scanners',
                body: 'Automated tools miss real-world issues. Manual testing is required.',
              },
              {
                title: 'Fixing only the homepage',
                body: 'Risk often lives in forms, checkout, and account flows.',
              },
              {
                title: 'Skipping documentation',
                body: 'Without evidence, it is hard to prove compliance progress.',
              },
              {
                title: 'Shipping changes without retesting',
                body: 'Accessibility can regress quickly without validation.',
              },
              {
                title: 'Trying to fix everything at once',
                body: 'Focused remediation produces faster compliance wins.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-2">
                <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                    {item.title}
                  </p>
                  <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="my-16 p-8 rounded-xl text-center"
          style={{
            backgroundColor: 'var(--engine-card-soft)',
            border: '2px solid var(--engine-border)'
          }}
        >
          <p
            className="text-lg mb-4"
            style={{ color: 'var(--engine-text)', fontWeight: '500', lineHeight: '1.7' }}
          >
            These priorities reflect the most common accessibility complaints we see.
          </p>
          <p
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}
          >
            Keyboard traps, missing labels, and low-contrast UI are the top issues that trigger legal risk.
            Solve these first for the fastest compliance gains.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: 'var(--engine-text)', lineHeight: '1.3' }}>
            Want This Done For You?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7' }}
          >
            We implement the top fixes, document compliance, and retest with assistive tech so you can move
            forward with confidence.
          </p>
          <button
            onClick={onViewVIPDay}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-md hover:shadow-lg mb-6"
            style={{
              backgroundColor: 'var(--engine-cta)',
              color: 'var(--engine-primary-contrast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--engine-cta-hover)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--engine-cta)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--engine-text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--engine-text)' }
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--engine-text-muted)' }
          >
            <RefreshCw className="w-4 h-4" />
            Start Over
          </button>
        </div>

        <p className="text-center text-xs" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
          *This prioritization is based on your responses and reflects common high-impact patterns. It is intended to guide next steps, not replace a full audit.
        </p>
      </div>
    </div>
  );
}
