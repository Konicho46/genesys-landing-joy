import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-genesys-white.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Whitepaper", href: "/#webpaper" },
  { label: "Clients", href: "/#client" },
  { label: "Career", href: "/#karier" },
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
              return (
                <li key={l.label}>
                  {l.href.startsWith("/#") ? (
                    <a
                      href={l.href.replace("/", "")}
                      className={`relative pb-1 transition-colors group ${
                        isActive ? "text-accent" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {l.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
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
                        className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ease-out ${
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
            <Button
              variant="accent"
              size="sm"
              className="rounded-full font-semibold px-5 flex items-center gap-2"
            >
              <Phone className="size-3.5" />
              Contact Us
            </Button>
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
            <Button
              variant="accent"
              className="w-full mt-3 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="size-3.5" />
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
