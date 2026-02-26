import { useEffect, useState, useRef } from "react";

export function useCountUp(end: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0);
  const hasCompleted = useRef(false);

  useEffect(() => {
    if (!start || !Number.isFinite(end) || end === 0) {
      setCount(end || 0);
      return;
    }

    hasCompleted.current = false;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        hasCompleted.current = true;
      }
    };

    // Small delay to ensure component is mounted and visible
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, start]);

  return count;
}
