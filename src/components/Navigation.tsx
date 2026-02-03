'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services/accessibility-compliance', label: 'Accessibility Compliance' },
        { href: '/services/app-development', label: 'App Development' },
        { href: '/services/wordpress-development', label: 'Wordpress Development' },
        // { href: '/services/custom-chat-bots', label: 'Custom Chat Bots' },
        // { href: '/services/branding', label: 'Branding' },
        // { href: '/services/e-commerce-systems', label: 'E-Commerce Systems' },
        // { href: '/services/system-overhaul', label: 'System Overhaul' },
        { href: '/services/web-design', label: 'Web Design' },
        { href: '/services/website-optimization', label: 'Website Optimization' },
      ],
    },
    {
      href: '/tools',
      label: 'Tools',
      children: [
        { href: '/tools/accessibility-fix-priorities', label: 'Accessibility Fix Priorities' },
        { href: '/tools/app-decision-tool', label: 'App Decision Tool' },
        { href: '/tools/website-fix-priorities', label: 'Website Fix Priorities' },
      ],
    },
    {
      href: '/contact',
      label: 'Contact'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[color:var(--color-nav-bg)] shadow-md z-50' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="logo">
            &lt;Seego<span>Design/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.children && pathname.startsWith(`${item.href}/`));

              if (item.children) {
                return (
                  <div key={item.href} className="relative group flex items-center">
                    <Link
                      href={item.href}
                      className={`border-b-2 pb-1 transition-colors ${
                        isActive
                          ? 'border-[color:var(--brand-primary)]'
                          : 'border-transparent text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="absolute left-0 top-full w-64 pt-3 opacity-0 pointer-events-none transition duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                      <div className="rounded-xl border border-[color:var(--color-border-muted)] bg-[color:var(--color-surface-strong)] shadow-xl p-3">
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                                isChildActive
                                  ? 'text-[color:var(--brand-primary)]'
                                  : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--brand-primary)]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 pb-1 transition-colors ${
                    isActive
                      ? 'border-[color:var(--brand-primary)]'
                      : 'border-transparent text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
            <Link
              href="/book-a-call"
              className="button"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-transform duration-300 hover:scale-105"
            aria-label="Toggle menu"
          >
            <span
              className={`inline-flex items-center justify-center transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-950/70"
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[color:var(--color-surface-strong)] border-l border-[color:var(--color-border)] transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-[color:var(--color-border-muted)]">
            <span className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-text-muted)]">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-[color:var(--color-border-muted)] text-[color:var(--color-text-muted)] hover:hover:border-[color:var(--color-border)] transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3 pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.children && pathname.startsWith(`${item.href}/`));

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-[color:var(--brand-primary)]'
                        : 'text-[color:var(--color-text-muted)] hover:hover:bg-[color:var(--brand-primary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                              isChildActive
                                ? 'text-[color:var(--brand-primary)]'
                                : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--brand-primary)]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/book-a-call"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 bg-[color:var(--brand-primary-dark)] text-white rounded-lg hover:bg-[color:var(--brand-primary)] transition-colors"
            >
              Book a Call
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
