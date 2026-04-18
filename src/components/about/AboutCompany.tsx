import team from "@/assets/about/foto-bersama.png";

const AboutCompany = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={team}
              alt="Tim Genesys Integrated Indonesia"
              className="w-full h-[360px] lg:h-[440px] object-cover object-top rounded-3xl shadow-card"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Who We Are
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 text-balance">
              Genesys Integrated Indonesia
            </h2>
            <div className="space-y-4 mt-6 text-muted-foreground text-sm lg:text-base leading-relaxed">
              <p>
                PT. Genesys Integrated Indonesia is a technology company focused on delivering
                innovative software solutions tailored for businesses across multiple industries.
                From enterprise systems to mobile applications, we bring ideas to life with
                precision and passion.
              </p>
              <p>
                Founded with a vision to bridge the gap between complex technology and business
                needs, Genesys has grown into a trusted partner for hundreds of clients across
                Indonesia and beyond. Our expertise spans web development, mobile apps, AI
                integration, custom ERP systems, and cloud infrastructure.
              </p>
              <p>
                With a young, dynamic, and highly skilled team, we consistently deliver
                high-quality technology solutions that drive real business growth, efficiency,
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
