import Stripe from 'stripe';
import { getPaidToolConfig, type PaidToolKey } from '../../../../lib/paidToolConfig';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-02-24.acacia'
});

type CheckoutRequest = {
  tool: PaidToolKey;
  cancelUrl: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as CheckoutRequest;

  if (!body?.cancelUrl || !body?.tool) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const { priceId, successUrl } = getPaidToolConfig(body.tool);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: body.cancelUrl,
  });

  return Response.json({ url: session.url });
}
