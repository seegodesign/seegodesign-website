import { AnimatedNetworkBackground } from '@/components/AnimatedNetworkBackground';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE,
  APP_DECISION_TOOL_PRODUCT_PRICE,
  WEBSITE_FIX_PRIORITY_PRODUCT_PRICE,
} from '@/library/constants';

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
      <AnimatedNetworkBackground />
      <div className="relative z-[100] pointer-events-auto">
        <Navigation />
      </div>
      <main className="pt-20 pb-16 flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.35em] text-white/55">Priority Engines</span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mt-4 mb-4">
              Two paid tools that turn uncertainty into a clear next move.
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Each tool delivers a top-3 priority list, rationale, and a clear path forward in minutes.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">App Strategy</p>
                <h2 className="text-3xl font-semibold text-white mt-3 mb-4">
                  App Decision Tool
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Get clarity on readiness, complexity, and the safest next step before you build.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  '14-question diagnostic tailored to app ideas',
                  'Readiness score, complexity tier, and risk flags',
                  'Downloadable PDF summary for stakeholders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  ${APP_DECISION_TOOL_PRODUCT_PRICE}
                </span>
                <a
                  href="/tools/app-decision-tool"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
                >
                  Open Tool
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Accessibility</p>
                <h2 className="text-3xl font-semibold text-white mt-3 mb-4">
                  Accessibility Fix Priorities
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Pinpoint the accessibility fixes that reduce compliance risk and liability the fastest.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  '10-question diagnostic focused on WCAG risk',
                  'Top 3 fixes ranked by impact + effort',
                  'Clear remediation guidance your team can execute',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  ${ACCESSIBILITY_FIX_PRIORITY_PRODUCT_PRICE}
                </span>
                <a
                  href="/tools/accessibility-fix-priorities"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
                >
                  Open Tool
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">Website</p>
                <h2 className="text-3xl font-semibold text-white mt-3 mb-4">
                  Website Fix Priorities
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Cut through a messy backlog and identify the top 3 fixes that improve conversion fast.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                {[
                  'Score fixes across conversion, clarity, trust, and performance',
                  'Ranked list you can hand directly to your team',
                  'Roadmap to book a deeper optimization sprint',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  ${WEBSITE_FIX_PRIORITY_PRODUCT_PRICE}
                </span>
                <a
                  href="/tools/website-fix-priorities"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:brightness-110 bg-[color:var(--brand-primary-dark)] hover:bg-[color:var(--brand-primary)]"
                >
                  Open Tool
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
