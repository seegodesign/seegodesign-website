import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo, but in production this would send your message.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-slate-100 mb-4 text-4xl md:text-5xl lg:text-6xl">
              Let's Talk About Your Project
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              If your website feels like it's holding your business back, let's discuss how a modern frontend could help.
              I work with businesses that need reliable, maintainable solutions — not just cosmetic updates.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-slate-100">Ideal for:</h3>
              <ul className="space-y-3">
                {[
                  'IT providers & MSPs with client portals',
                  'B2B service companies needing better performance',
                  'SaaS businesses with legacy marketing sites',
                  'Manufacturers with outdated configurators',
                  'Agencies needing frontend development support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-primary)] mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 text-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
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
                  Tell me about your project
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
                className="w-full inline-flex items-center justify-center gap-2 bg-[color:var(--brand-primary)] text-white px-8 py-4 rounded-lg hover:bg-[#5a8a1c] transition-colors shadow-lg shadow-gray-900/10"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
