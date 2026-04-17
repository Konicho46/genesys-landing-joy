import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Innovate from "@/components/site/Innovate";
import ModernTech from "@/components/site/ModernTech";
import Advantage from "@/components/site/Advantage";
import Portfolio from "@/components/site/Portfolio";
import Testimonial from "@/components/site/Testimonial";
import CtaSection from "@/components/site/CtaSection";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Innovate />
      <Marquee />
      <ModernTech />
      <Advantage />
      <Portfolio />
      <Testimonial />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
