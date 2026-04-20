import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import ContactUsSection from "@/components/contact/ContactUsSection";
import React from "react";

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Container utama untuk form dan info kontak */}
      <ContactUsSection />
      
      <Footer />
    </main>
  );
};

export default ContactUs;
