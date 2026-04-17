import logo from "@/assets/logo-genesys-black.png";

const solutions = [
  "Enterprise Resource Planning",
  "Supply Chain Management",
  "Human Resource Management",
  "Customer Relationship Management",
  "Hospital IT Bridge",
  "Insurance Bridge System",
  "Software as a Service",
];

const locations = [
  {
    title: "HEAD OFFICE",
    body: "Graha Pena, 11th Floor, Jl. Ahmad Yani No. 88, Surabaya",
  },
  {
    title: "DEVELOPMENT OFFICE",
    body: "Jl. Padang Asri Boulevard No. 12, Surabaya",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <img src={logo} alt="Genesys Integrated Indonesia logo" className="h-14 w-auto" />
            <p className="text-sm text-muted-foreground mt-5 max-w-sm">
              Innovating soft solutions to help your business grow with reliable technology and a
              dedicated team.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-sm mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {solutions.map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm mb-4">Locations</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {locations.map((l) => (
                <li key={l.title}>
                  <div className="font-semibold text-foreground/90 text-xs tracking-wider">{l.title}</div>
                  <div className="mt-1">{l.body}</div>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-bold text-sm mt-6 mb-2">Contact</h4>
            <p className="text-sm text-muted-foreground">
              partnership@genesys-id.com<br />
              +62 (0)31 555 7788
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PT Genesys Integrated Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Sitemap</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#webpaper" className="hover:text-foreground">Webpaper</a>
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
