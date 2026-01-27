import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)]">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Contact isLoading={false} />
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
