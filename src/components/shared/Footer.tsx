import logo from "@/assets/logos/logo-genesys-black.png";

const solutions = [
  "Enterprise Resource Planning",
  "Supply Chain Management",
  "Human Resource Management",
  "Customer Relationship Management",
  "Internet of Things",
  "Hardware & Infrastructure",
  "Software as a Service",
];

const locations = [
  {
    title: "MAIN OFFICE",
    body: "Graha Pena Lt. 15 Ruang 1503, Jl. Ahmad Yani No. 88, Surabaya",
  },
  {
    title: "DEVELOPMENT OFFICE",
    body: "Jl. Pucang Anom Timur III No. 12-16, Surabaya",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Marquee strip */}
      <div className="bg-[#0B2A2E] py-4 overflow-hidden">
        <div className="flex animate-marquee">
          {[0, 1].map((setIdx) => (
            <div
              key={setIdx}
              className="flex shrink-0 items-center gap-8 pr-8"
              aria-hidden={setIdx === 1}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <>
                  <span key={`cu-${i}`} className="font-display text-lg font-bold text-white/90 whitespace-nowrap">
                    Contact Us
                  </span>
                  <span key={`d1-${i}`} className="size-1.5 rounded-full bg-accent shrink-0" />
                  <span key={`git-${i}`} className="font-display text-lg font-bold text-white/90 whitespace-nowrap">
                    Get In Touch
                  </span>
                  <span key={`d2-${i}`} className="size-1.5 rounded-full bg-accent shrink-0" />
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Footer body */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Logo + tagline */}
          <div className="md:col-span-2 lg:col-span-4">
            <img
              src={logo}
              alt="Genesys Integrated Indonesia logo"
              className="h-24 w-auto"
            />
            <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
              Innovating soft solutions to help your business grow with reliable
              technology and a dedicated team.
            </p>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-4 lg:col-start-6"> {/* dorong ke tengah */}
            <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-3 text-foreground">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {solutions.map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations + Contact */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest mb-3 text-foreground">
              Locations
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {locations.map((l) => (
                <li key={l.title}>
                  <div className="font-semibold text-foreground/90 text-xs tracking-wider">
                    {l.title}
                  </div>
                  <div className="mt-0.5 leading-relaxed">{l.body}</div>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-xs uppercase tracking-widest mt-5 mb-2 text-foreground">
              Contact
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed break-all sm:break-normal">
              marketing@genesysindonesia.com
              <br />
              +62 817-373-851 (Marketing)
              <br />
              +62 811-353-8188 (HR)
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} PT Genesys Integrated Indonesia. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            <a href="/about" className="hover:text-foreground transition-colors">About</a>
            <a href="#webpaper" className="hover:text-foreground transition-colors">Whitepaper</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;