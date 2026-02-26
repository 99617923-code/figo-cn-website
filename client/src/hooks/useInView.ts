import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  // Default to true so content is always visible even if observer fails
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    // Reset to false only if observer is available, then let it trigger
    setIsInView(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.01, rootMargin: "200px 0px", ...options }
    );

    observer.observe(element);

    // Fallback: if not visible after 500ms, force visible
    const fallbackTimer = setTimeout(() => {
      setIsInView(true);
    }, 500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return { ref, isInView };
}
