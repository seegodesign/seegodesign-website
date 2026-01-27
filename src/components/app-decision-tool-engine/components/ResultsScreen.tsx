import { useState } from 'react';
import { ArrowRight, Download, RefreshCw } from 'lucide-react';
import type { Answers } from '@/components/app-decision-tool-engine/types';
import { calculateAppDecisionResults } from '@/components/app-decision-tool-engine/utils/scoring';
import { generateAppDecisionPDF } from '@/components/app-decision-tool-engine/utils/pdfGenerator';
import { APP_DECISION_TOOL_PRODUCT_PRICE } from '@/library/constants';

interface ResultsScreenProps {
  answers: Answers;
  onRestart: () => void;
}

export function ResultsScreen({ answers, onRestart }: ResultsScreenProps) {
  const results = calculateAppDecisionResults(answers);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleDownloadPDF = () => {
    generateAppDecisionPDF(results);
  };

  const handleStripeCheckout = () => {
    const redirectToCheckout = async () => {
      try {
        setIsRedirecting(true);
        const origin = window.location.origin;
        const response = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            successUrl: `${origin}/services/app-development?status=success`,
            cancelUrl: `${origin}/tools/app-decision-tool?cancel=1`,
            notes: `App Decision Tool: ${results.summary} | Readiness ${results.readinessScore}/100 | Complexity ${results.complexityTier}`,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create checkout session.');
        }

        const data = (await response.json()) as { url?: string };
        if (!data.url) {
          throw new Error('Missing checkout session URL.');
        }

        window.location.href = data.url;
      } catch (error) {
        console.error(error);
        alert('Stripe checkout failed. Please try again.');
        setIsRedirecting(false);
      }
    };

    void redirectToCheckout();
  };

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-4"
            style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Your App Decision Snapshot
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', fontWeight: '400' }}
          >
            Here is your readiness score, complexity tier, and the risks to address before you build.
          </p>

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
            Download PDF Summary
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 mb-12">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: 'var(--engine-card-bg)', border: '1px solid var(--engine-border)' }}
          >
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--engine-text-muted)' }}>
              App Summary
            </p>
            <p className="mt-4 text-lg" style={{ color: 'var(--engine-text-strong)', lineHeight: '1.7' }}>
              {results.summary}
            </p>
            <div
              className="mt-6 grid gap-4"
              style={{ color: 'var(--engine-text-muted)' }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--engine-primary)' }} />
                <p className="text-sm" style={{ lineHeight: '1.7' }}>
                  This summary reflects your current inputs across scope, users, and technical readiness.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--engine-primary)' }} />
                <p className="text-sm" style={{ lineHeight: '1.7' }}>
                  Use the readiness score and complexity tier as guardrails for budget, timeline, and MVP focus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--engine-primary)' }} />
                <p className="text-sm" style={{ lineHeight: '1.7' }}>
                  If any answer changes, rerun the tool to compare outcomes before committing to build.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--engine-highlight-bg)', border: '1px solid var(--engine-border)' }}
            >
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--engine-text)' }}>
                Readiness Score
              </p>
              <p className="mt-3 text-3xl font-semibold" style={{ color: 'var(--engine-text)' }}>
                {results.readinessScore}/100
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--engine-text-muted)' }}>
                {results.readinessScore >= 70
                  ? 'You are closer to a build-ready scope than most first-time founders.'
                  : results.readinessScore >= 55
                    ? 'You are approaching build readiness, but a few gaps need tightening.'
                    : 'Key inputs are still missing. Address them before a full build.'}
              </p>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--engine-card-bg)', border: '1px solid var(--engine-border)' }}
            >
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--engine-text-muted)' }}>
                Complexity Tier
              </p>
              <p className="mt-3 text-3xl font-semibold" style={{ color: 'var(--engine-text)' }}>
                {results.complexityTier}
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--engine-text-muted)' }}>
                {results.complexityTier === 'High'
                  ? 'Expect more planning, more edge cases, and higher budgets.'
                  : results.complexityTier === 'Medium'
                    ? 'Balanced scope, but MVP discipline will decide the timeline.'
                    : 'Lean scope with fewer unknowns to manage.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: 'var(--engine-card-soft)', border: '1px solid var(--engine-border)' }}
          >
            <h2 className="text-xl font-semibold" style={{ color: 'var(--engine-text)' }}>
              Primary Risk Flags
            </h2>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: 'var(--engine-text-muted)' }}>
              {results.riskFlags.map((risk) => (
                <li key={risk} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--engine-warning)' }} />
                  <span>{risk}</span>
                </li>
              ))}
              {results.riskFlags.length === 0 && <li>No significant risk flags detected. You are in a strong position to proceed.</li>}
            </ul>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: 'var(--engine-card-bg)', border: '1px solid var(--engine-border)' }}
          >
            <h2 className="text-xl font-semibold" style={{ color: 'var(--engine-text)' }}>
              What This Means
            </h2>
            <div className="mt-5 space-y-4 text-sm" style={{ color: 'var(--engine-text-muted)' }}>
              {results.insights.map((insight) => (
                <div key={insight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--engine-primary)' }} />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl p-8 text-center mb-14"
          style={{ backgroundColor: 'var(--engine-warning-bg)', border: '2px solid var(--engine-warning)' }}
        >
          <p className="text-xs uppercase tracking-[0.25em]" style={{ color: 'var(--engine-text-muted)' }}>
            Recommended Next Step
          </p>
          <h2 className="text-3xl font-semibold mt-4" style={{ color: 'var(--engine-text)' }}>
            {results.recommendedNextStep}
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
            Irecommend focusing here before committing full build budget. It protects scope and shortens timelines.
          </p>
        </div>

        <div
          className="rounded-2xl p-10 text-center mb-12"
          style={{ backgroundColor: 'var(--engine-card-bg)', border: '1px solid var(--engine-border)' }}
        >
          <h2 className="text-3xl font-semibold mb-4" style={{ color: 'var(--engine-text)' }}>
            Want help with your app?
          </h2>
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7' }}
          >
            Ican help with your next steps. Your ${APP_DECISION_TOOL_PRODUCT_PRICE} diagnostic is credited toward the planning session.
          </p>
          <button
            onClick={handleStripeCheckout}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-md hover:shadow-lg mb-4 disabled:cursor-not-allowed disabled:opacity-70"
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
            disabled={isRedirecting}
            aria-busy={isRedirecting}
          >
            {isRedirecting ? 'Redirecting to checkout...' : 'Reserve a Build Planning Slot'}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs" style={{ color: 'var(--engine-text-muted)' }}>
            Stripe checkout - confirmation link with next steps.
          </p>
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
          *This diagnostic is advisory. It reflects common patterns in early-stage app builds, not a full technical spec.
        </p>
      </div>
    </div>
  );
}
