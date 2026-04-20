import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/about/foto-graha-pena.png";
import { useReveal } from "@/hooks/use-reveal";

const CareerHero = () => {
  const { ref, className } = useReveal({ variant: "blur-in" });
  return (
    <section ref={ref} className={`relative min-h-[45vh] flex items-end overflow-hidden ${className}`}>
      <img
        src={hero}
        alt="Career Banner Genesys Integrated Indonesia"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A2E]/90 via-[#0B2A2E]/60 to-[#0B2A2E]/30" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16 pt-32">
        <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight">Career</h1>
        <nav
          className="flex items-center gap-1.5 mt-4 text-sm font-medium text-white/70"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="flex items-center gap-1.5 hover:text-white transition-colors duration-200">
            <Home className="size-4" />
            Home
          </Link>
          <span className="text-white/40 leading-none mb-1">•</span>
          <span className="text-accent">Career</span>
        </nav>
      </div>
    </section>
  );
};

export default CareerHero;
