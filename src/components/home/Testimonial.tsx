import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
import erica from "@/assets/client-erica.png";

const testimonials = [
  {
    quote:
      "Salmon by Genesys helps us get more work done with less manpower. Implementing Salmon generates faster month-end reports with better control over data. Being customizable and adjustable to our specific busines needs makes Salmon our main choice to assist business advancement. Insights from Salmon drove better decision making on production and purchasing with computerized documents.",
    name: "Erica Puspa Sari Santoso",
    role: "CV. Cokro Bersatu — Business Owner",
    image: erica,
  },
  {
    quote:
      "Using the GSL and GACC applications from Genesys helps our company work more efficiently than without these products. This application makes it easier for us to check data and reports more easily. Besides that, the specific features such as database synchronization between main office and branches create great benefits for our company. Insights from GSL and GACC making report communication effective and computerized.",
    name: "Bu Susan",
    role: "Mutiara Cahaya Plastindo — General Manager",
    image: null as string | null,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(testimonials.length - 1, i + 1));

  return (
    <section id="client" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Client Feedback
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 text-balance">
              What People Are Saying{" "}
              <span className="text-muted-foreground/60">About Us</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className={`size-10 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-200 hover:bg-muted ${index === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className={`size-10 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-200 hover:bg-muted ${index >= testimonials.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Testimonial card */}
        <div
          key={index}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in duration-300"
        >
          <div className="lg:col-span-8 order-2 lg:order-1">
            <Quote className="size-10 text-accent" />
            <p className="text-base lg:text-xl leading-relaxed text-foreground/85 mt-4 max-w-3xl">
              "{active.quote}"
            </p>
            <div className="mt-6">
              <div className="font-semibold text-foreground">{active.name}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{active.role}</div>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-accent/20 blur-2xl" />
              {active.image ? (
                <img
                  src={active.image}
                  alt={active.name}
                  className="relative size-52 lg:size-60 object-cover object-top rounded-3xl shadow-card"
                  loading="lazy"
                />
              ) : (
                <div className="relative size-52 lg:size-60 rounded-3xl shadow-card bg-muted flex flex-col items-center justify-center gap-3">
                  <User className="size-16 text-muted-foreground/40" strokeWidth={1} />
                  <span className="text-xs text-muted-foreground/60 font-medium text-center px-4">{active.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
