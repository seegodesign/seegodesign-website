import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate">
      <div className="relative z-100">
        <Navigation />
      </div>
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="eyebrow">404</span>
          <h1 className="headline headline--gradient">Page not found</h1>
          <p className="subhead mx-auto py-8">
            The page you’re looking for doesn’t exist or may have moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/" className="button">
              Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <div className="relative z-10">
        <Footer isLoading={false} />
      </div>
    </div>
  );
}
