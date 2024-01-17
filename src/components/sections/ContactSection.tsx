import React from "react";
import ContactForm from "../ContactForm";
import ContactDetails from "../ContactDetails";

const ContactSection = () => {
  return (
    <div
      className="md:container md:mx-auto h-screen bg-white flex flex-1 sm:flex-row flex-col items-start xs:mt-8 lg:pr-0 lg:pl-0 xxs:pr-4 xxs:pl-4"
      id="contact"
    >
      {/* Contact Details */}
      <ContactDetails />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactSection;
