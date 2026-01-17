import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const reserveSpotPriceId = process.env.STRIPE_RESERVE_SPOT_PRICE_ID;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}
if (!reserveSpotPriceId) {
  throw new Error('Missing STRIPE_RESERVE_SPOT_PRICE_ID environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
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

  return Response.json({ url: session.url });
}
