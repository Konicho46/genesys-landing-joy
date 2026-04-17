import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/foto-graha-pena.png";
import logo from "@/assets/logo-genesys-black.png";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left card */}
          <div className="lg:col-span-5 bg-background rounded-3xl p-8 lg:p-10 shadow-card relative z-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Welcome to Genesys Integrated Indonesia
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] mt-4 text-balance">
              We Make You <br /> Manage <br />
              <span className="text-primary">Your Business Easier</span>
            </h1>
            <p className="text-muted-foreground mt-5 text-sm lg:text-base leading-relaxed max-w-md">
              We organize and run an extensive software solutions tailored
              made for the various businesses across multiple industries.
            </p>

            <div className="flex items-end gap-10 mt-8">
              <div>
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary">900+</div>
                <div className="text-xs text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="hero" size="lg" className="rounded-full">
                Inquire to know more
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[560px] shadow-card">
            <img
              src={hero}
              alt="Modern office building where Genesys Integrated Indonesia operates"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />

            {/* Floating logo card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-background rounded-2xl px-5 py-4 shadow-card flex items-center gap-3">
              <img src={logo} alt="" className="h-9 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
