// src/components/home/ModernTech.tsx
import { Cpu, Brain, Code2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Card, CardContent } from "@/components/ui/card";
import phone from "@/assets/about/foto-it-1.png";
import ai from "@/assets/about/foto-it-3.png";
import software from "@/assets/about/foto-it.png";
import team from "@/assets/about/tim-genesys-1.png";

const items = [
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Expert consultation to navigate the digital landscape and future-proof operations. We identify architectural bottlenecks and implement agile frameworks that scale with your global ambitions.",
    img: phone,
    imgRight: false,
  },
  {
    icon: Brain,
    title: "AI Integration Suite",
    desc: "A trio of specialized AI solutions for seamless business integration, predictive analytics, and automated engagement. Leverage cognitive computing to transform raw data into executable intelligence.",
    img: software,
    imgRight: true,
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailor-made software delivers exact specifications, integrating into existing workflows. We tailor every solution to optimize your team's day-to-day workflow and maximize productivity.",
    img: ai,
    imgRight: false,
  },
];

const ModernTech = () => {
  const { ref, className } = useReveal({ variant: "flip-y" });

  return (
    <section ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: header + cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">

            {/* Header — sekarang di dalam kolom kiri */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Grow &amp; Development
              </p>
              <h2 className="font-display text-3xl lg:text-[2.75rem] font-bold mt-2 max-w-xl leading-tight text-balance">
                <span className="text-foreground">Modern Technology </span>
                <span className="text-muted-foreground/80">
                  and
                  <br />
                  Advancement Incentives
                </span>
              </h2>
            </div>

            {/* Service cards */}
            {items.map(({ icon: Icon, title, desc, img, imgRight }) => (
              <Card
                key={title}
                className={`group overflow-hidden shadow-soft hover:shadow-card transition-shadow flex rounded-2xl ${
                  imgRight ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="w-[140px] lg:w-[160px] shrink-0">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="flex-1 p-5 pt-5 pb-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-7 rounded-md bg-accent/20 flex items-center justify-center">
                      <Icon className="size-4 text-accent-foreground" />
                    </span>
                    <h3 className="font-display font-bold text-base lg:text-lg">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* RIGHT: full-height portrait — kini sejajar dari header sampai bawah */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-0 shadow-card">
            <img
              src={team}
              alt="Tim Genesys — developer dengan kacamata dan rekan"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernTech;