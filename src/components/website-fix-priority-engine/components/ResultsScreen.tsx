import { useState } from 'react';
import { ArrowRight, RefreshCw, ChevronDown, ChevronUp, Download, X, Check } from 'lucide-react';
import type { Answers } from '@/components/website-fix-priority-engine/types';
import { calculatePriorities } from '@/components/website-fix-priority-engine/utils/scoring';
import { generatePDFSummary } from '@/components/website-fix-priority-engine/utils/pdfGenerator';
import { ONE_DAY_WEBSITE_FIX_PRICE } from '@/library/constants';

interface ResultsScreenProps {
  answers: Answers;
  onRestart: () => void;
  onViewVIPDay: () => void;
}

export function ResultsScreen({ answers, onRestart, onViewVIPDay }: ResultsScreenProps) {
  const priorities = calculatePriorities(answers);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const comparisonRows = [
    {
      label: 'Time',
      diy: 'Several weeks of scattered effort',
      oneDay: '1 focused day, live by 5pm',
    },
    {
      label: 'Risk',
      diy: 'Wrong priorities, half-finished fixes',
      oneDay: 'Low (proven process, expert execution)',
    },
    {
      label: 'Outcome',
      diy: 'Partial improvements, unclear results',
      oneDay: 'Fully implemented and tested',
    },
  ];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleDownloadPDF = () => {
    generatePDFSummary(priorities);
  };

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-4"
            style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Your Top 3 Website Fixes
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', fontWeight: '400' }}
          >
            Based on your answers, here&apos;s the highest-impact place to focus first.
          </p>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all"
            style={{
              border: '2px solid var(--engine-primary)',
              color: 'var(--engine-primary)',
              backgroundColor: 'var(--engine-card-bg)'
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

        {/* Priority Cards */}
        <div className="space-y-5 mb-16">
          {priorities.map((priority, index) => (
            <div
              key={priority.id}
              className="rounded-xl overflow-hidden transition-all duration-200"
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
                      color: 'var(--engine-primary-contrast)'
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
                          color: priority.impact === 'High' ? 'var(--engine-success)' : 'var(--engine-warning)'
                        }}
                      >
                        {priority.impact} Impact
                      </span>
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold"
                        style={{
                          backgroundColor:
                            priority.effort === 'Low' ? 'var(--engine-card-soft)' : 'var(--engine-warning-bg)',
                          color: priority.effort === 'Low' ? 'var(--engine-text-muted)' : 'var(--engine-warning)'
                        }}
                      >
                        {priority.effort} Effort
                      </span>
                    </div>

                    {/* Avoid This Section */}
                    <div
                      className="mb-5 p-4 rounded-lg"
                      style={{
                        backgroundColor: index === 0 ? 'var(--engine-card-bg)' : 'var(--engine-card-soft)',
                        border: '1px solid var(--engine-border)',
                      }}
                    >
                      <h4
                        className="text-sm font-semibold mb-2"
                        style={{ color: 'var(--engine-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                      >
                        Avoid This:
                      </h4>
                      <ul className="space-y-1.5">
                        {priority.avoidThis.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}
                          >
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--engine-danger)' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Read More Button */}
                    <button
                      onClick={() => toggleExpanded(priority.id)}
                      className="inline-flex items-center gap-2 font-semibold transition-colors"
                      style={{ color: 'var(--engine-primary)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--engine-primary-strong)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--engine-primary)'}
                    >
                      {expandedIds.has(priority.id) ? (
                        <>
                          Read Less
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIds.has(priority.id) && (
                <div className="px-8 pb-8 pt-0">
                  <div className="pl-16 ml-1" style={{ borderLeft: `3px solid var(--engine-border)` }}>
                    <div className="prose prose-neutral max-w-none">
                      {priority.detailedContent.map((section, idx) => (
                        <div key={idx} className="mb-5">
                          <h4
                            className="mb-2 text-xs uppercase tracking-[0.2em]"
                            style={{ color: 'var(--engine-text-muted)' }}
                          >
                            {section.heading}
                          </h4>
                          <p style={{ color: 'var(--engine-text-strong)', lineHeight: '1.8', fontSize: '1rem' }}>
                            {section.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* DIY vs One-Day Fix Comparison Table */}
        <div className="my-16">
          <h2 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--engine-text)' }}>
            If You Do This Yourself vs. If I Do This For You
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
                  <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--engine-text-muted)' }}>
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
                        One-Day Fix
                      </p>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-1" style={{ color: 'var(--engine-primary)' }} />
                        <p className="text-base font-semibold" style={{ color: 'var(--engine-text-strong)' }}>
                          {row.oneDay}
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
                      One-Day Fix
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
                            {row.oneDay}
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

        {/* Common Mistakes Section */}
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
            <div className="flex items-start gap-2">
              <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                  Fixing speed before clarity
                </p>
                <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  A fast website that confuses visitors still won&apos;t convert. Message clarity comes first, then performance optimization.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                  Running ads to a weak homepage
                </p>
                <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Paid traffic amplifies whatever experience you currently have. Fix the conversion bottlenecks before spending on ads.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                  Hiring a designer before defining goals
                </p>
                <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  A beautiful redesign without strategic direction just makes a prettier version of the same problems. Strategy first, design second.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                  Trying to fix everything at once
                </p>
                <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Scattered effort across multiple areas produces scattered results. Focus on high-impact priorities sequentially for measurable progress.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-xl" style={{ color: 'var(--engine-warning)' }}>⚠️</span>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--engine-text-strong)' }}>
                  Making changes without tracking results
                </p>
                <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Without baseline metrics, you can&apos;t know if your changes actually improved performance. Set up tracking, then optimize.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Social Proof Section */}
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
            These priorities reflect the same patterns Isee across dozens of small business websites.
          </p>
          <p
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}
          >
            Most service-based businesses struggle with the same core issues: unclear messaging that assumes visitors already understand what you do, CTAs that blend into the page instead of guiding action, and mobile experiences that frustrate the majority of your traffic. The good news is that these are known problems with known solutions. You are not starting from scratch—you are following a proven path that works because it addresses how real visitors actually use websites.
          </p>
        </div>

        {/* Simplified Upsell Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: 'var(--engine-text)', lineHeight: '1.3' }}>
            Want This Done For You?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7' }}
          >
            Get all three priorities implemented in one focused day—no dragging projects, no endless revisions. Only ${ONE_DAY_WEBSITE_FIX_PRICE} to transform your website and start seeing real results.
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

        {/* Footer Actions */}
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

        {/* Disclaimer */}
        <p className="text-center text-xs" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
          *This prioritization is based on your responses and reflects common high-impact patterns. It is intended to guide next steps, not replace a full technical audit.
        </p>
      </div>
    </div>
  );
}
