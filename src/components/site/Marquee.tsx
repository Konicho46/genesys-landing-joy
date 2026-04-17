const items = [
  "App Developments",
  "Software Developments",
  "Custom Solutions",
  "AI Integration",
  "IT Consulting",
  "Cloud Services",
];

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="bg-surface-soft py-5 lg:py-6 mt-12 lg:mt-16 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 px-6">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-2xl lg:text-3xl font-bold text-surface-soft-foreground/80 whitespace-nowrap">
              {t}
            </span>
            <span className="size-2 rounded-full bg-surface-soft-foreground/40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
