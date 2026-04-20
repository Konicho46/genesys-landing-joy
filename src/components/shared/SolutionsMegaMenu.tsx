import { 
  Building2, 
  Box, 
  Link, 
  Users, 
  UserCheck, 
  Cloud,
  Code2,
  HardDrive
} from "lucide-react";

import { useState } from "react";

export const SolutionsMegaMenu = () => {
  const [activeTab, setActiveTab] = useState<"software" | "hardware">("software");
  const [activeSoftware, setActiveSoftware] = useState("Enterprise Resource Planning");
  const [activeHardware, setActiveHardware] = useState("Hardware Serialization");

  const softwareCategories = [
    "Enterprise Resource Planning",
    "Supply Chain Management",
    "Human Resource Management",
    "Warehouse Management System",
    "Customer Relationship Management",
    "Software as a Service (SaaS)",
  ];

  const hardwareCategories = ["Hardware Serialization", "Hardware Infrastructure"];

  const categories = activeTab === "software" ? softwareCategories : hardwareCategories;
  const activeCategory = activeTab === "software" ? activeSoftware : activeHardware;

  return (
    <div className="w-[800px] lg:w-[1000px] bg-white rounded-b-2xl shadow-elev overflow-hidden border border-border/50">
      <div className="flex flex-col md:flex-row h-[520px]">
        {/* Kolom Kiri: Kategori Layanan (Warna soft hijau text) */}
        <div className="w-full md:w-[60%] bg-gradient-to-br from-[#f1f4f6] to-[#e6edeb] p-8 lg:p-10 flex flex-col">
          <div className="mb-6">
            <h5 className="text-[10px] uppercase tracking-widest text-[#6abf2e] font-bold mb-2">
              Editorial Feature
            </h5>
            <h3 className="text-3xl font-display font-light text-foreground mb-3 tracking-tight">
              The Architecture of<br />Efficiency.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Explore how our integrated ecosystem redefines enterprise management through precision engineering and intuitive design.
            </p>
          </div>

          {/* Grid Kategori Utama */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10 text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (activeTab === "software") setActiveSoftware(cat);
                  else setActiveHardware(cat);
                }}
                className={`text-left transition-colors flex items-center gap-2 ${
                  activeCategory === cat
                    ? "text-[#6abf2e] font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-muted-foreground/10 flex items-center gap-8 text-sm">
            <button 
              onClick={() => setActiveTab("software")}
              className={`flex items-center gap-2 font-bold transition-colors ${
                activeTab === "software" ? "text-[#6abf2e]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code2 className="size-4" />
              Software Service
            </button>
            <div className="w-px h-4 bg-muted-foreground/20"></div>
            <button 
              onClick={() => setActiveTab("hardware")}
              className={`flex items-center gap-2 font-bold transition-colors ${
                activeTab === "hardware" ? "text-[#6abf2e]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <HardDrive className="size-4" />
              Hardware Service
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Produk Detail */}
        <div className="w-full md:w-[40%] bg-white p-8 lg:p-10 flex flex-col justify-between">
          <div className="space-y-8">
            {/* --- SOFTWARE SERVICE --- */}
            {activeTab === "software" && activeSoftware === "Enterprise Resource Planning" && (
              <>
                <a href="#" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#eaffdc] text-[#6abf2e] p-2 rounded-xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3L22 20H2L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-base group-hover:text-[#6abf2e] transition-colors">Salmon ERP</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          One System. Total Control. Limitless Growth.
                        </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#e0f1ff] text-[#2980b9] p-2 rounded-xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-base group-hover:text-[#2980b9] transition-colors">Marlin Accounting</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          Simplify Operations. Accelerate Decisions.
                        </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#fff3e0] text-[#e67e22] p-2 rounded-xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="3" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-base group-hover:text-[#e67e22] transition-colors">Kasir Online Indonesia (KOI)</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          Smarter Transactions, Better Business Decisions.
                        </p>
                    </div>
                  </div>
                </a>
              </>
            )}

            {activeTab === "software" && activeSoftware === "Supply Chain Management" && (
              <a href="#" className="group block">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#f3e5f5] text-[#8e44ad] p-2 rounded-xl">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-[#8e44ad] transition-colors">Tuna Logistic</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        Seamless Delivery, Total Logistics Control.
                      </p>
                  </div>
                </div>
              </a>
            )}

            {activeTab === "software" && activeSoftware === "Human Resource Management" && (
              <a href="#" className="group block">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-red-50 text-red-500 p-2 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-red-500 transition-colors">Snapper HRIS System</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        Smart Workforce Management, Anywhere You Go.
                      </p>
                  </div>
                </div>
              </a>
            )}

            {activeTab === "software" && activeSoftware === "Warehouse Management System" && (
              <a href="#" className="group block">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L20 18H4L12 2Z" stroke="#6abf2e" strokeWidth="2" strokeLinejoin="round"/>
                     </svg>
                  </div>
                  <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-[#6abf2e] transition-colors">Warehouse Management System</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        Total Warehouse Control, From Inbound to Delivery.
                      </p>
                  </div>
                </div>
              </a>
            )}

            {activeTab === "software" && activeSoftware === "Customer Relationship Management" && (
              <div className="grid grid-cols-2 gap-6">
                <a href="#" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-50 text-blue-500 p-1.5 rounded-xl">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-sm group-hover:text-blue-500 transition-colors">Orca Clinic</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          lorem ipsum dolor sit amet.
                        </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="group block">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L20 18H4L12 2Z" stroke="#6abf2e" strokeWidth="2" strokeLinejoin="round"/>
                       </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground text-sm group-hover:text-[#6abf2e] transition-colors">Booking System</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          lorem ipsum dolor sit amet.
                        </p>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {activeTab === "software" && activeSoftware === "Software as a Service (SaaS)" && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {[
                  { title: "Company Profile with CMS", iconType: "triangle" },
                  { title: "E-Commerce Management System", iconType: "triangle" },
                  { title: "Codetrack", iconType: "code" },
                  { title: "Integration & Custom Application", iconType: "triangle" },
                  { title: "Internet of Things", iconType: "triangle" },
                  { title: "AI & Automation", iconType: "triangle" },
                ].map((item, idx) => (
                  <a key={idx} href="#" className="group block">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 shrink-0">
                        {item.iconType === "triangle" ? (
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L20 18H4L12 2Z" stroke="#6abf2e" strokeWidth="2" strokeLinejoin="round"/>
                           </svg>
                        ) : (
                           <div className="bg-orange-50 text-orange-500 p-1.5 rounded-xl">
                             <Code2 className="w-5 h-5" />
                           </div>
                        )}
                      </div>
                      <div>
                          <h4 className="font-bold text-foreground text-sm group-hover:text-[#6abf2e] transition-colors">{item.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            lorem ipsum dolor sit amet.
                          </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* --- HARDWARE SERVICE --- */}
            {activeTab === "hardware" && activeHardware === "Hardware Serialization" && (
              <a href="#" className="group block">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L20 18H4L12 2Z" stroke="#6abf2e" strokeWidth="3" strokeLinejoin="round"/>
                     </svg>
                  </div>
                  <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-[#6abf2e] transition-colors">Hardware Serialization</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        lorem ipsum dolor sit amet.
                      </p>
                  </div>
                </div>
              </a>
            )}

            {activeTab === "hardware" && activeHardware === "Hardware Infrastructure" && (
              <a href="#" className="group block">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L20 18H4L12 2Z" stroke="#6abf2e" strokeWidth="3" strokeLinejoin="round"/>
                     </svg>
                  </div>
                  <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-[#6abf2e] transition-colors">Hardware Security</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        lorem ipsum dolor sit amet.
                      </p>
                  </div>
                </div>
              </a>
            )}
          </div>

          <div className="mt-12 pt-6 border-t border-border flex items-center justify-between gap-4">
             <p className="text-[11px] text-muted-foreground leading-relaxed">
               Need a custom enterprise solution? <a href="#" className="text-accent font-semibold hover:underline">Speak with an architect.</a>
             </p>
             <a href="#" className="bg-[#e0f1ff] text-[#2980b9] font-bold text-xs px-4 py-2 rounded-md hover:bg-[#2980b9] hover:text-white transition-colors shrink-0">
               Schedule Demo
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};
