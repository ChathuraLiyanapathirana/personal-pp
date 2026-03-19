"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

const initState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initState);
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    <div className="flex flex-col flex-1 justify-center items-start w-full h-screen md:p-8 xs:pt-4 xxs:pb-8">
      <h1 className="text-3xl lg:text-4xl font-semibold mt-0 xs:mb-4 text-slate-900 dark:text-white">Send me an Email</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name">
            <span className="text-sm font-semibold text-slate-900 dark:text-white"> Your Name </span>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-0.5 h-[50px] w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-slate-900 dark:text-slate-200 shadow-[4px_4px_0_0] focus:ring-2 focus:ring-black dark:focus:ring-white sm:text-sm"
              onChange={handleChange}
              required
              value={formData?.name}
            />
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="email">
            <span className="text-sm font-semibold text-slate-900 dark:text-white"> Your Email </span>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-0.5 h-[50px] w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-slate-900 dark:text-slate-200 shadow-[4px_4px_0_0] focus:ring-2 focus:ring-black dark:focus:ring-white sm:text-sm"
              onChange={handleChange}
              required
              value={formData?.email}
            />
          </label>
        </div>
        <div className="mb-6">
          <label htmlFor="message">
            <span className="text-sm font-semibold text-slate-900 dark:text-white"> Your Message </span>
            <textarea
              id="message"
              name="message"
              className="mt-0.5 w-full border-2 border-black dark:border-white bg-white dark:bg-neutral-800 text-slate-900 dark:text-slate-200 shadow-[4px_4px_0_0] focus:ring-2 focus:ring-black dark:focus:ring-white sm:text-sm"
              value={formData?.message}
              required
              onChange={handleChange}
              rows={4}
            />
          </label>
        </div>
        <div className="flex items-center justify-end">
          {response !== null || response !== "" ? (
            <p className="text-slate-900 dark:text-slate-200 mt-0 mb-0 mr-4">{response}</p>
          ) : null}
          <button
            type="submit"
            className="border-2 border-black dark:border-white bg-white dark:bg-neutral-800 px-5 py-3 font-semibold text-black dark:text-white shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-0">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
