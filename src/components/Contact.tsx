'use client';

import React, { useState } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';
import { Send } from 'lucide-react';

type ContactProps = {
  isLoading: boolean;
};

export function Contact({ isLoading }: ContactProps) {
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold: 0.2 });
  const shouldAnimate = !isLoading && isInView;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setSubmitState('error');
        return;
      }
      setSubmitState('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1448454050639-2f8d4bf26975)' }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className={`relative max-w-7xl mx-auto section-reveal ${shouldAnimate ? 'animate-section-rise' : ''}`}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
              Turn your website into a revenue engine
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              We design and build premium web experiences that convert, scale, and make your team look good. If your
              current site is underperforming, unclear, or a pain to maintain, we will fix the fundamentals and deliver
              a platform you can confidently grow on.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-slate-100">You might be a good fit for us if:</h3>
              <ul className="space-y-3">
                {[
                  'You need a redesign that improves conversion rates, not just aesthetics.',
                  'You want a custom site that positions you as the clear category leader.',
                  'You are ready to fix performance, accessibility, and UX gaps for good.',
                  'You need a partner who can move fast and keep you out of the weeds.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-primary)] mt-2 flex-shrink-0"></div>
                    <span className="flex-1 min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:border-transparent bg-slate-800 text-slate-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:border-transparent bg-slate-800 text-slate-100"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-slate-200 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:border-transparent bg-slate-800 text-slate-100"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-200 mb-2">
                  Project goals and blockers
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)] focus:border-transparent resize-none bg-slate-800 text-slate-100"
                  placeholder="What's holding your website back? What would you like to improve?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[color:var(--brand-primary-dark)] text-white px-8 py-4 rounded-lg hover:bg-[color:var(--brand-primary)] transition-colors shadow-lg shadow-gray-900/10 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
              {submitState === 'success' && (
                <p className="text-sm text-[color:var(--brand-primary)]">Thanks! Your message is on its way.</p>
              )}
              {submitState === 'error' && (
                <p className="text-sm text-red-300">Something went wrong. Please email cameron@seegodesign.com directly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
