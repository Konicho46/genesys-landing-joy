import { Home, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/foto-graha-pena.png";

const AboutHero = () => {
  return (
    <section className="relative min-h-[45vh] flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Kantor Genesys Integrated Indonesia"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A2E]/90 via-[#0B2A2E]/60 to-[#0B2A2E]/30" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16 pt-32">
        <h1 className="font-display text-4xl lg:text-6xl font-bold text-white">About Us</h1>
        <nav
          className="flex items-center gap-1.5 mt-3 text-sm text-white/70"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="size-4" />
            Home
          </Link>
          <ChevronRight className="size-4 text-white/40" />
          <span className="text-accent font-medium">About Us</span>
        </nav>
      </div>
    </section>
  );
};

export default AboutHero;
