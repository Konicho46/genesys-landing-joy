import donny from "@/assets/about/founder.png";
import { useReveal } from "@/hooks/use-reveal";

const AboutLeader = () => {
  const { ref, className } = useReveal({ variant: "fade-up" });
  return (
    <section ref={ref} className={`py-20 lg:py-28 bg-hex-pattern ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">
              Donny Susanto Witono
            </h2>
            <p className="text-primary font-semibold mt-1 text-sm">
              Founder and Managing Director
            </p>
            <div className="space-y-4 mt-6 text-muted-foreground text-sm lg:text-base leading-relaxed">
              <p>
                Smart leader with expertise of analytical skill, system and project rollout, cisco based networking and windows server infrastructure. Recognized for achieving results by re-engineering information flow to optimize business system, utilization of reporting technologies to accelerate valuable information generation, and effective resource allocation to drive optimum IS performance.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-accent/20 blur-2xl" />
              <img
                src={donny}
                alt="Donny Susanto Witono, Founder Genesys"
                className="relative w-full max-w-sm h-[380px] object-cover object-top rounded-3xl shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeader;
