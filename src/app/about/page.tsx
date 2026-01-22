import { Navigation } from '@/components/Navigation';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />
      <main className="pt-24">
        <About isLoading={false} />
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
