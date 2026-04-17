const technologies = [
  { name: "React", color: "#61DAFB", bg: "#20232A" },
  { name: "Flutter", color: "#54C5F8", bg: "#0553B1" },
  { name: "Ionic", color: "#4E8EF7", bg: "#1A1A2E" },
  { name: "Figma", color: "#F24E1E", bg: "#1E1E2E" },
  { name: "Firebase", color: "#FFCA28", bg: "#1A1A2E" },
  { name: "AWS", color: "#FF9900", bg: "#232F3E" },
  { name: "Azure", color: "#0089D6", bg: "#0B3D91" },
  { name: "MySQL", color: "#00758F", bg: "#E48E00" },
  { name: "Vue.js", color: "#4FC08D", bg: "#1A1A2E" },
  { name: "Kotlin", color: "#7F52FF", bg: "#1A1A2E" },
  { name: "Node.js", color: "#68A063", bg: "#1A1A2E" },
  { name: "Bootstrap", color: "#7952B3", bg: "#1A1A2E" },
  { name: "Docker", color: "#2496ED", bg: "#1A1A2E" },
  { name: "Go", color: "#00AED8", bg: "#1A1A2E" },
  { name: "Laravel", color: "#FF2D20", bg: "#1A1A2E" },
  { name: "TypeScript", color: "#3178C6", bg: "#1A1A2E" },
  { name: "GraphQL", color: "#E535AB", bg: "#1A1A2E" },
  { name: "Redis", color: "#DC382D", bg: "#1A1A2E" },
  { name: "Kubernetes", color: "#326CE5", bg: "#1A1A2E" },
  { name: "Terraform", color: "#7B42BC", bg: "#1A1A2E" },
];

const AboutTechnologies = () => {
  return (
    <section className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          We are proudly integrated &amp; registered organizations
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10">
          Genesys Technologies
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-3">
          {technologies.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center justify-center gap-1.5 rounded-2xl p-3 border border-border hover:shadow-soft transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: t.bg }}
            >
              <div
                className="size-9 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: t.color + "30", color: t.color }}
              >
                {t.name.slice(0, 2)}
              </div>
              <span
                className="text-[9px] font-semibold text-center leading-tight"
                style={{ color: t.color }}
              >
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTechnologies;
