import { ArrowRight, Send } from "lucide-react";
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

export type DemoFormVariant = "contact" | "cta";

interface DemoRequestFormProps {
  variant?: DemoFormVariant;
  /**
   * contact variant → card putih dengan border tipis, tombol accent + ArrowRight
   * cta variant     → card biru muda (hsl(200 50% 88%)), tombol hero + Send
   */
}

const DemoRequestForm = ({ variant = "contact" }: DemoRequestFormProps) => {
  const { toast } = useToast();

  const isContact = variant === "contact";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request sent",
      description: isContact
        ? "Thank you! Our team will reach out for your demo session."
        : "Thank you! Our team will reach out within 1 business day.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  /* ── wrapper styles ── */
  const wrapperClass = isContact
    ? "bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-border/40"
    : "bg-[hsl(200_50%_88%)] text-foreground rounded-3xl p-8 lg:p-10 shadow-elev";

  return (
    <div className={wrapperClass}>
      <h3
        className={`font-display font-bold ${
          isContact
            ? "text-2xl lg:text-[28px] text-foreground"
            : "text-2xl lg:text-3xl"
        }`}
      >
        {isContact ? "Request For Demo" : "Request Demo For Trial!"}
      </h3>
      <p className="text-sm text-muted-foreground mt-2 mb-6">
        {isContact
          ? "Please provide your professional details for a personalized session."
          : "We are ready to help your tech projects. Just send us your inquiry."}
      </p>

      <form onSubmit={onSubmit} className="space-y-5">
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className={isContact ? "space-y-2" : ""}>
            {isContact ? (
              <Label
                htmlFor={`${variant}-name`}
                className="text-xs font-semibold uppercase text-muted-foreground tracking-wider"
              >
                Full Name
              </Label>
            ) : (
              <Label htmlFor={`${variant}-name`}>Name</Label>
            )}
            <Input
              id={`${variant}-name`}
              name="name"
              placeholder={isContact ? "John Doe" : "Your name"}
              required
              className={
                isContact
                  ? "bg-muted border-transparent focus-visible:bg-background"
                  : "mt-1.5 bg-background"
              }
            />
          </div>

          <div className={isContact ? "space-y-2" : ""}>
            {isContact ? (
              <Label
                htmlFor={`${variant}-email`}
                className="text-xs font-semibold uppercase text-muted-foreground tracking-wider"
              >
                Email Address
              </Label>
            ) : (
              <Label htmlFor={`${variant}-email`}>Email</Label>
            )}
            <Input
              id={`${variant}-email`}
              name="email"
              type="email"
              placeholder={isContact ? "john@company.co.id" : "you@email.com"}
              required
              className={
                isContact
                  ? "bg-muted border-transparent focus-visible:bg-background"
                  : "mt-1.5 bg-background"
              }
            />
          </div>
        </div>

        {/* Service (contact only) | Subject (cta only) */}
        {isContact ? (
          <div className="space-y-2">
            <Label
              htmlFor={`${variant}-service`}
              className="text-xs font-semibold uppercase text-muted-foreground tracking-wider"
            >
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
        ) : (
          <div>
            <Label htmlFor={`${variant}-subject`}>Subject</Label>
            <Input
              id={`${variant}-subject`}
              name="subject"
              placeholder="Project subject"
              className="mt-1.5 bg-background"
            />
          </div>
        )}

        {/* Message */}
        <div className={isContact ? "space-y-2" : ""}>
          {isContact ? (
            <Label
              htmlFor={`${variant}-message`}
              className="text-xs font-semibold uppercase text-muted-foreground tracking-wider"
            >
              Message/Notes
            </Label>
          ) : (
            <Label htmlFor={`${variant}-message`}>Message</Label>
          )}
          <Textarea
            id={`${variant}-message`}
            name="message"
            rows={4}
            placeholder={
              isContact
                ? "Tell us about your requirements..."
                : "Tell us briefly about your project"
            }
            className={
              isContact
                ? "bg-muted border-transparent focus-visible:bg-background resize-none"
                : "mt-1.5 bg-background"
            }
          />
        </div>

        {isContact ? (
          <div className="flex items-center justify-between p-3 bg-muted rounded-md border border-border/50 max-w-[280px]">
            <div className="flex items-center gap-3">
              <Checkbox id={`${variant}-recaptcha`} required className="size-5" />
              <Label htmlFor={`${variant}-recaptcha`} className="text-sm font-medium cursor-pointer">
                I'm not a robot
              </Label>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-400 opacity-50 mb-1" />
              <span className="text-[9px] text-muted-foreground">reCAPTCHA</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${variant}-robot`}
              required
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor={`${variant}-robot`} className="text-xs text-muted-foreground cursor-pointer">
              I'm not a robot
            </Label>
          </div>
        )}

        {isContact ? (
          <Button type="submit" variant="accent" className="rounded-md font-semibold px-8 hover:opacity-90">
            Submit Request <ArrowRight className="ml-2 size-4" />
          </Button>
        ) : (
          <Button type="submit" variant="hero" className="rounded-full font-semibold">
            Submit Inquiry
            <Send className="size-4" />
          </Button>
        )}
      </form>
    </div>
  );
};

export default DemoRequestForm;