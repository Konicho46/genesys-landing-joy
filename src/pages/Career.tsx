import Navbar from "@/components/shared/Navbar";
import CtaSection from "@/components/shared/CtaSection";
import Footer from "@/components/shared/Footer";
import CareerHero from "@/components/career/CareerHero";
import CareerContent from "@/components/career/CareerContent";

const Career = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CareerHero />
      <CareerContent />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Career;
