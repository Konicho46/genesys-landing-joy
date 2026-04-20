import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import akusehat from "@/assets/portfolio/mockup-akusehat.png";
import artha from "@/assets/portfolio/mockup-artha.png";
import pmi from "@/assets/portfolio/mockup-pmi.png";
import mcp from "@/assets/portfolio/mockup-mcp.png";
import otsuka from "@/assets/portfolio/mockup-otsuka.png";
import cmw from "@/assets/portfolio/mockup-cmw.png";

const items = [
  {
    tag: "AI Implementation",
    title: "AkuSehat.ai",
    body: "AkuSehat.ai revolutionizes personal wellness by delivering medical-grade health insights through advanced AI facial scanning. This intuitive mobile application eliminates the need for complex hardware, allowing users to monitor vital health indicators instantly with high accuracy. By transforming a simple smartphone camera into a powerful diagnostic tool, we empower you to take proactive control of your health with ease and precision.",
    image: akusehat,
  },
  {
    tag: "Salesforce & Enterprise Resource Planning",
    title: "PT. Artha Jaya Abadi Bersinar",
    body: "PT. Artha Jaya Abadi Bersinar provides a comprehensive digital ecosystem designed to maximize corporate efficiency. By integrating a high-performance mobile app, a data-driven Salesforce web platform, and a centralized cooperation portal, we streamline operations and strengthen stakeholder connectivity. This unified approach empowers your business to optimize sales pipelines and maintain seamless communication across all organizational levels.",
    image: artha,
  },
  {
    tag: "Enterprise Resource Planning & Human Resource Management",
    title: "Palang Merah Indonesia",
    body: "We built a nationwide, single-gateway platform: Salmon ERP to manage facilities and donations so data stays tidy, traceable, and national reports are issued faster; and Snapper HRM that complies with the latest PPh 21 income-tax rules, with GPS-based mobile attendance so data consolidates automatically at HQ. The result: payroll across all branches is faster, more accurate, and easier to audit.",
    image: pmi,
  },
  {
    tag: "Enterprise Resource Planning & Hardware Infrastructure",
    title: "PT. Mutiara Cahaya Plastindo",
    body: "We implemented a customized Desktop ERP for plastic manufacturing to make operations more orderly and measurable. On the infrastructure side, we set up SQL + Windows Server configured with MikroTik for secure network access, stable systems, and optimal database performance from the back end to day-to-day operations.",
    image: mcp,
  },
  {
    tag: "Internet of Things",
    title: "PT. Otsuka Indonesia",
    body: "We implemented Salmon ERP to unify sales, logistics, and accounting across three branches, automatically linking the order → picking → shipping flow to inventory, shipping, and general ledger posting. Management gained a consolidated branch and national dashboard for real-time monitoring, accelerating the closing process and improving reporting accuracy.",
    image: otsuka,
  },
  {
    tag: "Internet of Things",
    title: "PT. Central Motor Wheel Indonesia",
    body: "We implemented Codetrack to comply with BPOM Regulation No. 22/2022: each package has a unique 2D code printed and verified automatically on the line. Serial numbers are recorded end-to-end from production to the warehouse, preventing duplication and accelerating traceability and recalls.",
    image: cmw,
  },
];

const PortfolioItem = ({ it, cardWidthPercent, index }: any) => {
  const { ref, className } = useReveal({ variant: "fade-up", delay: index * 100 });
  return (
    <article
      ref={ref}
      className={`shrink-0 px-2.5 first:pl-0 last:pr-0 ${className}`}
      style={{ width: `${cardWidthPercent}%` }}
    >
      <Card className="rounded-3xl shadow-soft hover:shadow-card transition-shadow h-full flex flex-col overflow-hidden border-border">
        {/* Mockup image */}
        <div className="h-48 bg-muted/40 overflow-hidden flex items-center justify-center p-4">
          <img
            src={it.image}
            alt={`${it.title} mockup`}
            className="max-h-full w-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </div>
        {/* Text */}
        <CardHeader className="pb-2 flex-1">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground mb-2">
            {it.tag}
          </p>
          <CardTitle className="font-display text-lg font-bold leading-snug">{it.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-6 flex-1">
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">
            {it.body}
          </p>
        </CardContent>
      </Card>
    </article>
  );
};

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);
  const [dragOffset, setDragOffset] = useState(0); // live px offset while dragging
  const [dragging, setDragging]     = useState(false);

  const dragStartX = useRef<number | null>(null);
  const sliderRef  = useRef<HTMLDivElement>(null);

  // Detect screen width to set how many cards are visible
  useEffect(() => {
    const update = () => setVisible(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = items.length - visible; // max starting index
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
    // Clamp: don’t drag beyond start or end
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
  const handleMouseDown  = (e: React.MouseEvent)  => onDragStart(e.clientX);
  const handleMouseMove  = (e: React.MouseEvent)  => onDragMove(e.clientX);
  const handleMouseUp    = (e: React.MouseEvent)  => onDragEnd(e.clientX);
  const handleMouseLeave = (e: React.MouseEvent)  => { if (dragStartX.current !== null) onDragEnd(e.clientX); };

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => { e.stopPropagation(); onDragStart(e.touches[0].clientX); };
  const handleTouchMove  = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const handleTouchEnd   = (e: React.TouchEvent) => onDragEnd(e.changedTouches[0].clientX);

  const cardWidthPercent = 100 / visible;
  const { ref: revealRef, className: sectionClassName } = useReveal({ variant: "fade-up" });

  return (
    <section id="portfolio" ref={revealRef} className={`py-20 lg:py-28 ${sectionClassName}`}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header row with arrows */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Our Portfolio
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 text-balance">
              Explore Our Recent{" "}
              <span className="text-muted-foreground/60">Portfolio</span>
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
                index >= maxIndex ? "opacity-0 pointer-events-none" : "opacity-100"
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
            {items.map((it, i) => (
              <PortfolioItem key={it.title} it={it} cardWidthPercent={cardWidthPercent} index={i} />
            ))}
          </div>
        </div>

        {/* Dots — one per slide position, clickable */}
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

export default Portfolio;
