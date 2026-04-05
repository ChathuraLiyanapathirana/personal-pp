import React from "react";
import ContactForm from "../ContactForm";
import ContactDetails from "../ContactDetails";
import SectionHeading from "../SectionHeading";

const ContactSection = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="contact"
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Reach out"
          title="Contact"
          description="Questions, collaborations, or opportunities, send a message or connect on social."
        />
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
