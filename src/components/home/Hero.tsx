// src/components/home/Hero.tsx
import { ChevronRight, ChevronLeft } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/foto-graha-pena.png";
import logoBlack from "@/assets/logo-genesys-black.png";
import bgHome1 from "@/assets/bghome1.png";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen relative"> {/* tambah relative di sini */}
      <div className="grid lg:grid-cols-[45fr_55fr] min-h-[calc(100vh-4rem)]">

        {/* ── LEFT ── */}
        <div className="relative flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-0 bg-[#fbfbfb] overflow-hidden">
          {/* Background image layer */}
          <div 
            className="absolute inset-0 z-0 opacity-10 scale-[2.5]"
            style={{ 
              backgroundImage: `url(${bgHome1})`, 
              backgroundPosition: "center", 
              backgroundSize: "cover", 
              backgroundRepeat: "no-repeat" 
            }}
          />
          <div className="relative z-10 max-w-lg">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Welcome to Genesys Integrated Indonesia
            </p>
            <h1 className="font-display text-4xl xl:text-5xl font-bold leading-tight text-foreground mt-4">
              We Make You Manage
              <br />
              Your Business Easier
            </h1>
            <hr className="my-6 border-border" />
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
              We specialize in delivering comprehensive software solutions tailored
              to meet the unique needs of businesses across various industries.
            </p>
            <div className="flex items-center gap-12 mt-8">
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">900+</div>
                <div className="text-xs text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
            <Button variant="accent" size="lg" className="mt-8 rounded-full font-semibold pr-6 pl-5 gap-2">
              <ChevronRight className="size-4 shrink-0" />
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* ── RIGHT: overflow-hidden TETAP ADA supaya foto tidak meluber ── */}
        <div className="relative min-h-[55vw] lg:min-h-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Gedung Graha Pena"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* ── Floating logo card ── */}
      <div className="
        absolute z-10 bg-white rounded-2xl shadow-xl flex items-center px-8 py-4 lg:px-10 lg:py-8
        bottom-8
        left-1/2 -translate-x-1/2
        lg:left-[45%] lg:-translate-x-1/2
      ">
        <img src={logoBlack} alt="Genesys logo" className="h-8 sm:h-12 xl:h-20 w-auto" />
      </div>
    </section>
  );
};

export default Hero;
