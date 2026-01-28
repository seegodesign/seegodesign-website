'use client';

import { useEffect } from 'react';
import type { PaidToolKey } from '@/lib/paidToolConfig';
import { getToolProductMetadata, trackConversion } from '@/lib/analytics';

type PaidToolSuccessTrackerProps = {
  tool: PaidToolKey;
  sessionId: string;
};

export const PaidToolSuccessTracker = ({ tool, sessionId }: PaidToolSuccessTrackerProps) => {
  useEffect(() => {
    const item = getToolProductMetadata(tool);
    trackConversion({
      transaction_id: sessionId,
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
  }, [sessionId]);

  return null;
};
