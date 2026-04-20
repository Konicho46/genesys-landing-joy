import { ArrowRight, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ImageCardVariant = "integrated" | "work-inquiry";

interface ContactImageCardProps {
  variant?: ImageCardVariant;
  imageSrc: string;
  imageAlt?: string;
}

/**
 * Reusable image card used in ContactUsSection (integrated) and CtaSection (work-inquiry).
 *
 * integrated    → rounded-xl, "Integrated Intelligence" overlay (dark gradient bottom)
 * work-inquiry  → rounded-3xl, "Work Inquiry / Let's Trial" overlay (teal-tinted gradient)
 */
const ContactImageCard = ({
  variant = "integrated",
  imageSrc,
  imageAlt = "Genesys Team",
}: ContactImageCardProps) => {
  const isIntegrated = variant === "integrated";

  return (
    <div
      className={`relative overflow-hidden min-h-[420px] flex flex-col justify-end ${
        isIntegrated ? "rounded-xl shadow-sm" : "rounded-3xl"
      }`}
    >
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient overlay */}
      {isIntegrated ? (
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A2E]/90 via-[#0B2A2E]/40 to-transparent" />
      )}

      {/* Content overlay */}
      {isIntegrated ? (
        /* ── Integrated Intelligence card ── */
        <div className="relative z-10 m-6 p-6 md:p-8 bg-transparent text-white w-full">
          <div className="mb-4">
            <Settings2 className="size-8 text-accent" />
          </div>
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-2">
            Integrated Intelligence
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm mb-6">
            Connecting your business units through a single, sophisticated ecosystem of curated tools.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="border border-white/30 text-white/90 text-xs font-semibold px-4 py-2 rounded-md uppercase tracking-wider backdrop-blur-sm">
              Global Standards
            </div>
            <div className="border border-white/30 text-white/90 text-xs font-semibold px-4 py-2 rounded-md uppercase tracking-wider backdrop-blur-sm">
              Local Insight
            </div>
          </div>
        </div>
      ) : (
        /* ── Work Inquiry card ── */
        <div className="relative z-10 m-6 p-6 lg:p-8 bg-accent text-accent-foreground rounded-2xl max-w-xs">
          <p className="text-xs font-bold uppercase tracking-wider opacity-80">
            Work Inquiry
          </p>
          <h3 className="font-display text-2xl lg:text-3xl font-bold mt-1 leading-tight">
            Let's Trial For your
            <br />
            Next Projects!
          </h3>
          <Button variant="dark" size="sm" className="rounded-full mt-5 font-semibold">
            Reach us
            <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContactImageCard;