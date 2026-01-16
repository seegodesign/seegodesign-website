import Stripe from 'stripe';
import { redirect } from 'next/navigation';
import { signAccessToken } from '../../../../lib/websiteFixPriorityToken';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const tokenSecret = process.env.WEBSITE_FIX_PRIORITY_TOKEN_SECRET;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}
if (!tokenSecret) {
  throw new Error('Missing WEBSITE_FIX_PRIORITY_TOKEN_SECRET environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

type SuccessPageProps = {
  searchParams: { session_id?: string };
};

export default async function WebsiteFixPrioritiesSuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/tools/website-fix-priorities?error=missing-session');
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== 'paid') {
    redirect('/tools/website-fix-priorities?error=unpaid');
  }

  const token = signAccessToken(
    { sessionId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 },
    tokenSecret
  );

  redirect(`/tools/website-fix-priorities?access=${token}`);
}
