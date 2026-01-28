import Stripe from 'stripe';
import { getToolProductMetadata } from '@/lib/analytics';
import { getPaidToolConfig, type PaidToolKey } from '@/lib/paidToolConfig';
import { trackServerEvent } from '@/lib/serverAnalytics';

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

  const item = getToolProductMetadata(body.tool);
  await trackServerEvent('begin_checkout', {
    event_category: 'ecommerce',
    event_label: body.tool,
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

  return Response.json({ url: session.url });
}
