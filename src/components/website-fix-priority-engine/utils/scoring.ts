import type { Answers } from '@/components/website-fix-priority-engine/types';

export interface Priority {
  id: string;
  title: string;
  why: string;
  impact: 'High' | 'Medium';
  effort: 'Low' | 'Medium';
  score: number;
  detailedContent: { heading: string; body: string }[];
  avoidThis: string[];
}

const detailedContent = {
  homepageMessaging: [
    {
      heading: 'First impressions decide',
      body: 'The homepage is your digital storefront, and you have roughly 3-5 seconds to communicate what you do and why it matters. Most small business websites fail this test because they assume visitors already understand their industry, their unique value, or even what the business does. The result is confused visitors who bounce immediately, and business owners who wonder why their traffic does not convert.',
    },
    {
      heading: 'Use the what-who-why formula',
      body: 'A clear homepage message follows a simple formula: state what you do, who it is for, and what problem you solve—all above the fold. This is not about clever taglines or industry jargon. It is about instant clarity. For example, instead of "Innovative Solutions for Modern Businesses," try "We help contractors get more leads from Google without paying for ads." The second version immediately tells visitors what you do, who you serve, and the benefit you provide.',
    },
    {
      heading: 'Avoid vague hero copy',
      body: 'The most common mistake is burying your value proposition beneath generic welcome text, mission statements, or vague imagery. Your homepage should pass the "five-second test"—if a stranger lands on your site and cannot explain what you do within five seconds, your messaging needs work. This becomes especially critical for service-based businesses where the offering is not immediately visual like a product would be.',
    },
    {
      heading: 'Small changes, big gains',
      body: "Fixing homepage messaging typically involves rewriting your hero section headline, adding a clear subheadline that expands on your value, and potentially restructuring your homepage to lead with benefits rather than features. The beauty of this fix is that it requires no technical skills—just clear thinking about your customer's needs and how you solve them. Even a simple text change can dramatically reduce bounce rates and increase engagement, making this one of the highest-impact, lowest-effort improvements you can make.",
    },
  ],

  ctaOptimization: [
    {
      heading: 'CTAs often get buried',
      body: 'A call-to-action is the bridge between interest and action, yet most websites treat CTAs as an afterthought. They use generic buttons like "Learn More" or "Submit," bury them below the fold, or worse—have multiple competing CTAs that confuse visitors about what to do next. The result is interested visitors who leave without taking action simply because the path forward was not obvious or compelling enough.',
    },
    {
      heading: 'Make the primary action obvious',
      body: 'Effective CTA optimization starts with identifying your primary conversion goal and making that action unmissable. If you want phone calls, your phone number should be prominent and clickable on mobile. If you want form submissions, that form or button should appear multiple times as visitors scroll. The CTA should use action-oriented, benefit-focused language like "Get Your Free Quote," "Schedule Your Consultation," or "Start Saving Today" rather than passive phrases like "Click Here" or "Learn More."',
    },
    {
      heading: 'Design for visual hierarchy',
      body: 'Visual hierarchy plays a crucial role in CTA performance. Your primary CTA should be the most visually prominent element on the page through size, color contrast, and positioning. Many high-converting websites use a contrasting color for their CTA button that appears nowhere else on the site, creating a clear visual cue. The CTA should also be surrounded by white space to draw the eye and avoid competing with other page elements.',
    },
    {
      heading: 'Set expectations and repeat',
      body: 'Beyond the button itself, the messaging around your CTA matters enormously. Visitors need to know what happens when they click—will they get a phone call, receive an email, be taken to a form, or start a purchase? Adding micro-copy like "No credit card required" or "Get a response within 24 hours" can dramatically increase conversions by reducing perceived risk. For service businesses especially, repetition is key: your CTA should appear in the hero section, after key benefit sections, and at the bottom of the page, giving visitors multiple opportunities to convert as they gain confidence in your offering.',
    },
  ],

  mobileUsability: [
    {
      heading: 'Mobile friction loses buyers',
      body: 'Over 60% of web traffic now comes from mobile devices, yet countless small business websites still treat mobile as an afterthought. A site that looks great on desktop often becomes a frustrating maze on mobile—tiny text, buttons too small to tap accurately, forms that require constant zooming, and navigation that disappears or becomes unusable. Every friction point on mobile is a potential customer lost, especially for local businesses where visitors are often searching on-the-go with high intent to take action.',
    },
    {
      heading: 'Design for one-thumb use',
      body: 'Mobile usability goes far beyond "responsive design." A truly mobile-optimized site considers how people actually use their phones: with one hand, often while distracted, expecting instant information. This means your phone number should be a tappable link in the header, your most important information should appear without scrolling, and forms should be radically simplified or replaced with one-click options like "Call Now" or "Get Directions." Navigation should be minimal and obvious, typically using a hamburger menu that does not hide critical CTAs.',
    },
    {
      heading: 'Common mobile killers',
      body: 'Common mobile usability killers include pop-ups that cannot be dismissed easily, text smaller than 16px that forces zooming, clickable elements placed too close together leading to mis-taps, and horizontal scrolling caused by images or content that exceeds screen width. Google actually penalizes sites with poor mobile usability in search rankings, meaning a bad mobile experience hurts both user conversions and your ability to be found in the first place.',
    },
    {
      heading: 'Test real-world tasks',
      body: 'Testing your mobile experience is straightforward but often eye-opening. Pull up your site on your phone and try to complete your primary conversion goal—call, submit a form, make a purchase—using only one thumb. If you find yourself zooming, scrolling horizontally, or struggling to tap the right element, your mobile users are experiencing that frustration multiplied. For service-based and local businesses especially, fixing mobile usability often produces the most immediate results because it unlocks a huge segment of high-intent traffic that was previously unable to convert.',
    },
  ],

  pageSpeed: [
    {
      heading: 'Speed directly hits revenue',
      body: 'Page speed is one of the few website metrics directly tied to revenue. Google research shows that as page load time increases from 1 to 3 seconds, bounce rate increases by 32%. From 1 to 5 seconds, it jumps 90%. And from 1 to 10 seconds, bounce rate increases by 123%. For e-commerce, Amazon found that every 100ms of latency cost them 1% in sales. Yet many small business websites load in 5-10 seconds or more, hemorrhaging potential customers who never wait long enough to see the content.',
    },
    {
      heading: 'Find the real bottlenecks',
      body: 'The primary culprits for slow websites are oversized images, excessive third-party scripts (analytics, chat widgets, social media feeds), lack of caching, and bloated page builders or themes. A single unoptimized photo can be 5-10MB when it should be under 200KB. Many business websites load dozens of tracking scripts and plugins that each add precious seconds to load time. The cumulative effect is a site that frustrates users and signals to Google that your site provides a poor experience, harming your search rankings.',
    },
    {
      heading: 'Start with images and scripts',
      body: 'Speed optimization often starts with image compression—ensuring all photos and graphics are properly sized and compressed without visible quality loss. Next is minimizing third-party scripts by removing unnecessary plugins and widgets. For businesses using WordPress or similar platforms, choosing a lightweight theme and limiting plugins to only essential functionality can produce dramatic improvements. Enabling browser caching allows repeat visitors to load your site much faster by storing certain elements locally.',
    },
    {
      heading: 'Faster load, higher trust',
      body: 'The business impact of speed improvements is measurable and often dramatic. A site that loads in 2 seconds instead of 6 seconds will see higher engagement, lower bounce rates, better search rankings, and increased conversions. For businesses with decent traffic but low conversion rates, page speed is often the hidden bottleneck. The perception of your brand also shifts—a fast website signals professionalism and competence, while a slow site makes visitors question whether you can deliver on your promises. This is particularly critical for service businesses where trust is the foundation of the buying decision.',
    },
  ],

  conversionTracking: [
    {
      heading: 'No tracking means no insight',
      body: 'Running a website without conversion tracking is like running a store with no cash register—you have no idea what is working, what is failing, or where to invest your effort. Yet the majority of small business websites have either no tracking at all or only basic visitor counts that provide zero actionable insight. The result is marketing decisions based on guesses, wasted budget on channels that do not convert, and missed opportunities to double down on what actually drives business.',
    },
    {
      heading: 'Define and track conversions',
      body: 'Basic conversion tracking starts with defining what counts as a conversion for your business: phone calls, form submissions, purchases, email signups, or appointment bookings. Each of these should be tracked so you can see not just how many visitors you get, but how many take meaningful action. Google Analytics 4 provides free, powerful tracking, but it requires proper setup—creating goals or events that fire when visitors complete desired actions. For phone-based businesses, call tracking numbers allow you to see which marketing channels generate calls, not just clicks.',
    },
    {
      heading: 'Use data to spot patterns',
      body: 'Beyond basic conversion counting, tracking reveals patterns that guide optimization. You might discover that 80% of your conversions come from 20% of your pages, suggesting where to focus improvement efforts. You might find that mobile visitors convert at half the rate of desktop, pointing to a mobile usability problem. You might see that blog traffic has high engagement but never converts, indicating a need for better CTAs on content pages. Without tracking, these insights remain invisible.',
    },
    {
      heading: 'Compounding gains from testing',
      body: 'The compound benefits of tracking grow over time. Once you know what drives conversions, you can systematically test improvements—different headlines, CTA placements, form lengths—and measure real results rather than guessing. You can calculate the ROI of marketing channels and eliminate waste. You can identify your most valuable traffic sources and invest more there. For small businesses especially, where every marketing dollar counts, conversion tracking transforms website management from throwing spaghetti at the wall to making data-driven decisions that consistently improve results.',
    },
  ],

  contentStructure: [
    {
      heading: 'Structure guides understanding',
      body: 'Website content is not just about having the right information—it is about organizing that information in a way that guides visitors toward understanding your value and taking action. Most small business websites suffer from poor content structure: critical information buried on inner pages, no clear flow from problem to solution to CTA, walls of text with no visual hierarchy, and navigation that reflects internal org structure rather than customer needs. The result is visitors who bounce because they cannot quickly find what they are looking for.',
    },
    {
      heading: 'Map to the customer journey',
      body: 'Effective content structure follows the customer journey. Your homepage should clearly state what you do and for whom, your service or product pages should focus on benefits and outcomes (not just features), and your about page should build trust by showing expertise and human connection. Each page should have a singular focus and a clear next step. If you are a service business, your structure might be: Homepage (what and why) → Services (how and options) → Case Studies (proof) → Contact (action). Every page should answer "what do I do next?" for the visitor.',
    },
    {
      heading: 'Keep content current',
      body: 'Content freshness signals to both visitors and search engines that your business is active and relevant. Outdated content—old copyright dates, references to past years, stale blog posts, or information about discontinued services—creates doubt about whether you are still in business or keeping up with your industry. Fresh content does not mean constantly creating new pages; it means updating existing pages with current information, adding recent examples or testimonials, and ensuring your site reflects your current offerings and expertise.',
    },
    {
      heading: 'Audit, simplify, clarify',
      body: 'The practical fix often involves a content audit: list every page on your site and evaluate whether it serves a clear purpose in your customer journey, contains current information, and has a clear CTA. Pages that fail these tests should be updated, merged with other content, or deleted. Your navigation should be simplified to reflect the 3-5 things visitors actually care about, not your internal departmental structure. Adding structural elements like clear headings, bullet points, short paragraphs, and visual breaks makes content scannable—critical because most visitors skim rather than read. For service businesses especially, restructuring content around customer problems rather than your services often produces immediate improvements in engagement and conversions.',
    },
  ],
};

const avoidThis = {
  homepageMessaging: [
    "Don't redesign your entire website yet",
    "Don't change your logo or branding",
    "Don't add more content before clarifying what you already have",
    "Don't assume visitors know your industry jargon"
  ],
  ctaOptimization: [
    "Don't add multiple competing CTAs at once",
    "Don't redesign your whole site to fix this",
    "Don't use vague language like 'Click Here' or 'Learn More'",
    "Don't hide your CTA below the fold only"
  ],
  mobileUsability: [
    "Don't rebuild from scratch—fix the biggest friction points first",
    "Don't assume 'responsive' means 'mobile-optimized'",
    "Don't add features before removing mobile friction",
    "Don't test only on desktop"
  ],
  pageSpeed: [
    "Don't switch platforms yet—optimize what you have first",
    "Don't remove all plugins—just the unnecessary ones",
    "Don't ignore images—they're usually the biggest culprit",
    "Don't skip testing after changes"
  ],
  conversionTracking: [
    "Don't install every tracking tool at once",
    "Don't let perfect tracking delay basic setup",
    "Don't track vanity metrics—focus on conversions",
    "Don't set up tracking without a clear goal"
  ],
  contentStructure: [
    "Don't delete everything and start over",
    "Don't add more pages before organizing what exists",
    "Don't change your navigation without understanding user paths",
    "Don't update content without a clear purpose"
  ],
};

export function calculatePriorities(answers: Answers): Priority[] {
  const scores = {
    homepageMessaging: 0,
    ctaOptimization: 0,
    mobileUsability: 0,
    pageSpeed: 0,
    conversionTracking: 0,
    contentStructure: 0,
  };

  // Q1. Primary Website Goal
  if (answers.goal === 'leads' || answers.goal === 'sales') {
    scores.ctaOptimization += 2;
    scores.conversionTracking += 2;
  }
  if (answers.goal === 'bookings') {
    scores.ctaOptimization += 2;
    scores.mobileUsability += 1;
  }
  if (answers.goal === 'credibility') {
    scores.homepageMessaging += 2;
    scores.contentStructure += 1;
  }

  // Q2. Business Type
  if (answers.businessType === 'service') {
    scores.homepageMessaging += 2;
    scores.ctaOptimization += 1;
  }
  if (answers.businessType === 'ecommerce') {
    scores.pageSpeed += 2;
    scores.conversionTracking += 1;
  }
  if (answers.businessType === 'personal') {
    scores.homepageMessaging += 2;
    scores.contentStructure += 1;
  }

  // Q3. Primary CTA Exists
  if (answers.cta === 'yes') {
    scores.ctaOptimization += 0;
  }
  if (answers.cta === 'notReally') {
    scores.ctaOptimization += 2;
  }
  if (answers.cta === 'no') {
    scores.ctaOptimization += 3;
  }

  // Q4. Homepage Message Clarity
  if (answers.clarity === 'veryClear') {
    scores.homepageMessaging += 0;
  }
  if (answers.clarity === 'somewhatClear') {
    scores.homepageMessaging += 2;
  }
  if (answers.clarity === 'confusing') {
    scores.homepageMessaging += 3;
  }

  // Q5. Monthly Traffic Volume
  if (answers.traffic === 'low') {
    scores.homepageMessaging += 1;
    scores.contentStructure += 1;
  }
  if (answers.traffic === 'medium') {
    scores.ctaOptimization += 1;
    scores.conversionTracking += 1;
  }
  if (answers.traffic === 'high') {
    scores.pageSpeed += 2;
    scores.conversionTracking += 2;
  }

  // Q6. Mobile Experience Confidence
  if (answers.mobileConfidence === 'confident') {
    scores.mobileUsability += 0;
  }
  if (answers.mobileConfidence === 'unsure') {
    scores.mobileUsability += 2;
  }
  if (answers.mobileConfidence === 'poor') {
    scores.mobileUsability += 3;
  }

  // Q7. Page Speed Confidence
  if (answers.speedConfidence === 'fast') {
    scores.pageSpeed += 0;
  }
  if (answers.speedConfidence === 'okay') {
    scores.pageSpeed += 2;
  }
  if (answers.speedConfidence === 'slow') {
    scores.pageSpeed += 3;
  }

  // Q8. Conversion Tracking Setup
  if (answers.tracking === 'yes') {
    scores.conversionTracking += 0;
  }
  if (answers.tracking === 'partially') {
    scores.conversionTracking += 2;
  }
  if (answers.tracking === 'no') {
    scores.conversionTracking += 3;
  }

  // Q9. Content Freshness
  if (answers.contentFreshness === 'regular') {
    scores.contentStructure += 0;
  }
  if (answers.contentFreshness === 'outdated') {
    scores.contentStructure += 2;
  }
  if (answers.contentFreshness === 'veryOutdated') {
    scores.contentStructure += 3;
  }

  // Q10. Biggest Frustration
  if (answers.frustration === 'noLeads') {
    scores.ctaOptimization += 2;
    scores.homepageMessaging += 1;
  }
  if (answers.frustration === 'dontUnderstand') {
    scores.homepageMessaging += 3;
  }
  if (answers.frustration === 'slow') {
    scores.pageSpeed += 3;
  }
  if (answers.frustration === 'mobileBad') {
    scores.mobileUsability += 3;
  }
  if (answers.frustration === 'noData') {
    scores.conversionTracking += 3;
  }

  // Create priority objects
  const priorityList: Priority[] = [
    {
      id: 'homepageMessaging',
      title: 'Clarify Your Homepage Message',
      why: 'Visitors are leaving because they do not immediately understand what you offer or why it matters to them. A clear, focused message will reduce bounce rate and improve engagement.',
      score: scores.homepageMessaging,
      impact: scores.homepageMessaging >= 6 ? 'High' : 'Medium',
      effort: 'Low',
      detailedContent: detailedContent.homepageMessaging,
      avoidThis: avoidThis.homepageMessaging,
    },
    {
      id: 'ctaOptimization',
      title: 'Optimize Your Call-to-Action',
      why: 'Your primary CTA needs to be more visible and compelling. Making it clearer what action visitors should take will directly increase conversions.',
      score: scores.ctaOptimization,
      impact: scores.ctaOptimization >= 6 ? 'High' : 'Medium',
      effort: 'Low',
      detailedContent: detailedContent.ctaOptimization,
      avoidThis: avoidThis.ctaOptimization,
    },
    {
      id: 'mobileUsability',
      title: 'Fix Mobile Experience',
      why: 'Most visitors are viewing your site on mobile, and poor mobile experience is costing you leads. Improving mobile usability will immediately expand your effective audience.',
      score: scores.mobileUsability,
      impact: scores.mobileUsability >= 6 ? 'High' : 'Medium',
      effort: 'Medium',
      detailedContent: detailedContent.mobileUsability,
      avoidThis: avoidThis.mobileUsability,
    },
    {
      id: 'pageSpeed',
      title: 'Improve Page Speed & Performance',
      why: 'Slow loading times are killing your conversions. Studies show that even a 1-second delay can reduce conversions by 7%. Speed improvements have immediate, measurable impact.',
      score: scores.pageSpeed,
      impact: scores.pageSpeed >= 6 ? 'High' : 'Medium',
      effort: 'Medium',
      detailedContent: detailedContent.pageSpeed,
      avoidThis: avoidThis.pageSpeed,
    },
    {
      id: 'conversionTracking',
      title: 'Set Up Conversion Tracking',
      why: 'You cannot improve what you do not measure. Setting up basic tracking will help you understand what is working and guide future decisions with data instead of guesses.',
      score: scores.conversionTracking,
      impact: scores.conversionTracking >= 6 ? 'High' : 'Medium',
      effort: 'Medium',
      detailedContent: detailedContent.conversionTracking,
      avoidThis: avoidThis.conversionTracking,
    },
    {
      id: 'contentStructure',
      title: 'Improve Content Structure & Freshness',
      why: 'Your content may be good, but it is not organized in a way that guides visitors toward taking action. Better structure helps visitors find what they need and builds trust faster.',
      score: scores.contentStructure,
      impact: scores.contentStructure >= 6 ? 'High' : 'Medium',
      effort: 'Low',
      detailedContent: detailedContent.contentStructure,
      avoidThis: avoidThis.contentStructure,
    },
  ];

  // Sort by score descending
  priorityList.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return 0;
  });

  // Return top 3
  return priorityList.slice(0, 3);
}
