import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import cert1 from "@/assets/certifications/ibm.png";
import cert2 from "@/assets/certifications/zebra.png";
import cert3 from "@/assets/certifications/hpe.png";
import cert4 from "@/assets/about/tim-genesys-2.png";

const certs = [
  { title: "ISO 9001:2015 Quality Management", image: cert1 },
  { title: "Microsoft Partner Certified", image: cert2 },
  { title: "AWS Authorized Partner", image: cert3 },
  { title: "Google Cloud Certified", image: cert4 },
];

const AboutCertifications = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive: show 1 card on small, 2 on medium, 3 on large
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, certs.length - visible);
  const clampedIndex = Math.min(index, maxIndex);

  // Sync state only when it actually needs clamping (e.g. after resize)
  if (clampedIndex !== index) {
    setIndex(clampedIndex);
  }

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // ── Smooth drag / swipe ──────────────────────────────────────
  const THRESHOLD = 60;

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    setDragging(true);
    setDragOffset(0);
  };

  const onDragMove = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = clientX - dragStartX.current;
    const containerW = sliderRef.current?.clientWidth ?? 0;
    const maxPx = containerW * 0.6;
    setDragOffset(Math.max(-maxPx, Math.min(maxPx, delta)));
  };

  const onDragEnd = (clientX: number) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - clientX;
    setDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
    if (Math.abs(delta) >= THRESHOLD) {
      delta > 0 ? next() : prev();
    }
  };

  // Mouse
  const handleMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX);
  const handleMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) onDragEnd(e.clientX);
  };

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    onDragStart(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) =>
    onDragMove(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) =>
    onDragEnd(e.changedTouches[0].clientX);

  const cardWidthPercent = 100 / visible;
  const { ref: revealRef, className: revealClassName } = useReveal({ variant: "fade-up" });

  return (
    <section ref={revealRef} className={`py-20 lg:py-28 ${revealClassName}`}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header row with arrows */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              Ensuring quality through rigorous professional training.
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Genesys Certifications
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous"
              className={`rounded-full transition-all duration-200 ${
                index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next"
              className={`rounded-full transition-all duration-200 ${
                index >= maxIndex
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        {/* Slider container */}
        <div
          ref={sliderRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex ease-in-out"
            style={{
              transform: `translateX(calc(-${index * cardWidthPercent}% + ${dragOffset}px))`,
              transition: dragging ? "none" : "transform 0.35s ease-in-out",
            }}
          >
            {certs.map((cert) => (
              <article
                key={cert.title}
                className="shrink-0 px-2.5 first:pl-0 last:pr-0"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <Card className="rounded-2xl shadow-soft hover:shadow-card transition-shadow overflow-hidden border-border">
                  <div className="aspect-[4/3] bg-muted/20 overflow-hidden p-4">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
