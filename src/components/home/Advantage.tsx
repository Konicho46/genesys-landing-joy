// src/components/home/Advantage.tsx
import { MonitorSmartphone, LayoutGrid, Users, Brain } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const items = [
  {
    icon: LayoutGrid,
    title: "Multi Platform Developers",
    desc: "Specialists in developing and building applications that can be used on a variety of popular platforms.",
  },
  {
    icon: MonitorSmartphone,
    title: "Progressive and Responsive Applications",
    desc: "Taking user experience to a higher level of comfort with high accuracy. By streaming your apps and services to any device with maximum results.",
  },
  {
    icon: Users,
    title: "Young And Dynamic Team",
    desc: "Energetic and dynamic team that has been a friend in recent technological success.",
  },
  {
    icon: Brain,
    title: "AI Knowledge",
    desc: "We leverage deep knowledge in AI-driven analytics and cognitive computing to transform data into strategic solutions.",
  },
];

const AdvantageCard = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => {
  const { ref, className } = useReveal({
    variant: "fade-up",
    delay: index * 120,
  });
  
  return (
    <Card
      ref={ref}
      className={`rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <CardHeader className="pb-2">
        <div className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
          <Icon className="size-5" />
        </div>
        <CardTitle className="font-display text-base lg:text-[1.05rem] leading-snug">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );
};

const Advantage = () => {
  const { ref, className } = useReveal({ variant: "zoom-in" });

  return (
    <section ref={ref} className={`py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Our Advantage
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 text-balance">
            Delivering Comprehensive IT Services
            <br />
            <span className="text-muted-foreground/60">
              to Ensure Your Long-Term Success
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon, title, desc }, i) => (
            <AdvantageCard key={title} icon={icon} title={title} desc={desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
