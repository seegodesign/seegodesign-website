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
      ref={sectionRef}
      className="hero"
    >
      {/* Background Image with Overlay */}
      <div className="hero__bg-container">
        <div
          className="hero__bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1698094276375-2989818836f5)' }}
        />
        <div className="hero__overlay"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-5xl">
            <h1
              className={`hero__headline ${
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
              className={`hero__subhead ${
              !isLoading && isInView ? "animate-hero-subhead" : ""
              }`}
            >
              Seego Design offers custom web solutions that drive growth, streamline operations, and bring your vision to life with clarity and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton
                className={!isLoading && isInView ? "animate-hero-cta-primary" : ""}
                text="Let's Talk"
                icon={ArrowRight}
              />
              <Link
                href="/tools"
                className={`${!isLoading && isInView ? "animate-hero-cta-secondary" : ""} button button--secondary`}
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
