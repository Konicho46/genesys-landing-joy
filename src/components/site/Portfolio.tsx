import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import akusehat from "@/assets/mockup-akusehat.png";
import artha from "@/assets/mockup-artha.png";

const items = [
  {
    title: "AkuSehat.ai",
    body: "AkuSehat.ai is a complete and innovative healthtech platform aimed to assist individuals in achieving optimal well-being. It functions as a guide on how to engage in a wholesome lifestyle by detailing healthy meals, exercise routines, and sleep patterns.",
    image: akusehat,
  },
  {
    title: "PT. Artha Jaya Abadi Borsinar",
    body: "PT. Artha Jaya Abadi Borsinar offers a comprehensive ecosystem to optimize fleet operations efficiency. Our flagship high-performance dashboard performs end-to-end deep solutions, and improves operations and safety. It is a critical part of any fleet's success.",
    image: artha,
  },
];

const Portfolio = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section id="webpaper" className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Our Portfolio
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 text-balance">
            Explore Our Recent <span className="text-muted-foreground/70">Portfolio</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {items.map((it, idx) => (
            <article
              key={it.title}
              className={`relative bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-soft transition-opacity ${
                idx === i || (typeof window !== 'undefined' && window.innerWidth >= 1024) ? "opacity-100" : "opacity-100"
              }`}
            >
              <div className="grid grid-cols-2 gap-5 items-center">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    Project Portfolio
                  </p>
                  <h3 className="font-display text-xl lg:text-2xl font-bold mt-2">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{it.body}</p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={it.image}
                    alt={`${it.title} mockup`}
                    className="max-h-72 w-auto object-contain drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pager */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            aria-label="Previous"
            className="size-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="size-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
