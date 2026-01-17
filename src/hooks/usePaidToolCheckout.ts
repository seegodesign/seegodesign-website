import { useState } from 'react';
import type { PaidToolKey } from '../lib/paidToolConfig';

export const usePaidToolCheckout = (tool: PaidToolKey, cancelPath: string) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const startCheckout = () => {
    const redirectToCheckout = async () => {
      try {
        setIsRedirecting(true);
        const origin = window.location.origin;
        const response = await fetch('/api/stripe/paid-tool-checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tool,
            cancelUrl: `${origin}${cancelPath}`,
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

  return { isRedirecting, startCheckout };
};
