import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { portfolioItems } from '@/lib/portfolio';

export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,202,47,0.22),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute top-28 right-0 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(86,101,108,0.32),transparent_65%)] blur-3xl" />
      <Navigation />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h1 className="headline animate-hero-headline">{item.title}</h1>
              <p className="subhead animate-hero-subhead">{item.description}</p>
            </div>
            <Link href="/portfolio" className="button button--secondary">
              Back to portfolio
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/30">
            <div className="relative w-full h-[70vh]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                quality={85}
                className="object-contain"
              />
            </div>
            <div className="px-6 py-6 border-t border-white/10">
              <h2 className="text-xl font-semibold text-white">Tools</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
