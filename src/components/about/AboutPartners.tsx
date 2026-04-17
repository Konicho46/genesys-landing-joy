const partners = [
  { name: "IBM", color: "#1F70C1" },
  { name: "HPE", color: "#00B388" },
  { name: "CYFOX", color: "#2E86AB" },
  { name: "FLOWSEC", color: "#E63946" },
  { name: "WITH", color: "#1D3557" },
  { name: "Netgate", color: "#E07B39" },
  { name: "binah.ai", color: "#6A0572" },
  { name: "DENSO", color: "#C0392B" },
  { name: "Altaro", color: "#2980B9" },
  { name: "Racoon", color: "#27AE60" },
  { name: "eXIDO", color: "#8E44AD" },
];

const AboutPartners = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          Trusted by leading organizations globally
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10">
          Genesys Partners
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-16 px-4 rounded-xl border border-border bg-card hover:shadow-soft transition-shadow"
            >
              <span
                className="font-display font-bold text-base tracking-tight"
                style={{ color: p.color }}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
