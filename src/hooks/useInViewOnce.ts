'use client';

import { useEffect, useRef, useState } from "react";

type UseInViewOnceOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInViewOnce<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin,
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => {
      setIsInView(true);
    }, 400);
    const element = ref.current;
    if (!element) {
      return () => window.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          window.clearTimeout(fallbackTimer);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
