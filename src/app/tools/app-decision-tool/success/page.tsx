import { redirect } from 'next/navigation';
import { getPaidToolSuccessUrl } from '@/lib/paidToolSuccess';

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function AppDecisionToolSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/tools/app-decision-tool?error=missing-session');
  }

  const redirectUrl = await getPaidToolSuccessUrl('app-decision-tool', sessionId);
  redirect(redirectUrl);
}
