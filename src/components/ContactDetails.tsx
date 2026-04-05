import React from "react";
import { contactInfo } from "@/constants/appConstant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faBloggerB,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const ContactDetails = () => {
  return (
    <div className="flex w-full flex-1 flex-col justify-center rounded-2xl border border-ink/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 sm:p-8 lg:max-w-md">
      <h2 className="font-display mb-6 mt-0 text-2xl font-semibold text-ink dark:text-white sm:text-3xl">
        Contact Details
      </h2>
      <p className="text-ink dark:text-zinc-100">
        Full Name:{" "}
        {`${contactInfo.surName} ${contactInfo.name}`}
      </p>
      <p className="text-ink dark:text-zinc-100">
        Email:{" "}
        {contactInfo.email}
      </p>
      <p className="text-ink dark:text-zinc-100">
        Mobile:{" "}
        {contactInfo.mobile}
      </p>
      <p className="text-ink dark:text-zinc-100">
        Address:{" "}
        {contactInfo.address}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={contactInfo.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="Blog"
        >
          <FontAwesomeIcon icon={faBloggerB} className="h-6 w-6" />
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
        </a>
        <a
          href={contactInfo.git}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
        </a>
        <a
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6" />
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
        </a>
        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/10 bg-zinc-50 text-ink transition hover:border-brand/40 hover:bg-brand-surface hover:text-brand dark:border-white/10 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-brand/50 dark:hover:bg-brand/10 dark:hover:text-brand"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
