import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BookCall } from '@/components/BookCall';

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />
      <main className="pt-8">
        <BookCall isLoading={false} />
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
