import { useState } from 'react';
import { ArrowRight, Check, Zap, Shield, Calendar } from 'lucide-react';
import type { Priority } from '../utils/scoring';
// Update the path below to the correct relative path from this file to constants.ts
import { ONE_DAY_WEBSITE_DEPOSIT_PRICE, ONE_DAY_WEBSITE_FIX_PRICE } from '../../../library/constants';

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
            successUrl: `${origin}/services/website-optimization?status=success`,
            cancelUrl: `${origin}/services/website-optimization?status=cancel`,
            notes: priorities.map(p => p.title).join(', ')
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
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 transition-colors"
          style={{ color: 'var(--engine-text-muted)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--engine-text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--engine-text-muted)'}
        >
          ← Back to Results
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-semibold mb-4"
            style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            One-Day Website Fix
          </h1>
          <p
            className="text-xl"
            style={{ color: 'var(--engine-text-muted)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}
          >
            Get your highest-impact website fixes implemented in a single focused day—no dragging projects or endless revisions.
          </p>
        </div>

        {/* VIP Day Offer */}
        <div
          className="rounded-xl p-10 mb-12"
          style={{
            backgroundColor: 'var(--engine-warning-bg)',
            border: '2px solid var(--engine-warning)'
          }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: 'var(--engine-text)' }}>
            What You Get in Your VIP Fix Day
          </h2>

          {/* What Gets Fixed */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--engine-text)' }}>
              What We&apos;ll Fix
            </h3>
            <div className="space-y-3">
              {[
                'Implementation of your top 3 priority fixes',
                'Mobile optimization and responsive design adjustments',
                'Page speed improvements and performance optimization',
                'Clear call-to-action placement and design',
                'Homepage messaging clarity and structure',
                'Basic conversion tracking setup (if needed)',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--engine-primary)' }} />
                  <span style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why One Day Works */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--engine-text)' }}>
              Why One Day Works
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Zap className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Focused Intensity</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  Dedicated time means faster decisions and immediate results
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Shield className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Clear Scope</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  No scope creep—we tackle the highest-impact fixes only
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--engine-primary)' }}
                >
                  <Calendar className="w-6 h-6" style={{ color: 'var(--engine-primary-contrast)' }} />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text-strong)' }}>Real Completion</h4>
                <p className="text-sm" style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
                  You end the day with improvements live, not &ldquo;in progress&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* What You Avoid */}
          <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: 'var(--engine-card-bg)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--engine-text)' }}>
              What You Avoid
            </h3>
            <ul className="space-y-2">
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Dragging projects that take weeks or months</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Endless back-and-forth emails and revisions</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Scope creep and budget overruns</li>
              <li style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>❌ Technical jargon you do not understand</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={handleStripeCheckout}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-lg text-xl font-semibold transition-all shadow-lg hover:shadow-xl mb-4 disabled:cursor-not-allowed disabled:opacity-70"
              style={{
                backgroundColor: 'var(--engine-cta)',
                color: 'var(--engine-primary-contrast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--engine-cta-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--engine-cta)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              disabled={isRedirecting}
              aria-busy={isRedirecting}
            >
              {isRedirecting ? 'Redirecting to checkout...' : 'Reserve Your VIP Day'}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm mb-4" style={{ color: 'var(--engine-text-muted)' }}>
              ${ONE_DAY_WEBSITE_DEPOSIT_PRICE} non-refundable deposit (Total: ${ONE_DAY_WEBSITE_FIX_PRICE})
            </p>
            <p className="text-xs" style={{ color: 'var(--engine-text-muted)' }}>
              Remaining ${ONE_DAY_WEBSITE_FIX_PRICE - ONE_DAY_WEBSITE_DEPOSIT_PRICE} due before your scheduled VIP day
            </p>
          </div>
        </div>

        {/* Risk Reducers */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div
            className="p-6 rounded-xl text-center h-full"
            style={{ backgroundColor: 'var(--engine-card-soft)', border: '2px solid var(--engine-border)' }}
          >
            <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text)' }}>
              🗓️ Limited Spots Per Month
            </h4>
            <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
              We only take 4 VIP days per month to ensure quality and focus. Book early to secure your spot.
            </p>
          </div>

          <div
            className="p-6 rounded-xl text-center h-full"
            style={{ backgroundColor: 'var(--engine-card-soft)', border: '2px solid var(--engine-border)' }}
          >
            <h4 className="font-semibold mb-2" style={{ color: 'var(--engine-text)' }}>
              ✅ Clear Scope & Process
            </h4>
            <p style={{ color: 'var(--engine-text-muted)', lineHeight: '1.6' }}>
              Pre-day questionnaire ensures we&apos;re aligned. Day-of access to a shared workspace keeps you in the loop without interrupting flow.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center" style={{ color: 'var(--engine-text-muted)', fontSize: '0.875rem' }}>
          <p>
            Questions? {' '}
            <a
              href="/contact"
              style={{ color: 'var(--engine-primary)', textDecoration: 'underline' }}
            >
              Contact us here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
