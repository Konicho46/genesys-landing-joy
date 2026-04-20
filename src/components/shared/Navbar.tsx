import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logos/logo-genesys-white.png";
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Whitepaper", href: "/#webpaper" },
  { label: "Clients", href: "/#client" },
  { label: "Career", href: "/career" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B2A2E]">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Genesys Integrated Indonesia logo"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
            {links.map((l) => {
              const isActive = l.href === location.pathname;

              if (l.label === "Solutions") {
                return (
                  <li key={l.label} className="group/nav py-6">
                    <button className={`relative flex items-center gap-1 transition-colors group-hover/nav:text-white ${isActive ? "text-accent" : "text-white/80"}`}>
                      {l.label}
                      <ChevronDown className="size-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover/nav:w-full"}`} />
                    </button>
                    
                    {/* The wrapper handles hits (no gap), the inner handles visual animation */}
                    <div className="absolute top-[60px] left-1/2 -translate-x-1/2 pt-[20px] w-max opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto transition-opacity duration-300">
                      <div className="translate-y-2 group-hover/nav:translate-y-0 transition-transform duration-300">
                        <SolutionsMegaMenu />
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={l.label} className="py-6">
                  {l.href.startsWith("/#") ? (
                    <a
                      href={l.href.replace("/", "")}
                      className={`relative pb-1 transition-colors group ${
                        isActive ? "text-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      className={`relative pb-1 transition-colors group ${
                        isActive ? "text-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button
                variant="accent"
                size="sm"
                className="rounded-full font-semibold px-5 flex items-center gap-2"
              >
                <Phone className="size-3.5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden pb-4">
            <ul className="flex flex-col gap-3 pb-3 border-b border-white/10">
              {links.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/#") ? (
                    <a
                      href={l.href.replace("/", "")}
                      className="block py-1.5 text-white/80 hover:text-white transition-colors text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      className="block py-1.5 text-white/80 hover:text-white transition-colors text-sm"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button
                variant="accent"
                className="w-full mt-3 rounded-full font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="size-3.5" />
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
