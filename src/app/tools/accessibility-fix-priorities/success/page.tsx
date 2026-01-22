import { redirect } from 'next/navigation';
import { getPaidToolSuccessUrl } from '@/lib/paidToolSuccess';

type SuccessPageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function AccessibilityFixPrioritiesSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/tools/accessibility-fix-priorities?error=missing-session');
  }

  const redirectUrl = await getPaidToolSuccessUrl('accessibility-fix-priorities', sessionId);
  redirect(redirectUrl);
}
