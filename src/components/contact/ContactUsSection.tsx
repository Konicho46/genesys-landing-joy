import { Mail, Phone } from "lucide-react";
import teamImg from "@/assets/about/tim-genesys-2.png";
import ContactImageCard from "@/components/shared/ContactImageCard";
import DemoRequestForm from "@/components/shared/DemoRequestForm";

const ContactUsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        {/* Top: Image card + Form */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          <ContactImageCard
            variant="integrated"
            imageSrc={teamImg}
            imageAlt="Genesys Team"
          />

          <DemoRequestForm variant="contact" />
        </div>

        <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-border/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-xs">
            <h4 className="font-display text-xl font-bold text-foreground mb-2">Direct Outreach</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prefer a traditional conversation? Reach out to our regional headquarters in Surabaya.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 w-full lg:w-auto">
            <div className="flex items-start gap-4">
              <div className="bg-muted p-2.5 rounded-lg shrink-0">
                <Mail className="size-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Email Support
                </p>
                <a
                  href="mailto:marketing@genesysindonesia.com"
                  className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-all"
                >
                  marketing@genesysindonesia.com
                </a>
              </div>
            </div>

            {/* Hotline */}
            <div className="flex items-start gap-4">
              <div className="bg-muted p-2.5 rounded-lg shrink-0">
                <Phone className="size-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Hotline
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+62817373851"
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-words"
                  >
                    +62 817-373-851 (Marketing)
                  </a>
                  <a
                    href="tel:+628113538188"
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-words"
                  >
                    +62 811-353-8188 (HR)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUsSection;