import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import trial from "@/assets/about/tim-genesys-2.png";

const CtaSection = () => {
  const { toast } = useToast();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request sent",
      description: "Thank you! Our team will reach out within 1 business day.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="karier" className="py-20 lg:py-24 bg-[hsl(188_55%_11%)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left image card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end">
            <img
              src={trial}
              alt="Tim Genesys siap memulai proyek Anda"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A2E]/90 via-[#0B2A2E]/40 to-transparent" />
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
          </div>

          {/* Right form card */}
          <div className="bg-[hsl(200_50%_88%)] text-foreground rounded-3xl p-8 lg:p-10 shadow-elev">
            <h3 className="font-display text-2xl lg:text-3xl font-bold">
              Request Demo For Trial!
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We are ready to help your tech projects. Just send us your inquiry.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cta-name">Name</Label>
                  <Input
                    id="cta-name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="mt-1.5 bg-background"
                  />
                </div>
                <div>
                  <Label htmlFor="cta-email">Email</Label>
                  <Input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="mt-1.5 bg-background"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cta-subject">Subject</Label>
                <Input
                  id="cta-subject"
                  name="subject"
                  placeholder="Project subject"
                  className="mt-1.5 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="cta-message">Message</Label>
                <Textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your project"
                  className="mt-1.5 bg-background"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="cta-robot" required className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
                <Label htmlFor="cta-robot" className="text-xs text-muted-foreground cursor-pointer">
                  I'm not a robot
                </Label>
              </div>
              <Button type="submit" variant="hero" className="rounded-full font-semibold">
                Submit Inquiry
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
