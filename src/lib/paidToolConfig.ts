export type PaidToolKey = 'website-fix-priorities' | 'accessibility-fix-priorities' | 'app-decision-tool';

type PaidToolConfig = {
  priceId: string;
  successUrl: string;
  tokenSecret: string;
};

export const getPaidToolConfig = (tool: PaidToolKey): PaidToolConfig => {
  if (tool === 'website-fix-priorities') {
    const priceId = process.env.STRIPE_WEBSITE_FIX_PRIORITY_PRICE_ID;
    const successUrl = process.env.WEBSITE_FIX_PRIORITY_SUCCESS_URL;
    const tokenSecret = process.env.WEBSITE_FIX_PRIORITY_TOKEN_SECRET;
    if (!priceId) throw new Error('Missing STRIPE_WEBSITE_FIX_PRIORITY_PRICE_ID environment variable');
    if (!successUrl) throw new Error('Missing WEBSITE_FIX_PRIORITY_SUCCESS_URL environment variable');
    if (!tokenSecret) throw new Error('Missing WEBSITE_FIX_PRIORITY_TOKEN_SECRET environment variable');
    return { priceId, successUrl, tokenSecret };
  }

  if (tool === 'app-decision-tool') {
    const priceId = process.env.STRIPE_APP_DECISION_TOOL_PRICE_ID;
    const successUrl = process.env.APP_DECISION_TOOL_SUCCESS_URL;
    const tokenSecret = process.env.APP_DECISION_TOOL_TOKEN_SECRET;
    if (!priceId) throw new Error('Missing STRIPE_APP_DECISION_TOOL_PRICE_ID environment variable');
    if (!successUrl) throw new Error('Missing APP_DECISION_TOOL_SUCCESS_URL environment variable');
    if (!tokenSecret) throw new Error('Missing APP_DECISION_TOOL_TOKEN_SECRET environment variable');
    return { priceId, successUrl, tokenSecret };
  }

  const priceId = process.env.STRIPE_ACCESSIBILITY_FIX_PRIORITY_PRICE_ID;
  const successUrl = process.env.ACCESSIBILITY_FIX_PRIORITY_SUCCESS_URL;
  const tokenSecret = process.env.ACCESSIBILITY_FIX_PRIORITY_TOKEN_SECRET;
  if (!priceId) throw new Error('Missing STRIPE_ACCESSIBILITY_FIX_PRIORITY_PRICE_ID environment variable');
  if (!successUrl) throw new Error('Missing ACCESSIBILITY_FIX_PRIORITY_SUCCESS_URL environment variable');
  if (!tokenSecret) throw new Error('Missing ACCESSIBILITY_FIX_PRIORITY_TOKEN_SECRET environment variable');
  return { priceId, successUrl, tokenSecret };
};
