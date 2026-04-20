import { ArrowRight, Send, Mail, Phone, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import teamImg from "@/assets/about/tim-genesys-2.png";

const ContactUsSection = () => {
  const { toast } = useToast();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request sent",
      description: "Thank you! Our team will reach out for your demo session.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 lg:py-24 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Atas: Gambar dan Form */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          
          {/* Kiri: Card Gambar */}
          <div className="relative rounded-xl overflow-hidden min-h-[420px] flex flex-col justify-end shadow-sm">
            <img
              src={teamImg}
              alt="Genesys Team"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Latar gelap gradien agar teks terang terbaca */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
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
          </div>

          {/* Kanan: Form Card */}
          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-border/40">
            <h3 className="font-display text-2xl lg:text-[28px] font-bold text-foreground">
              Request For Demo
            </h3>
            <p className="text-sm text-muted-foreground mt-2 mb-8">
              Please provide your professional details for a personalized session.
            </p>
            
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="demo-name" className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                    Full Name
                  </Label>
                  <Input
                    id="demo-name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-muted border-transparent focus-visible:bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-email" className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                    Email Address
                  </Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    placeholder="john@company.co.id"
                    required
                    className="bg-muted border-transparent focus-visible:bg-background"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="demo-service" className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Services
                </Label>
                <Select required>
                  <SelectTrigger className="w-full bg-muted border-transparent focus:bg-background">
                    <SelectValue placeholder="Choose Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="erp">ERP Implementation</SelectItem>
                    <SelectItem value="iot">IoT Solutions</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-message" className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                  Message/Notes
                </Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="bg-muted border-transparent focus-visible:bg-background resize-none"
                />
              </div>

              {/* Fake reCAPTCHA */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-md border border-border/50 max-w-[280px]">
                <div className="flex items-center gap-3">
                  <Checkbox id="recaptcha" required className="size-5" />
                  <Label htmlFor="recaptcha" className="text-sm font-medium cursor-pointer">
                    I'm not a robot
                  </Label>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-400 opacity-50 mb-1" />
                  <span className="text-[9px] text-muted-foreground">reCAPTCHA</span>
                </div>
              </div>

              <Button type="submit" variant="accent" className="rounded-md font-semibold px-8 hover:opacity-90">
                Submit Request <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bawah: Direct Outreach Card */}
        <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-border/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-xs">
            <h4 className="font-display text-xl font-bold text-foreground mb-2">Direct Outreach</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prefer a traditional conversation? Reach out to our regional headquarters in Surabaya.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 w-full lg:w-auto">
            {/* Email Support */}
            <div className="flex items-start gap-4">
              <div className="bg-muted p-2.5 rounded-lg shrink-0">
                <Mail className="size-5 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  Email Support
                </p>
                <a href="mailto:marketing@genesysindonesia.com" className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-all">
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
                  <a href="tel:+62817373851" className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-words">
                    +62 817-373-851 (Marketing)
                  </a>
                  <a href="tel:+628113538188" className="text-sm font-semibold text-foreground hover:text-accent transition-colors block break-words">
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
