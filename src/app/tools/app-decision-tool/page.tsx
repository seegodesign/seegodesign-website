import { Suspense } from 'react';
import AppDecisionToolClient from '@/components/tools/AppDecisionToolClient';

export default function AppDecisionToolPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0b1828] flex flex-col relative isolate">
          <main className="pt-16 md:pt-20 flex-1 relative z-10">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-200">
                Loading tool…
              </div>
            </section>
          </main>
        </div>
      }
    >
      <AppDecisionToolClient />
    </Suspense>
  );
}
