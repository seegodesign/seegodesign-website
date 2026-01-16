import { verifyAccessToken } from '../../../../lib/websiteFixPriorityToken';

const tokenSecret = process.env.WEBSITE_FIX_PRIORITY_TOKEN_SECRET;

if (!tokenSecret) {
  throw new Error('Missing WEBSITE_FIX_PRIORITY_TOKEN_SECRET environment variable');
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return Response.json({ valid: false }, { status: 400 });
  }

  const payload = verifyAccessToken(token, tokenSecret);

  if (!payload) {
    return Response.json({ valid: false }, { status: 401 });
  }

  return Response.json({ valid: true });
}
