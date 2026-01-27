'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import ContactButton from "./ContactButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type HeroProps = {
  isLoading: boolean;
};

export function Hero({ isLoading }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const headlineSeed = "Creative solutions for businesses that";
  const phrases = useMemo(
    () => [
      "have a vision for growth",
      "have outgrown patchwork systems",
      "are ready to automate ",
      "need to scale efficiently",
      "want to turn ideas into reality",
      "need clarity, not complexity"
    ],
    []
  );

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
  }, [isLoading, isInView, isDeleting, phraseIndex, typedText, phrases.length, phrases]);

  // const scrollToTestimonials = () => {
  //   const element = document.getElementById("case-studies");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-bg hero-bg--kenburns absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1698094276375-2989818836f5)' }}
        />
        <div className="hero-overlay"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-5xl">
            <h1
              className={`text-[color:var(--color-text)] mb-8 font-semibold leading-tight text-4xl sm:text-6xl md:text-4xl lg:text-6xl ${
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
              className={`text-[color:var(--color-text-muted)] text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl leading-relaxed ${
              !isLoading && isInView ? "animate-hero-subhead" : ""
              }`}
            >
              Seego Design offers custom web solutions that drive growth, streamline operations, and bring your vision to life with clarity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton text="Let's Talk" icon={ArrowRight} />
              <Link
                href="/tools"
                className="button button--secondary"
              >
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
