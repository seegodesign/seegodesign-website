import { useState } from 'react';
import type { PaidToolKey } from '@/lib/paidToolConfig';
import { getToolProductMetadata, trackEvent } from '@/lib/analytics';

export const usePaidToolCheckout = (tool: PaidToolKey, cancelPath: string) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const startCheckout = () => {
    const redirectToCheckout = async () => {
      try {
        setIsRedirecting(true);
        const item = getToolProductMetadata(tool);
        trackEvent('begin_checkout', {
          event_category: 'ecommerce',
          event_label: tool,
          value: item.price,
          currency: 'USD',
          items: [
            {
              item_id: item.item_id,
              item_name: item.item_name,
              price: item.price,
              quantity: 1,
            },
          ],
        });
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
