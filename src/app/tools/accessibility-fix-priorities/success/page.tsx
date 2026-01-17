import { redirect } from 'next/navigation';
import { getPaidToolSuccessUrl } from '../../../../lib/paidToolSuccess';

type SuccessPageProps = {
  searchParams: { session_id?: string };
};

export default async function AccessibilityFixPrioritiesSuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/tools/accessibility-fix-priorities?error=missing-session');
  }

  const redirectUrl = await getPaidToolSuccessUrl('accessibility-fix-priorities', sessionId);
  redirect(redirectUrl);
}
