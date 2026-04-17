import { Eye, Target } from "lucide-react";

const goals = [
  {
    icon: Eye,
    label: "Vision",
    title: "Our Vision",
    desc: "To become the leading software solutions provider in Southeast Asia, empowering businesses of all sizes with innovative, reliable, and transformative technology that drives growth and efficiency.",
    cardClass: "bg-accent/20",
    iconBg: "bg-accent",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Target,
    label: "Mission",
    title: "Our Mission",
    desc: "To deliver high-quality, tailor-made technology solutions that exceed client expectations — built on a foundation of innovation, integrity, and a passionate commitment to long-term partnership and success.",
    cardClass: "bg-card",
    iconBg: "bg-primary",
    iconColor: "text-white",
  },
];

const AboutGoals = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          To set high performance through vision and future plans
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-12">Our Goals</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {goals.map(({ icon: Icon, label, title, desc, cardClass, iconBg, iconColor }) => (
            <article
              key={label}
              className={`rounded-3xl p-8 lg:p-10 border border-border shadow-soft ${cardClass}`}
            >
              <div
                className={`size-12 rounded-full ${iconBg} ${iconColor} flex items-center justify-center mb-5`}
              >
                <Icon className="size-6" />
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                {label}
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGoals;
