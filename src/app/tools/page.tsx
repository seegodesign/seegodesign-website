import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
  APP_DECISION_TOOL_PRODUCT_PRICE,
  WEBSITE_FIX_PRIORITY_PRODUCT_PRICE,
} from '@/library/constants';

export default function ToolsPage() {
  const tools = [
    {
      tag: 'App Strategy',
      title: 'App Decision Tool',
      description: 'Get clarity on readiness, complexity, and the safest next step before you build a mobile app.',
      price: APP_DECISION_TOOL_PRODUCT_PRICE,
      href: '/tools/app-decision-tool',
      bullets: [
        '14-question diagnostic tailored to app ideas',
        'Readiness score, complexity tier, and risk flags',
        'Downloadable PDF summary for stakeholders',
      ],
    },
    {
      tag: 'Accessibility',
      title: 'Accessibility Fix Priorities',
      description: 'Pinpoint the accessibility fixes needed to reduce compliance risk and liability the fastest.',
      price: ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
      href: '/tools/accessibility-fix-priorities',
      bullets: [
        '10-question diagnostic focused on WCAG risk',
        'Top 3 fixes ranked by impact + effort',
        'Clear remediation guidance your team can execute',
      ],
    },
    {
      tag: 'Website',
      title: 'Website Fix Priorities',
      description: 'Cut through a messy backlog and identify the top 3 fixes that improve conversion fast.',
      price: WEBSITE_FIX_PRIORITY_PRODUCT_PRICE,
      href: '/tools/website-fix-priorities',
      bullets: [
        'Score fixes across conversion, clarity, trust, and performance',
        'Ranked list you can hand directly to your team',
        'Roadmap to keep your site improving over time',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-[100] pointer-events-auto">
        <Navigation />
      </div>
      <main className="pt-20 pb-16 flex-1 relative z-10">
        <section className="animate-section-rise max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tools-header text-center mb-12">
            <span className="eyebrow">Decision Tools</span>
            <h1 className="headline max-w-4xl mx-auto">
              Paid tools that turn uncertainty <span>into a clear next move.</span>
            </h1>
            <p className="subhead mx-auto">
              Each tool delivers a top-3 priority list, rationale, and a clear path forward in minutes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.title} className="card justify-between">
                <div>
                  <p className="card__tag">{tool.tag}</p>
                  <h2 className="card__title">{tool.title}</h2>
                  <p className="card__description">{tool.description}</p>
                </div>
                <ul className="bullets mb-6 mt-4">
                  {tool.bullets.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="card__footer">
                  <a
                    href={tool.href}
                    className="button"
                  >
                    Open Tool
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
