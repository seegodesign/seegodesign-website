import Stripe from 'stripe';
import { getVIPDayProductMetadata } from '@/lib/analytics';
import { trackServerEvent } from '@/lib/serverAnalytics';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const reserveSpotPriceId = process.env.STRIPE_RESERVE_SPOT_PRICE_ID;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}
if (!reserveSpotPriceId) {
  throw new Error('Missing STRIPE_RESERVE_SPOT_PRICE_ID environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-02-24.acacia',
});

type CheckoutRequest = {
  successUrl: string;
  cancelUrl: string;
  notes: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as CheckoutRequest;

  if (!body?.successUrl || !body?.cancelUrl) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: reserveSpotPriceId, quantity: 1 }],
    success_url: body.successUrl,
    cancel_url: body.cancelUrl,
    custom_fields: [
      {
        key: 'notes',
        label: { type: 'custom', custom: 'Notes' },
        type: 'text',
        optional: true,
        text: {
          default_value: body.notes,
          maximum_length: 255,
        },
      },
    ],
  });

  const item = getVIPDayProductMetadata();
  await trackServerEvent('begin_checkout', {
    event_category: 'ecommerce',
    event_label: item.item_id,
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
