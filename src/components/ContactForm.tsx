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
      <h1 className="text-3xl font-semibold mt-0 xs:mb-4">Send me an Email</h1>
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
  );
};

export default ContactForm;
