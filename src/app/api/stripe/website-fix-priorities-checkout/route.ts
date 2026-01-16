import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_WEBSITE_FIX_PRIORITY_PRICE_ID;
const successRedirectUrl = process.env.WEBSITE_FIX_PRIORITY_SUCCESS_URL;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}
if (!priceId) {
  throw new Error('Missing STRIPE_WEBSITE_FIX_PRIORITY_PRICE_ID environment variable');
}
if (!successRedirectUrl) {
  throw new Error('Missing WEBSITE_FIX_PRIORITY_SUCCESS_URL environment variable');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

type CheckoutRequest = {
  cancelUrl: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as CheckoutRequest;

  if (!body?.cancelUrl) {
    return Response.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${successRedirectUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: body.cancelUrl,
  });

  return Response.json({ url: session.url });
}
