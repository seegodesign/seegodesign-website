import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e1823]">
          <div className="flex flex-col items-center gap-4 text-white">
            <div className="loader-ring"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Loading
            </span>
          </div>
        </div>
      )}
      <Navigation />
      <Hero isLoading={isLoading} />
      <About isLoading={isLoading} />
      <Services isLoading={isLoading} />
      <CaseStudies isLoading={isLoading} />
      <Process isLoading={isLoading} />
      <Contact isLoading={isLoading} />
      <Footer isLoading={isLoading} />
    </div>
  );
}
