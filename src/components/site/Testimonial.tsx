import { Quote } from "lucide-react";
import erica from "@/assets/client-erica.png";

const Testimonial = () => {
  return (
    <section id="client" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Client Feedback
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-2 text-balance">
            What People Are Saying <span className="text-muted-foreground/70">About Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Quote className="size-10 text-accent" />
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90 mt-4 max-w-3xl">
              "Working with Genesys is a great experience from end to end. As a non-technical
              founder, I needed a partner I could trust — and from discovery to deployment they
              consistently shipped quality work, communicated clearly, and made our product feel
              truly ours. I would recommend them to any business looking for a long-term tech
              partner."
            </p>
            <div className="mt-6">
              <div className="font-semibold">Erica Puspa Sari Santoso</div>
              <div className="text-sm text-muted-foreground">CT. Suara Sukma · Business Owner</div>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-accent/30 blur-2xl" />
              <img
                src={erica}
                alt="Erica Puspa Sari Santoso, Genesys client"
                className="relative size-56 lg:size-64 object-cover rounded-3xl shadow-card"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
