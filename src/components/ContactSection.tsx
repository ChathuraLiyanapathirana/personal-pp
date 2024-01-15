"use client";

import { contactInfo } from "@/constants/appConstant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faInstagram,
  faBloggerB,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationPin,
  faMobile,
  faMailReply,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const initState = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initState);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (!formData.name || !formData.email || !formData.message) {
      console.error("Please fill in all required fields");
      return;
    }
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data?.success) {
        setResponse("Email sent successfully");
      } else {
        setResponse("Failed to send email");
      }
    } catch (error) {
      setResponse("Failed to send email");
    }
    setTimeout(() => {
      setResponse("");
    }, 2000);
    setFormData(initState);
  };

  return (
    <div
      className="md:container md:mx-auto h-screen bg-white flex flex-1 sm:flex-row flex-col items-start xs:mt-8 lg:pr-0 lg:pl-0 xxs:pr-4 xxs:pl-4"
      id="contact"
    >
      {/* Contact Details */}
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
        <div className="grid xxs:grid-cols-3 sm:grid-cols-5 gap-5 mt-8 mb-0">
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

      {/* Contact Form */}
      <div className="flex flex-col flex-1 justify-center items-start w-full h-screen md:p-8 xs:pt-4 xxs:pb-8">
        <h1 className="text-3xl font-semibold mt-0 xs:mb-4">
          Send me an Email
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              className="block text-slate-900 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow appearance-none border border-slate-900 rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              value={formData?.name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-900 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              className="shadow appearance-none border border-slate-900 rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              value={formData?.email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-900 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="shadow appearance-none border border-slate-900 rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData?.message}
              placeholder="Your Message"
              required
              onChange={handleChange}
              rows={4}
            />
          </div>
          <div className="flex items-center justify-end">
            {response !== null || response !== "" ? (
              <p className="text-slate-900 mt-0 mb-0 mr-4">{response}</p>
            ) : null}
            <button
              className="bg-slate-900 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
