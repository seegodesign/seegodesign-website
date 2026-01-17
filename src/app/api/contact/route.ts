import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = (await request.json()) as ContactPayload;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const apiKey = process.env.SMTP2GO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing SMTP2GO API key.' }, { status: 500 });
    }

    const payload = {
      api_key: apiKey,
      to: ['cameron@seegodesign.com'],
      sender: 'cameron@seegodesign.com',
      reply_to: `${name} <${email}>`,
      subject: `New inquiry from ${name}`,
      text_body: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : 'Company: (not provided)',
        '',
        message,
      ].join('\n'),
    };

    const response = await fetch('https://api.smtp2go.com/v3/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    const data = (await response.json()) as { data?: { succeeded?: number } };
    if (!data?.data?.succeeded) {
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 });
  }
}
