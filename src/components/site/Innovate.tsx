import { ArrowUpRight, Check } from "lucide-react";
import office from "@/assets/tim-genesys-1.png";

const Innovate = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            We Are Genesys Integrated Indonesia
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 text-balance">
            Innovate Soft Solutions <span className="text-muted-foreground/70">to</span>
            <br /> Grow Tech Business
          </h2>
          <p className="text-muted-foreground mt-5 text-sm lg:text-base">
            With a passion for businesses, prospects, operating ventures rolled in
            our team has constantly demonstrated the ability to transform issues
            into high-performing, user-friendly applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Left image */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -top-6 -left-6 size-14 rounded-full bg-background shadow-card flex items-center justify-center z-10">
              <ArrowUpRight className="size-6 text-primary" />
            </div>
            <img
              src={office}
              alt="Genesys engineering team collaborating in the office"
              className="w-full h-[340px] lg:h-[420px] object-cover rounded-3xl shadow-card"
              loading="lazy"
            />
          </div>

          {/* Right stats */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Explore Our Achievement
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold mt-2">
              Premier Tech <span className="text-muted-foreground/70">Innovations</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl bg-info text-white p-6 shadow-card">
                <div className="size-9 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Check className="size-5" />
                </div>
                <div className="font-display text-4xl font-bold">900 +</div>
                <p className="text-sm/relaxed mt-2 text-white/85">
                  Trusted Software<br />Innovation Client
                </p>
              </div>
              <div className="rounded-2xl bg-dark-card text-white p-6 shadow-card">
                <div className="size-9 rounded-full bg-white/15 flex items-center justify-center mb-4">
                  <Check className="size-5" />
                </div>
                <div className="font-display text-4xl font-bold">125 +</div>
                <p className="text-sm/relaxed mt-2 text-white/85">
                  Best Aligned<br />Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovate;
