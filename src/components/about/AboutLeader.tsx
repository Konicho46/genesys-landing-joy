import donny from "@/assets/tim-genesys-2.png";

const AboutLeader = () => {
  return (
    <section className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">
          Summary Executive
        </p>
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
                Donny Susanto Witono is the visionary founder and managing director of PT
                Genesys Integrated Indonesia. With over 15 years of experience in the technology
                and software industry, Donny has led the company from a small startup to one of
                the most recognized IT solution providers in Eastern Indonesia.
              </p>
              <p>
                Under his leadership, Genesys has successfully delivered hundreds of projects
                ranging from enterprise resource planning systems to cutting-edge mobile
                applications and AI-powered tools. His passion for technology and business
                transformation drives the company's innovation-first culture.
              </p>
              <p>
                Donny holds a degree in Computer Science and has been a speaker at numerous
                national technology conferences, advocating for digital transformation across
                industries in Indonesia.
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
