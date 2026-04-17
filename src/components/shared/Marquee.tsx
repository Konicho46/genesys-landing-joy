const items = [
  "App Developments",
  "Software Developments",
  "Custom Solutions",
  "AI Integration",
  "IT Consulting",
  "Cloud Services",
];

interface MarqueeProps {
  variant?: "dark" | "light";
  customItems?: string[];
}

const Marquee = ({ variant = "dark", customItems }: MarqueeProps) => {
  const displayItems = customItems ?? items;
  const loop = [...displayItems, ...displayItems, ...displayItems];
  const isDark = variant === "dark";

  return (
    <div
      className={`py-4 lg:py-5 overflow-hidden ${
        isDark ? "bg-[#0B2A2E]" : "bg-surface-soft"
      }`}
    >
      <div className="flex w-max animate-marquee gap-10 px-6">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10">
            <span
              className={`font-display text-xl lg:text-2xl font-bold whitespace-nowrap ${
                isDark ? "text-white/90" : "text-surface-soft-foreground/80"
              }`}
            >
              {t}
            </span>
            <span
              className={`size-2 rounded-full ${
                isDark ? "bg-accent" : "bg-surface-soft-foreground/40"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
