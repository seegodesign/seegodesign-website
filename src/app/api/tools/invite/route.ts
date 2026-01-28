import { signAccessToken } from '@/lib/websiteFixPriorityToken';
import { getPaidToolConfig, type PaidToolKey } from '@/lib/paidToolConfig';

const INVITE_CODE = 'BNIHAWAII';
const INVITE_DURATION_HOURS = 24;

const isPaidToolKey = (value: string | null): value is PaidToolKey =>
  value === 'website-fix-priorities' ||
  value === 'accessibility-fix-priorities' ||
  value === 'app-decision-tool';

export async function POST(request: Request) {
  const body = (await request.json()) as { tool?: string; code?: string };
  const tool = body?.tool ?? null;
  const code = body?.code?.trim() ?? '';

  if (!isPaidToolKey(tool) || !code) {
    return Response.json({ error: 'Invalid invite code.' }, { status: 400 });
  }

  if (code.toUpperCase() !== INVITE_CODE) {
    return Response.json({ error: 'Invalid invite code.' }, { status: 401 });
  }

  const { tokenSecret } = getPaidToolConfig(tool);
  const expiresAt = Date.now() + INVITE_DURATION_HOURS * 60 * 60 * 1000;
  const token = signAccessToken(
    {
      exp: Math.floor(expiresAt / 1000),
      sessionId: `invite:${INVITE_CODE.toLowerCase()}:${tool}:${Date.now()}`,
    },
    tokenSecret
  );

  return Response.json({ token, expiresAt });
}
