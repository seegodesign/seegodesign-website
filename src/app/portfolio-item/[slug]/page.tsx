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
    <div className="portfolio-item min-h-screen bg-[color:var(--color-bg)] flex flex-col relative isolate overflow-hidden">
      <div className="portfolio-item__orb portfolio-item__orb--primary" />
      <div className="portfolio-item__orb portfolio-item__orb--secondary" />
      <Navigation />
      <main className="portfolio-item__main pt-16 md:pt-20 flex-1 relative z-10">
        <section className="portfolio-item__header max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="portfolio-item__header-row">
            <div className="portfolio-item__intro">
              <span className="eyebrow">Portfolio</span>
              <h1 className="headline animate-hero-headline">{item.title}</h1>
              <p className="subhead animate-hero-subhead">{item.description}</p>
            </div>
            <Link href="/portfolio" className="button button--secondary portfolio-item__back">
              Back to portfolio
            </Link>
          </div>
        </section>

        <section className="portfolio-item__media-section max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="portfolio-item__media-card">
            <div className="portfolio-item__media">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                quality={85}
                className="portfolio-item__image"
              />
            </div>
            <div className="portfolio-item__meta">
              <h2 className="portfolio-item__meta-title">Tools</h2>
              <div className="portfolio-item__tools">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="portfolio-item__tool"
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
