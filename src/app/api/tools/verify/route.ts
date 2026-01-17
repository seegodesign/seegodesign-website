import { verifyAccessToken } from '../../../../lib/websiteFixPriorityToken';
import { getPaidToolConfig, type PaidToolKey } from '../../../../lib/paidToolConfig';

const isPaidToolKey = (value: string | null): value is PaidToolKey =>
  value === 'website-fix-priorities' || value === 'accessibility-fix-priorities';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  const tool = searchParams.get('tool');

  if (!token || !isPaidToolKey(tool)) {
    return Response.json({ valid: false }, { status: 400 });
  }

  const { tokenSecret } = getPaidToolConfig(tool);
  const payload = verifyAccessToken(token, tokenSecret);

  if (!payload) {
    return Response.json({ valid: false }, { status: 401 });
  }

  return Response.json({ valid: true });
}
