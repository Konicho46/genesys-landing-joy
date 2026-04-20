import { useEffect, useRef, useState } from "react";

type RevealVariant =
  | "fade-up" | "fade-down" | "fade-left" | "fade-right"
  | "zoom-in" | "zoom-out" | "flip-x" | "flip-y" | "blur-in";

interface UseRevealOptions {
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  initialVisible?: boolean;
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
      timeoutId = setTimeout(() => setVisible(true), 80 + delay);
      return () => clearTimeout(timeoutId);
    }

    const el = ref.current;
    if (!el) return;

    // ✅ Cek apakah elemen sudah visible saat mount (misal pas refresh di tengah halaman)
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      timeoutId = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timeoutId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { 
        threshold,
        rootMargin: "0px 0px -50px 0px" // ✅ trigger lebih awal sebelum benar-benar masuk viewport
      }
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