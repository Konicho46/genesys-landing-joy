import { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "fade-up" | "fade-down" | "fade-left" | "fade-right"
  | "zoom-in" | "zoom-out" | "flip-x" | "flip-y" | "blur-in";

interface UseRevealOptions {
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  initialVisible?: boolean; // untuk Hero / above-the-fold
}

export function useReveal({
  variant = "fade-up",
  delay = 0,
  threshold = 0.08,
  initialVisible = false,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (initialVisible) {
      // langsung animasi dengan delay kecil biar keliatan
      timeoutId = setTimeout(() => setVisible(true), 80 + delay);
      return () => clearTimeout(timeoutId);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [delay, threshold, initialVisible]);

  return {
    ref,
    visible,
    className: `reveal-${variant}${visible ? " visible" : ""}`,
  };
}