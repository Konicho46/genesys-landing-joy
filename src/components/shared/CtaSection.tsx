import teamImg from "@/assets/about/tim-genesys-2.png";
import ContactImageCard from "@/components/shared/ContactImageCard";
import DemoRequestForm from "@/components/shared/DemoRequestForm";

const CtaSection = () => {
  return (
    <section id="karier" className="py-20 lg:py-24 bg-[hsl(188_55%_11%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <ContactImageCard
            variant="work-inquiry"
            imageSrc={teamImg}
            imageAlt="Tim Genesys siap memulai proyek Anda"
          />

          <DemoRequestForm variant="cta" />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;