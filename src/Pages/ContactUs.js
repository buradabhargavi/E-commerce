import React from "react";
import ContactUsNav from "../Contact/ContactUsNav";
import ContactUsHeader from "../Contact/ContactUsHeader";
import ContactUsContent from "../Contact/ContactUsContent";
import Footer from "../Components/Footer";

function ContactUs() {
  return (
    <div>
      <ContactUsNav />
      <ContactUsHeader />
      <ContactUsContent />
      <Footer />
    </div>
  );
}

export default ContactUs;
