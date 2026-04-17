// src/components/home/Innovate.tsx
import { ArrowUpRight, Check } from "lucide-react";
import office from "@/assets/tim-genesys-3.png";

const Innovate = () => {
  return (
    <section id="about" className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ── Desktop: 2-col layout | Mobile: stacked ── */}
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-10 items-start">

          {/* ── LEFT col: arrow badge + photo ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Arrow badge — negative margin bottom pulls photo up to touch the badge */}
            <div className="relative self-start z-10 mb-[-3rem] lg:mb-[-3.5rem] lg:-ml-2">
              <svg
                viewBox="0 0 120 120"
                className="size-24 lg:size-28 animate-[spin_12s_linear_infinite]"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="circle-path"
                    d="M 60,60 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                {/* Green text */}
                <text fill="#6cca00ff" fontFamily="inherit" fontSize="11" letterSpacing="3.5">
                  <textPath href="#circle-path" startOffset="0%">
                    Genesys •&nbsp;
                  </textPath>
                </text>
                {/* Dark/black text offset by ~50% */}
                <text fill="#353535ff" fontFamily="inherit" fontSize="11" letterSpacing="3.5">
                  <textPath href="#circle-path" startOffset="50%">
                    Genesys •&nbsp;
                  </textPath>
                </text>
              </svg>

              {/* Center arrow button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <ArrowUpRight className="size-5 text-foreground" />
                </div>
              </div>
            </div>

            {/* Photo */}
            <img
              src={office}
              alt="Tim Genesys berkolaborasi di kantor"
              className="w-full h-[300px] lg:h-[510px] object-cover rounded-3xl shadow-card"
              loading="lazy"
            />
          </div>

          {/* ── RIGHT col: header text + stats ── */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">

            {/* Header — top of right col, sejajar dengan badge di kiri */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                We Are Genesys Integrated Indonesia
              </p>
              <h2 className="font-display text-3xl lg:text-[2.4rem] font-bold mt-3 leading-tight text-balance">
                <span className="text-foreground">Innovate Soft Solutions </span>
                <span className="text-muted-foreground/80">to</span>
                <br />
                <span className="text-muted-foreground/80">Grow Tech Business</span>
              </h2>
              <p className="text-muted-foreground mt-5 text-sm lg:text-base leading-relaxed">
                With a portfolio of successful projects spanning various industries our team has
                consistently demonstrated the ability to transform ideas into high-performing,
                user-friendly applications.
              </p>
            </div>

            {/* Visual separator */}
            <hr className="my-8 border-border" />

            {/* Stats — bottom of right col */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Explore Our Achievement
              </p>
              <h3 className="font-display text-2xl lg:text-3xl font-bold mt-2">
                <span className="text-foreground font-bold">Premier Tech</span>{" "}
                <span className="text-muted-foreground/50 font-normal">Innovations</span>
              </h3>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-4 mt-7 lg:-mr-8">
                {/* Card 1 – Teal */}
                <div className="rounded-2xl bg-[hsl(188_80%_42%)] text-white p-6 shadow-card">
                  <div className="size-8 rounded-full bg-white flex items-center justify-center mb-4">
                    <Check className="size-4 text-[hsl(188_80%_42%)]" />
                  </div>
                  <div className="font-display text-4xl font-bold">900 +</div>
                  <p className="text-sm/relaxed mt-2 text-white/85">
                    Trusted National &amp;<br />International Client
                  </p>
                </div>

                {/* Card 2 – White */}
                <div className="rounded-2xl bg-white text-foreground p-6 shadow-card border border-border">
                  <div className="size-8 rounded-full bg-foreground flex items-center justify-center mb-4">
                    <Check className="size-4 text-white" />
                  </div>
                  <div className="font-display text-4xl font-bold">125 +</div>
                  <p className="text-sm/relaxed mt-2 text-muted-foreground">
                    Best Project<br />Completed
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovate;