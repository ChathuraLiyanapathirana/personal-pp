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
    <div className="flex flex-col flex-1 justify-center items-start w-full h-screen bg-slate-900 md:p-8 xs:p-4">
      <h1 className="text-3xl font-semibold mb-4 text-white mt-0">
        Contact Details
      </h1>
      <p className="text-white">
        <FontAwesomeIcon icon={faPerson} size="1x" /> Full Name:{" "}
        {`${contactInfo.surName} ${contactInfo.name}`}
      </p>
      <p className="text-white">
        <FontAwesomeIcon icon={faMailReply} size="1x" /> Email:{" "}
        {contactInfo.email}
      </p>
      <p className="text-white">
        <FontAwesomeIcon icon={faMobile} size="1x" /> Phone:{" "}
        {contactInfo.mobile}
      </p>
      <p className="text-white">
        <FontAwesomeIcon icon={faLocationPin} size="1x" /> Address:{" "}
        {contactInfo.address}
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={contactInfo.blog}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-lime-400 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faBloggerB} size="2x" />
        </a>
        <a
          href={contactInfo.linkedin}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-cyan-600 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a
          href={contactInfo.git}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-slate-400 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href={contactInfo.facebook}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-sky-600 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a
          href={contactInfo.whatsapp}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-teal-500 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a
          href={contactInfo.instagram}
          target="_blank"
          className="w-14 h-14 bg-white hover:bg-pink-600 rounded-lg flex justify-center items-center transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
