import { getPaidToolSuccessUrl } from '@/lib/paidToolSuccess';
import { PaidToolSuccessRedirect } from '@/components/PaidToolSuccessRedirect';
import { redirect } from 'next/navigation';

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function AppDecisionToolSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/tools/app-decision-tool?error=missing-session');
  }

  const { redirectUrl, isPaid } = await getPaidToolSuccessUrl('app-decision-tool', sessionId);
  return (
    <PaidToolSuccessRedirect
      tool="app-decision-tool"
      sessionId={sessionId}
      redirectUrl={redirectUrl}
      isPaid={isPaid}
    />
  );
}
