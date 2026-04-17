import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import trial from "@/assets/foto-it-3.png";

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
    <section id="karier" className="bg-surface-dark text-surface-dark-foreground py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Trial card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex">
            <img
              src={trial}
              alt="Genesys team ready to start your next project"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="relative mt-auto p-6 lg:p-8 bg-accent text-accent-foreground rounded-2xl m-6 max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Work Inquiry
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mt-1">
                Let's Trial For your<br />Next Projects!
              </h3>
              <Button variant="dark" size="sm" className="rounded-full mt-5">
                Reach us
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[hsl(200_60%_88%)] text-foreground rounded-3xl p-8 lg:p-10 shadow-elev">
            <h3 className="font-display text-2xl lg:text-3xl font-bold">
              Request Demo For Trial!
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We are ready to help your tech projects. Just send us your inquiry.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required className="mt-1.5 bg-background" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@email.com" required className="mt-1.5 bg-background" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Project subject" className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your project" className="mt-1.5 bg-background" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" id="robot" className="size-4 accent-primary" required />
                <label htmlFor="robot">I'm not a robot</label>
              </div>
              <Button type="submit" variant="hero" className="rounded-full">
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
