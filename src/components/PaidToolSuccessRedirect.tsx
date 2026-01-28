'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { PaidToolKey } from '@/lib/paidToolConfig';
import { PaidToolSuccessTracker } from '@/components/PaidToolSuccessTracker';

type PaidToolSuccessRedirectProps = {
  tool: PaidToolKey;
  sessionId: string;
  redirectUrl: string;
  isPaid: boolean;
};

export const PaidToolSuccessRedirect = ({
  tool,
  sessionId,
  redirectUrl,
  isPaid,
}: PaidToolSuccessRedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      router.replace(redirectUrl);
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [redirectUrl, router]);

  if (!isPaid) {
    return null;
  }

  return <PaidToolSuccessTracker tool={tool} sessionId={sessionId} />;
};
