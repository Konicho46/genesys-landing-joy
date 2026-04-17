import { Cpu, Sparkles, Code2 } from "lucide-react";
import phone from "@/assets/foto-it-1.png";
import ai from "@/assets/foto-it-3.png";
import software from "@/assets/foto-it.png";
import team from "@/assets/tim-genesys-2.png";

const items = [
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "A successful tech company starts with knowing how to use modern operations. We identify your services that need to be implementing a framework that aligns with your specific vision.",
    img: phone,
  },
  {
    icon: Sparkles,
    title: "AI Integration Suite",
    desc: "Adopting and shaping is essential for any company. We assist in setting up and automating processes, leveraging cognitive computing to transform raw data into actionable insights.",
    img: ai,
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailor-made software delivers exact specifications, integrating into existing workflows. We tailor every solution to optimize your team's day-to-day workflow.",
    img: software,
  },
];

const ModernTech = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Grow & Development
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 max-w-2xl text-balance">
            Modern Technology <span className="text-muted-foreground/70">and</span>
            <br /> Advancement Incentives
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 flex flex-col gap-5">
            {items.map(({ icon: Icon, title, desc, img }) => (
              <article
                key={title}
                className="group bg-card border border-border rounded-3xl p-4 shadow-soft hover:shadow-card transition-shadow flex gap-5 items-center"
              >
                <img
                  src={img}
                  alt=""
                  className="hidden sm:block size-28 lg:size-32 rounded-2xl object-cover shrink-0"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="size-7 rounded-md bg-accent/20 text-accent-foreground flex items-center justify-center">
                      <Icon className="size-4 text-primary" />
                    </span>
                    <h3 className="font-display font-bold text-lg lg:text-xl">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[420px] shadow-card">
            <img
              src={team}
              alt="Genesys Integrated Indonesia team focused on a project"
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
