import { Plus } from "lucide-react";

const CertCard = ({ label, index }: { label: string; index: number }) => {
  const colors = ["#1e4d6b", "#2d6a4f", "#0B2A2E"];
  const bg = colors[index % colors.length];
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-card transition-shadow">
      <div
        className="h-48 flex flex-col items-center justify-center gap-3 text-white"
        style={{ backgroundColor: bg }}
      >
        <div className="size-12 rounded-full bg-white/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-white">
            <path
              d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-xs font-semibold tracking-wider text-center px-4 text-white/80">
          {label}
        </span>
      </div>
      <div className="p-4 bg-card">
        <p className="text-xs font-semibold text-foreground/80">{label}</p>
        <p className="text-xs text-muted-foreground mt-1">Certified · Active</p>
      </div>
    </div>
  );
};

const certs = [
  "ISO 9001:2015 Quality Management",
  "Microsoft Partner Certified",
  "AWS Authorized Partner",
];

const AboutCertifications = () => {
  return (
    <section className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              We are proudly integrated &amp; registered organizations
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Genesys Certifications
            </h2>
          </div>
          <button className="size-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-colors shadow-soft">
            <Plus className="size-5" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <CertCard key={c} label={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
