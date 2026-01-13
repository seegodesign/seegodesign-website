import { Check } from 'lucide-react';
import { ONE_DAY_WEBSITE_DEPOSIT_PRICE, ONE_DAY_WEBSITE_FIX_PRICE } from '../../../library/constants';

interface ConfirmationPageProps {
  onBackToResults: () => void;
}

export function ConfirmationPage({ onBackToResults }: ConfirmationPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div
          className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center"
          style={{ backgroundColor: 'var(--engine-success-bg)' }}
        >
          <Check className="w-10 h-10" style={{ color: 'var(--engine-success)' }} />
        </div>

        {/* Main Message */}
        <h1
          className="text-4xl sm:text-5xl font-semibold mb-6"
          style={{ color: 'var(--engine-text)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
        >
          Thanks — You're Reserved!
        </h1>

        <p className="text-xl mb-12" style={{ color: 'var(--engine-text-strong)', lineHeight: '1.7' }}>
          Next, we'll confirm scope and schedule your day.
        </p>

        {/* What Happens Next */}
        <div
          className="p-8 rounded-xl mb-8 text-left"
          style={{
            backgroundColor: 'var(--engine-card-soft)',
            border: '2px solid var(--engine-border)'
          }}
        >
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--engine-text)' }}>
            What Happens Next
          </h2>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--engine-primary)', color: 'var(--engine-primary-contrast)' }}
              >
                1
              </span>
              <div>
                <p style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>
                  <strong>You'll receive a confirmation email</strong> with next steps within 24 hours
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--engine-primary)', color: 'var(--engine-primary-contrast)' }}
              >
                2
              </span>
              <div>
                <p style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>
                  <strong>We'll review your priorities</strong> and send a pre-day questionnaire to align on scope
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--engine-primary)', color: 'var(--engine-primary-contrast)' }}
              >
                3
              </span>
              <div>
                <p style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>
                  <strong>You'll choose your VIP day</strong> from available dates (typically 2-4 weeks out)
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{ backgroundColor: 'var(--engine-primary)', color: 'var(--engine-primary-contrast)' }}
              >
                4
              </span>
              <div>
                <p style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>
                  <strong>Your fixes go live</strong> by end of day—no waiting, no back-and-forth
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Deposit Info */}
        <div
          className="p-6 rounded-lg mb-8"
          style={{
            backgroundColor: 'var(--engine-warning-bg)',
            border: '2px solid var(--engine-warning)'
          }}
        >
          <p className="text-sm" style={{ color: 'var(--engine-text-strong)', lineHeight: '1.6' }}>
            Your <strong>$500 deposit is non-refundable</strong> and reserves your spot. The remaining balance (${ONE_DAY_WEBSITE_FIX_PRICE - ONE_DAY_WEBSITE_DEPOSIT_PRICE}) is due before your scheduled VIP day.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onBackToResults}
          className="inline-flex items-center gap-2 transition-colors"
          style={{ color: 'var(--engine-primary)', fontWeight: '500' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--engine-primary-strong)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--engine-primary)'}
        >
          ← Back to Your Priorities
        </button>

        {/* Footer */}
        <p className="mt-8 text-sm" style={{ color: 'var(--engine-text-muted)' }}>
          Questions? Email{' '}
          <a href="mailto:hello@yourdomain.com" style={{ color: 'var(--engine-primary)', textDecoration: 'underline' }}>
            hello@yourdomain.com
          </a>
        </p>
      </div>
    </div>
  );
}
