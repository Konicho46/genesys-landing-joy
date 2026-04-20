// src/components/career/CareerContent.tsx
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import timGenesys2 from "@/assets/about/tim-genesys-2.png";
import timGenesys3 from "@/assets/about/tim-genesys-3.png";

const CAREER_LIST = [
  {
    id: "internship",
    title: "Internship Program",
    tag: "Career Development",
    desc: "We are looking for a Web Developer to create organized and integrated softwares. The ideal candidate should have experience in programming, possess logical programming skills and be able to work as a team.",
    requirements: [
      "HTML, CSS, Bootstrap",
      "Responsive Design",
      "JavaScript, jQuery",
      "Basic PHP for integration purposes",
    ],
    placement: "Surabaya",
    image: timGenesys2,
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    tag: "Career Development",
    desc: "We are looking for a Full-Stack Developer to create organized and integrated softwares. The ideal candidate should have experience in programming, possess logical programming skills and be able to work as a team.",
    requirements: [
      "HTML, CSS, Bootstrap",
      "Responsive Design",
      "JavaScript, jQuery",
      "Basic PHP for integration purposes",
    ],
    placement: "Surabaya",
    image: timGenesys2,
  },
];

const CareerContent = () => {
  const { ref: headerRef, className: headerReveal } = useReveal({ variant: "fade-up" });
  const { ref: listRef, className: listReveal } = useReveal({ variant: "fade-up" });
  const { ref: imageRef, className: imageReveal } = useReveal({ variant: "blur-in" });

  return (
    <section className="relative w-full bg-[#f8f8f8] overflow-hidden min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

        {/* Kolom Kiri: Teks dan Accordion */}
        <div className="col-span-1 lg:col-span-7 flex flex-col px-8 lg:px-16 py-20 lg:py-24">
          <div ref={headerRef} className={headerReveal}>
            <p className="text-secondary-foreground font-semibold tracking-wide mb-3">
              Career Development
            </p>
            <h2 className="text-4xl text-foreground font-display lg:text-5xl font-bold mb-14 tracking-tight">
              Looking For <span className="font-light text-muted-foreground/80">Talent People</span>
            </h2>
          </div>

          <div ref={listRef} className={`w-full ${listReveal}`}>
            <Accordion type="single" collapsible defaultValue="internship" className="w-full">
              {CAREER_LIST.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-border/50 bg-transparent mb-2"
                >
                  <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-accent transition-colors py-5 [&>svg]:hidden group">
                    <span className="flex items-center justify-between w-full">
                      {item.title}
                      <span className="group-data-[state=open]:hidden">
                        <Plus className="w-5 h-5 text-foreground" />
                      </span>
                      <span className="hidden group-data-[state=open]:block">
                        <Minus className="w-5 h-5 text-foreground" />
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      
                      {/* Foto per job */}
                      <div className="w-full md:w-[200px] shrink-0">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Teks konten */}
                      <div className="flex-1 flex flex-col text-muted-foreground">
                        {/* Tag Career Development */}
                        <p className="text-xs font-semibold tracking-widest uppercase text-secondary-foreground mb-3">
                          {item.tag}
                        </p>

                        <p className="mb-6 leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>

                        <div className="mb-6">
                          <p className="mb-2 font-medium text-foreground">Minimum requirements:</p>
                          <ul className="list-disc list-inside space-y-1 ml-1 text-sm md:text-base">
                            {item.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <p className="mb-6 text-sm md:text-base text-foreground font-medium">
                          Placement : {item.placement}
                        </p>

                        <p className="text-sm md:text-base leading-relaxed">
                          If you believe that Genesys might be the place for you, we invite you to send an email to{" "}
                          <a 
                            href="mailto:hrd@genesysindonesia.com"
                            className="text-accent underline font-medium hover:text-accent/80 transition-colors"
                          >
                            hrd@genesysindonesia.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Kolom Kanan: Foto Raksasa Statis */}
        <div className="col-span-1 lg:col-span-5 hidden lg:block relative">
          <div ref={imageRef} className={`absolute inset-0 ${imageReveal}`}>
            <img
              src={timGenesys3}
              alt="Genesys Career Culture"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerContent;