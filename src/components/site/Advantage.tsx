import { MonitorSmartphone, LayoutGrid, Users, BrainCircuit } from "lucide-react";

const items = [
  {
    icon: LayoutGrid,
    title: "Multi Platform Developers",
    desc: "Specialists in developing and building applications that can be used on a variety of popular platforms.",
  },
  {
    icon: MonitorSmartphone,
    title: "Progressive and Responsive Applications on Any Platform",
    desc: "Taking user experience to a higher level of comfort with high accuracy. By streaming your apps and services to any device with maximum results.",
  },
  {
    icon: Users,
    title: "Young And Dynamic Team",
    desc: "Energetic and dynamic team that has been a friend in recent technological success.",
  },
  {
    icon: BrainCircuit,
    title: "AI Knowledge",
    desc: "We leverage deep knowledge in AI-driven analytics and cognitive computing to transform data into strategic solutions.",
  },
];

const Advantage = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/40 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Our Advantage
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 text-balance">
            Delivering Comprehensive IT Services
            <br />
            <span className="text-muted-foreground/70">to Ensure Your Long-Term Success</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="size-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display font-bold text-base lg:text-lg leading-snug mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
