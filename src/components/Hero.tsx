'use client';

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  isLoading: boolean;
};

export function Hero({ isLoading }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const headlineSeed = "Solutions for businesses that";
  const phrases = [
    "have a vision for growth",
    "have outgrown patchwork systems",
    "are ready to automate ",
    "need to scale efficiently",
    "want to turn ideas into reality",
    "need clarity, not complexity"
  ];

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLoading || !isInView) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];
    const isComplete = typedText === currentPhrase;
    const isEmpty = typedText.length === 0;

    const typingSpeed = 45;
    const deletingSpeed = 28;
    const pauseAfterType = 2400;
    const pauseAfterDelete = 220;

    const delay = isDeleting
      ? deletingSpeed
      : isComplete
      ? pauseAfterType
      : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }

      const nextLength = typedText.length + (isDeleting ? -1 : 1);
      setTypedText(currentPhrase.slice(0, Math.max(0, nextLength)));
    }, isDeleting && isEmpty ? pauseAfterDelete : delay);

    return () => window.clearTimeout(timeout);
  }, [isLoading, isInView, isDeleting, phraseIndex, typedText, phrases.length]);
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/75 to-[#0e1823]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-5xl">

            <h1
              className={`text-white mb-8 leading-tight text-2xl sm:text-6xl md:text-4xl lg:text-6xl ${
                !isLoading && isInView ? "animate-hero-headline" : ""
              }`}
            >
              {headlineSeed} {" "}
              <span className="text-[color:var(--brand-primary)]">
                {typedText}
                <span className="blink-cursor">_</span>
              </span>
            </h1>

            <p
              className={`text-[color:var(--brand-secondary)]/95 text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl leading-relaxed ${
              !isLoading && isInView ? "animate-hero-subhead" : ""
              }`}
            >
              Seego Design offers custom web solutions that drive growth, streamline operations, and bring your vision to life with clarity and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className={`inline-flex items-center justify-center gap-2 bg-[color:var(--brand-primary-dark)] text-white px-8 py-4 rounded-lg hover:bg-[color:var(--brand-primary)] transition-all duration-200 shadow-lg shadow-black/30 hover:-translate-y-0.5 hover:shadow-[color:var(--brand-primary)]/30 text-lg ${
                  !isLoading && isInView ? "animate-hero-cta-primary" : ""
                }`}
              >
                Start a Conversation
                <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToCaseStudies}
                className={`inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 text-lg ${
                  !isLoading && isInView ? "animate-hero-cta-secondary" : ""
                }`}
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
