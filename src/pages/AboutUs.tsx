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
      <AboutLeader />
      <AboutGoals />
      <AboutCertifications />
      <AboutPartners />
      <AboutTechnologies />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default AboutUs;
