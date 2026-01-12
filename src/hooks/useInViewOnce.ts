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
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
