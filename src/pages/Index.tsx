import Navbar from "@/components/shared/Navbar";
import Marquee from "@/components/shared/Marquee";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

import Hero from "@/components/home/Hero";
import Innovate from "@/components/home/Innovate";
import ModernTech from "@/components/home/ModernTech";
import Advantage from "@/components/home/Advantage";
import Portfolio from "@/components/home/Portfolio";
import Testimonial from "@/components/home/Testimonial";

import bgHome2 from "@/assets/home/bghome2.png";
import bgHome3 from "@/assets/home/bghome3.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />

      {/* Innovate + ModernTech share one continuous bghome2 background */}
      <div className="relative overflow-hidden">
        {/* Background image — scaled up */}
        <div
          className="absolute inset-0 z-0 scale-[1.2]"
          style={{
            backgroundImage: `url(${bgHome2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.12,  
          }}
        />
        <div className="relative z-10">
          <Innovate />
          <ModernTech />
        </div>
      </div>

      <Marquee />

      {/* Advantage + Portfolio + Testimonial share one continuous bghome3 background */}
      <div className="relative overflow-hidden">
        {/* Background image — same scale & opacity as bghome2 section */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgHome3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.30,
          }}
        />
        <div className="relative z-10">
          <Advantage />
          <Portfolio />
          <Testimonial />
        </div>
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
