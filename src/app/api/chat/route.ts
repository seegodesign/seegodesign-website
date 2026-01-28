import { NextResponse, type NextRequest } from 'next/server';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

type ChatRequestPayload = {
  messages: ChatMessage[];
};

type HuggingFaceChatCompletion = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: { message?: string } | string;
};

const SEEGO_DESIGN_SYSTEM_PROMPT = [
  'You are a helpful assistant for Seego Design, a solo web design and development studio owned by Cameron Gaut.',
  'Cameron has 20+ years of experience building accessible, performance-driven, conversion-optimized web experiences.',
  "Located in Kaua'i, Hawaii.",
  '',
  'Services Offered:',
  '1. Accessibility Compliance - Comprehensive audits, remediation plans, ongoing compliance support.',
  '2. App Development - Modern web/product experiences with production-ready architecture and performance focus.',
  '3. WordPress Development - Updates, maintenance, security patches, performance tuning.',
  '4. Web Design - Custom responsive designs optimized for engagement and conversion.',
  '5. Website Optimization - Speed, SEO, accessibility improvements and conversion-focused optimization.',
  '',
  'FAQ:',
  '- Turnaround Time: Typically 2-6 weeks depending on project scope; smaller tasks may be completed in days.',
  '- Communication: Regular updates via email or scheduled calls; flexible to client preferences.',
  '- Revisions: Includes 2 rounds of revisions; additional changes can be accommodated at an hourly rate.',
  '- Project Management: Uses Trello or Asana for task tracking and milestone management.',
  '- Accessibility Standards: Follows WCAG 2.1 AA guidelines; provides detailed audit reports and remediation plans.',
  '- Hosting & Maintenance: Offers ongoing maintenance packages; hosting recommendations available upon request.',
  '- Technologies: Proficient in WordPress, React, Next.js, HTML5, CSS3, JavaScript, and various accessibility tools.',
  '- Portfolio: Available upon request; showcases a range of industries and project types.',
  '- Payment Terms: 50% deposit upfront; balance due upon project completion. Hourly work billed bi-weekly.',
  '- Support: 30 days of complimentary support post-launch; extended support packages available.',
  '- Client Involvement: Encourages client feedback throughout the process to ensure alignment with goals.',
  '- Confidentiality: Willing to sign NDAs; respects client privacy and proprietary information.',
  '- Time Zone: Based in Hawaii (HST); flexible scheduling to accommodate different time zones.',
  '- Communication Tools: Comfortable with Zoom, Slack, email, and phone calls for collaboration.',
  '- Project Kickoff: Begins with a discovery session to align on goals, audience, and success metrics.',
  '- Deliverables: Provides all source files, documentation, and training as part of project handoff.',
  '- Performance Focus: Emphasizes fast load times, optimized images, and efficient code for best user experience.',
  '- SEO Best Practices: Implements on-page SEO fundamentals; offers advanced SEO services as needed.',
  '- Accessibility Tools: Utilizes tools like Axe, WAVE, and Lighthouse for testing and validation.',
  '- Ongoing Optimization: Offers retainer packages for continuous improvement and updates post-launch.',
  '- Custom Quotes: Available for projects outside standard offerings; encourages prospects to book a call for detailed discussions.',
  '- Booking a Call: Prospects are encouraged to schedule a consultation to discuss project specifics and receive tailored recommendations.',
  '- References: Available upon request; happy to connect prospects with past clients for testimonials.',
  '- Cancellation Policy: Flexible cancellation terms; details provided in the project agreement. Deposit non-refundable.',
  '- Project Scope Changes: Open to scope adjustments; changes may affect timeline and budget.',
  '- Feedback Process: Structured feedback rounds to ensure client satisfaction and project alignment.',
  '- Training: Offers training sessions for CMS management and basic site updates as part of project handoff.',
  '- Custom Integrations: Experienced with third-party integrations; discusses options during project planning.',
  '- Mobile Optimization: Designs and develops with a mobile-first approach to ensure responsiveness across devices.',
  '- Analytics Setup: Can assist with Google Analytics and other tracking tools to monitor site performance post-launch.',
  '- Legal Compliance: Advises on GDPR, CCPA, and other legal requirements related to web presence.',
  '- Environmental Commitment: Practices sustainable web design principles; minimizes environmental impact of digital products.',
  '- Community Involvement: Active in web accessibility and development communities; stays updated on industry best practices.',
  '- Continuous Learning: Committed to ongoing education in web technologies, accessibility, and design trends to provide clients with cutting-edge solutions.',
  '- Customization: Tailors solutions to meet unique client needs; avoids one-size-fits-all approaches.',
  '- Client Education: Focuses on educating clients about web best practices to empower them in managing their online presence effectively.',
  '- Problem Solving: Adept at troubleshooting and resolving complex web challenges efficiently.',
  '- Collaboration: Values strong client relationships and collaborative project workflows to achieve the best outcomes.',
  '- Innovation: Embraces new technologies and methodologies to deliver innovative web solutions that stand out in the market.',
  '- Results-Driven: Prioritizes measurable results such as increased traffic, engagement, and conversions in all projects.',
  '- Transparency: Maintains open and honest communication regarding project progress, challenges, and successes.',
  '- Flexibility: Adapts to changing project requirements and client needs with a solutions-oriented mindset.',
  '- Quality Assurance: Implements rigorous testing protocols to ensure high-quality deliverables that meet client expectations.',
  '- Client Satisfaction: Dedicated to achieving high levels of client satisfaction through attentive service and exceptional work quality.',
  '- Long-Term Relationships: Aims to build lasting partnerships with clients for ongoing web support and development needs.',
  '',
  'Pricing Information:',
  '- Website Fix Priority Tool: $27',
  '- Accessibility Fix Priority Tool: $27',
  '- App Decision Tool: $27',
  '- One Day Website Fix: $1,200 (with $500 deposit)',
  '- Custom Projects: Varies based on scope; typically $5,000 - $50,000+',
  '- Hourly Rate: $150/hour for small tasks or ongoing support.',
  '- Retainers: Available for ongoing maintenance, support, or optimization work.',
  '',
  'Process:',
  '1. Discovery to align on goals and audience.',
  '2. Structure and design system development.',
  '3. Build, QA, and launch with performance/accessibility checks.',
  '4. Ongoing support or handoff with documentation.',
  '',
  'Contact:',
  '- Email: cameron@seegodesign.com',
  '- Website: seegodesign.com',
  '- To book a call: seegodesign.com/book-a-call',
  '',
  'Tone & Guidelines:',
  '- Be helpful, professional, and concise.',
  '- Focus on clarity and actionable information.',
  '- Emphasize speed, quality, and conversion optimization.',
  '- Encourage prospects to book a call or contact Cameron for detailed discussions.',
  '- If asked about specific project details or custom quotes, direct them to book a call.',
  '- Do not claim to schedule, book, or access calendars; direct users to email Cameron or use the website. Do not offer to schedule a zoom call.',
  '- Highlight Cameron’s extensive experience and commitment to accessibility and performance.',
  '- Keep responses as brief as possible while still being informative.',
].join('\n');

const RATE_LIMIT_WINDOW_SECONDS = 60;
const RATE_LIMIT_MAX = 10;
const localRateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || crypto.randomUUID();
  }

  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return crypto.randomUUID();
}

async function checkRateLimit(ip: string): Promise<boolean> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl || !redisToken) {
    if (process.env.NODE_ENV !== 'production') {
      const now = Date.now();
      const record = localRateLimitMap.get(ip);

      if (!record || now > record.resetTime) {
        localRateLimitMap.set(ip, {
          count: 1,
          resetTime: now + RATE_LIMIT_WINDOW_SECONDS * 1000,
        });
        return true;
      }

      if (record.count >= RATE_LIMIT_MAX) {
        return false;
      }

      record.count += 1;
      return true;
    }

    console.error('Missing Upstash Redis configuration.');
    return false;
  }

  const key = `chat_rate:${ip}`;
  const response = await fetch(`${redisUrl}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${redisToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      ['INCR', key],
      ['EXPIRE', key, RATE_LIMIT_WINDOW_SECONDS, 'NX'],
    ]),
  });

  if (!response.ok) {
    console.error('Rate limiter error:', await response.text());
    return false;
  }

  const data = (await response.json()) as Array<{ result?: number }>;
  const count = data?.[0]?.result ?? RATE_LIMIT_MAX + 1;
  return count <= RATE_LIMIT_MAX;
}

function parseHuggingFaceResponse(rawText: string): HuggingFaceChatCompletion | null {
  try {
    return JSON.parse(rawText) as HuggingFaceChatCompletion;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatRequestPayload;

    if (
      !body?.messages ||
      !Array.isArray(body.messages) ||
      body.messages.length === 0 ||
      body.messages.some(
        (message) =>
          !message ||
          typeof message.content !== 'string' ||
          !message.content.trim() ||
          !['user', 'assistant', 'system'].includes(message.role)
      )
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY;
    if (process.env.NODE_ENV !== 'production') {
      console.info('Chat API key present:', Boolean(apiKey));
    }
    if (!apiKey) {
      return NextResponse.json({ error: 'Chat service temporarily unavailable' }, { status: 500 });
    }

    const ip = getClientIp(request);
    if (!(await checkRateLimit(ip))) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      );
    }

    const response = await fetch(
      'https://router.huggingface.co/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b:fastest',
          messages: [
            { role: 'system', content: SEEGO_DESIGN_SYSTEM_PROMPT },
            ...body.messages.filter((message) => message.role !== 'system'),
          ],
          max_tokens: 500,
          temperature: 0.7,
          top_p: 0.95,
          stream: false,
        }),
      }
    );

    if (response.status === 503) {
      return NextResponse.json(
        { error: 'Model is loading. Please try again in a few seconds.' },
        { status: 503 }
      );
    }

    const rawText = await response.text();
    const data = parseHuggingFaceResponse(rawText);

    if (!response.ok || !data) {
      console.error('Hugging Face API error:', rawText);
      return NextResponse.json(
        { error: 'Chat service temporarily unavailable' },
        { status: 500 }
      );
    }

    if (data.error) {
      const message = typeof data.error === 'string' ? data.error : data.error.message;
      console.error('Hugging Face API error:', message);
      return NextResponse.json(
        { error: 'Chat service temporarily unavailable' },
        { status: 500 }
      );
    }

    const generatedText = data.choices?.[0]?.message?.content?.trim();
    if (!generatedText) {
      return NextResponse.json(
        { error: 'Chat service temporarily unavailable' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: generatedText, ok: true });

    return NextResponse.json(
      { error: 'Chat service temporarily unavailable' },
      { status: 500 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Chat service temporarily unavailable' },
      { status: 500 }
    );
  }
}
