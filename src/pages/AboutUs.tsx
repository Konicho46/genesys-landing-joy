import Navbar from "@/components/shared/Navbar";
import Marquee from "@/components/shared/Marquee";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";

import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about/AboutCompany";
import AboutLeader from "@/components/about/AboutLeader";
import AboutGoals from "@/components/about/AboutGoals";
import AboutCertifications from "@/components/about/AboutCertifications";
import AboutPartners from "@/components/about/AboutPartners";
import AboutTechnologies from "@/components/about/AboutTechnologies";

import bgHome3 from "@/assets/home/bghome3.png";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutCompany />
      <Marquee
        customItems={[
          "Summary Executive",
          "Summary Executive",
          "Summary Executive",
          "Summary Executive",
        ]}
      />
      <div className="relative overflow-hidden">
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
          <AboutLeader />
          <AboutGoals />
          <AboutCertifications />
          <AboutPartners />
        </div>
      </div>
      <AboutTechnologies />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default AboutUs;
