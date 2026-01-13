import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';

export default function UXUIDesignPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">UX/UI Design</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            More details about UX/UI Design will live here. We can expand this page with
            process notes, deliverables, and case studies when you're ready.
          </p>
        </section>
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
