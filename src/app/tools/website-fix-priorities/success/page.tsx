import { getPaidToolSuccessUrl } from '@/lib/paidToolSuccess';
import { PaidToolSuccessRedirect } from '@/components/PaidToolSuccessRedirect';
import { redirect } from 'next/navigation';

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function WebsiteFixPrioritiesSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/tools/website-fix-priorities?error=missing-session');
  }

  const { redirectUrl, isPaid } = await getPaidToolSuccessUrl('website-fix-priorities', sessionId);
  return (
    <PaidToolSuccessRedirect
      tool="website-fix-priorities"
      sessionId={sessionId}
      redirectUrl={redirectUrl}
      isPaid={isPaid}
    />
  );
}
