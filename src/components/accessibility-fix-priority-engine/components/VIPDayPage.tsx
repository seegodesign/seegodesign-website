import { useState } from 'react';
import { ArrowRight, Check, Shield, Zap, Calendar } from 'lucide-react';
import type { Priority } from '@/components/accessibility-fix-priority-engine/types';

interface VIPDayPageProps {
  priorities: Priority[];
  onBack: () => void;
}

export function VIPDayPage({ priorities, onBack }: VIPDayPageProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleStripeCheckout = () => {
    const redirectToCheckout = async () => {
      try {
        setIsRedirecting(true);
        const origin = window.location.origin;
        const response = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            successUrl: `${origin}/services/accessibility-compliance?status=success`,
            cancelUrl: `${origin}/services/accessibility-compliance?status=cancel`,
            notes: priorities.map((priority) => priority.title).join(', '),
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
    <div className="min-h-screen px-4 py-4 md:py-16">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 transition-colors"
          style={{ color: 'var(--engine-text-muted)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--engine-text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--engine-text-muted)'}
        >
          ← Back to Results
        </button>

        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-4"
            style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Accessibility Remediation Sprint
          </h1>
          <p
            className="text-xl"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}
          >
            Fix your highest-risk accessibility issues in a focused sprint with clear documentation and retesting.
          </p>
        </div>

        <div
          className="mb-12 p-8 rounded-xl"
          style={{ backgroundColor: 'var(--engine-card-soft)', border: '2px solid var(--engine-border)' }}
        >
          <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--engine-text)' }}>
            Based on Your Answers
          </h2>
          <p className="text-lg mb-6" style={{ color: 'var(--engine-text-strong)', lineHeight: '1.7' }}>
            Here are the top accessibility priorities we would tackle first.
          </p>

          <div className="space-y-3">
            {priorities.map((priority, index) => (
              <div key={priority.id} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ backgroundColor: 'var(--engine-primary)', color: 'var(--engine-primary-contrast)' }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--engine-text)' }}>
                    {priority.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                    {priority.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12 py-6">
          <p className="text-xl font-medium" style={{ color: 'var(--engine-text-muted)', fontStyle: 'italic' }}>
            You have the priorities. Now get a compliant, test-ready experience with less risk.
          </p>
        </div>

        <div
          className="rounded-xl p-10 mb-12"
          style={{
            backgroundColor: 'var(--engine-warning-bg)',
            border: '2px solid var(--engine-warning)'
          }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: 'var(--engine-text)' }}>
            What You Get in the Remediation Sprint
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--engine-text)' }}>
              What IFix
            </h3>
            <div className="space-y-3">
              {[
                'Keyboard navigation and focus visibility',
                'Form labels, error summaries, and input guidance',
                'Color contrast and visual hierarchy',
                'ARIA roles, states, and dynamic announcements',
                'Critical-page audit documentation with screenshots',
                'Verification testing with assistive tech',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--engine-primary)' }} />
                  <span style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left" style={{ color: 'var(--engine-text)' }}>
              Why a Sprint Works
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Zap className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Focused Remediation</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  I prioritize the highest-risk issues first.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Shield className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Compliance Proof</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Clear documentation and evidence for legal review.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Calendar className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Fast Turnaround</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Fixes and retesting delivered on a clear timeline.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--engine-card-bg)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--engine-text)' }}>
              What You Avoid
            </h3>
            <ul className="space-y-2">
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Unclear compliance ownership</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Risky changes without validation</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Documentation gaps during legal review</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Regressions after the fixes ship</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={handleStripeCheckout}
              disabled={isRedirecting}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-lg text-xl font-semibold transition-all shadow-lg hover:shadow-xl mb-4"
              style={{
                backgroundColor: 'var(--engine-cta)',
                color: 'var(--engine-primary-contrast)',
              }}
              aria-disabled={isRedirecting}
              onMouseEnter={(e) => {
                if (isRedirecting) return;
                e.currentTarget.style.backgroundColor = 'var(--engine-cta-hover)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                if (isRedirecting) return;
                e.currentTarget.style.backgroundColor = 'var(--engine-cta)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isRedirecting ? 'Redirecting...' : 'Book a remediation sprint'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
              I will scope the sprint, confirm risk areas, and ship verified fixes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
