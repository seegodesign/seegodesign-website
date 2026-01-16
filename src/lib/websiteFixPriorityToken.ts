import crypto from 'crypto';

type TokenPayload = {
  exp: number;
  sessionId: string;
};

const base64UrlEncode = (value: string) =>
  Buffer.from(value).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

const base64UrlDecode = (value: string) =>
  Buffer.from(value.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString();

export const signAccessToken = (payload: TokenPayload, secret: string) => {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${header}.${body}.${signature}`;
};

export const verifyAccessToken = (token: string, secret: string) => {
  const [header, body, signature] = token.split('.');
  if (!header || !body || !signature) return null;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  if (expected !== signature) return null;

  const payload = JSON.parse(base64UrlDecode(body)) as TokenPayload;
  if (!payload.exp || Date.now() / 1000 > payload.exp) return null;
  return payload;
};
