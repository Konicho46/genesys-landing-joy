import p0 from "@/assets/partners/Frame 236.png";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/partners/Frame 236 (1).png";
import p2 from "@/assets/partners/Frame 236 (2).png";
import p3 from "@/assets/partners/Frame 236 (3).png";
import p4 from "@/assets/partners/Frame 236 (4).png";
import p5 from "@/assets/partners/Frame 236 (5).png";
import p6 from "@/assets/partners/Frame 236 (6).png";
import p7 from "@/assets/partners/Frame 236 (7).png";
import p8 from "@/assets/partners/Frame 236 (8).png";
import p9 from "@/assets/partners/Frame 236 (9).png";
import p10 from "@/assets/partners/Frame 236 (10).png";
import p11 from "@/assets/partners/Frame 236 (11).png";

const partners = [
  { name: "Partner 1", image: p0 },
  { name: "Partner 2", image: p1 },
  { name: "Partner 3", image: p2 },
  { name: "Partner 4", image: p3 },
  { name: "Partner 5", image: p4 },
  { name: "Partner 6", image: p5 },
  { name: "Partner 7", image: p6 },
  { name: "Partner 8", image: p7 },
  { name: "Partner 9", image: p8 },
  { name: "Partner 10", image: p9 },
  { name: "Partner 11", image: p10 },
  { name: "Partner 12", image: p11 },
];

const AboutPartners = () => {
  const { ref, className } = useReveal({ variant: "fade-up" });
  return (
    <section ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          Delivering comprehensive solutions through synergy.
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10">
          Genesys Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center">
          {partners.map((p, index) => (
            <img
              key={index}
              src={p.image}
              alt={p.name}
              title={p.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain transition-transform hover:scale-110"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
