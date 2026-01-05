import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/95 shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white tracking-tight text-2xl"
          >
            seego<span className="text-[color:var(--brand-primary)]">design</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-white/90 hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[color:var(--brand-primary-dark)] text-white px-6 py-2.5 rounded-lg hover:bg-[color:var(--brand-primary)] transition-colors"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#5a8a1c] border-t border-[color:var(--brand-primary)]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-[color:var(--brand-primary)] rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-[color:var(--brand-primary)] rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left px-4 py-2 text-white/90 hover:text-white hover:bg-[color:var(--brand-primary)] rounded-lg transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-[color:var(--brand-primary)] text-white rounded-lg hover:bg-[color:var(--brand-primary-dark)] transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
