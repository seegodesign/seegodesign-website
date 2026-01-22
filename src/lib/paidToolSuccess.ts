import Stripe from 'stripe';
import { signAccessToken } from '@/lib/websiteFixPriorityToken';
import { getPaidToolConfig, type PaidToolKey } from '@/lib/paidToolConfig';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-02-24.acacia',
});

export const getPaidToolSuccessUrl = async (tool: PaidToolKey, sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== 'paid') {
    return `/tools/${tool}?error=unpaid`;
  }

  const { tokenSecret } = getPaidToolConfig(tool);
  const token = signAccessToken(
    { sessionId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 },
    tokenSecret
  );

  return `/tools/${tool}?access=${token}`;
};
