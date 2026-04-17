import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-genesys-black.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Job Desk", href: "#jobdesk" },
  { label: "Webpaper", href: "#webpaper" },
  { label: "Client", href: "#client" },
  { label: "Karier", href: "#karier" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 pt-5">
        <nav className="flex items-center justify-between rounded-full bg-background/90 backdrop-blur border border-border/60 px-4 lg:px-6 py-2.5 shadow-soft">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Genesys Integrated Indonesia logo" className="h-8 w-auto" />
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-foreground/80">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Button variant="accent" size="sm" className="rounded-full">
              <Phone className="size-4" />
              Contact us
            </Button>
          </div>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 rounded-2xl bg-background border border-border p-4 shadow-card">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block py-1 text-foreground/80"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="accent" className="w-full mt-3 rounded-full">
              <Phone className="size-4" />
              Contact us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
