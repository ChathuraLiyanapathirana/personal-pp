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
import {
  faLocationPin,
  faMobile,
  faMailReply,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = () => {
  return (
    <div className="block border-2 border-black dark:border-white bg-gray-300 dark:bg-gray-600 p-4 shadow-[4px_4px_0_0] focus:ring-2 focus:ring-gray-300 dark:focus:ring-white focus:outline-0 sm:p-6 flex flex-col flex-1 justify-center items-start w-full h-screen">
      <h1 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white mt-0">
        Contact Details
      </h1>
      <p className="text-gray-900 dark:text-white">
        Full Name:{" "}
        {`${contactInfo.surName} ${contactInfo.name}`}
      </p>
      <p className="text-gray-900 dark:text-white">
        Email:{" "}
        {contactInfo.email}
      </p>
      <p className="text-gray-900 dark:text-white">
        Mobile:{" "}
        {contactInfo.mobile}
      </p>
      <p className="text-gray-900 dark:text-white">
        Address:{" "}
        {contactInfo.address}
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={contactInfo.blog}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-lime-400 dark:hover:bg-lime-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faBloggerB} size="2x" />
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-cyan-600 dark:hover:bg-cyan-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href={contactInfo.git}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-slate-400 dark:hover:bg-slate-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={contactInfo.facebook}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-sky-600 dark:hover:bg-sky-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-teal-500 dark:hover:bg-teal-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a
          href={contactInfo.instagram}
          target="_blank"
          className="w-14 h-14 bg-white dark:bg-gray-300 hover:bg-pink-600 dark:hover:bg-pink-700 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
