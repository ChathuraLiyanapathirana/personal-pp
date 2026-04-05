"use client";

import Script from "next/script";
import React, { ChangeEvent, FormEvent, useState } from "react";

const initState = {
  name: "",
  email: "",
  message: "",
};

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initState);
  const [response, setResponse] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getRecaptchaToken = async () => {
    if (!recaptchaSiteKey || !window.grecaptcha) {
      throw new Error("reCAPTCHA is unavailable");
    }

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(async () => {
        try {
          const token = await window.grecaptcha?.execute(recaptchaSiteKey, {
            action: "contact_form",
          });

          if (!token) {
            reject(new Error("Failed to create reCAPTCHA token"));
            return;
          }

          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponse("Please fill in all required fields");
      return;
    }

    try {
      setIsSubmitting(true);
      setResponse(null);
      const captchaToken = await getRecaptchaToken();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data?.success) {
        setResponse("Email sent successfully");
        setFormData(initState);
      } else {
        setResponse(data?.message ?? "Failed to send email");
      }
    } catch {
      setResponse("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setResponse(null);
    }, 2000);
  };

  return (
    <div className="flex w-full flex-1 flex-col items-start justify-center lg:max-w-xl">
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}
      <h2 className="font-display mb-8 mt-0 text-2xl font-semibold text-ink dark:text-white sm:text-3xl lg:text-4xl">
        Send me an Email
      </h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-5">
          <label htmlFor="name">
            <span className="text-sm font-semibold text-ink dark:text-zinc-200"> Your Name </span>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-ink shadow-sm transition placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-100 sm:text-sm"
              onChange={handleChange}
              required
              value={formData?.name}
            />
          </label>
        </div>
        <div className="mb-5">
          <label htmlFor="email">
            <span className="text-sm font-semibold text-ink dark:text-zinc-200"> Your Email </span>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-ink shadow-sm transition placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-100 sm:text-sm"
              onChange={handleChange}
              required
              value={formData?.email}
            />
          </label>
        </div>
        <div className="mb-8">
          <label htmlFor="message">
            <span className="text-sm font-semibold text-ink dark:text-zinc-200"> Your Message </span>
            <textarea
              id="message"
              name="message"
              className="mt-2 w-full resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink shadow-sm transition placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25 dark:border-white/15 dark:bg-zinc-900 dark:text-zinc-100 sm:text-sm"
              value={formData?.message}
              required
              onChange={handleChange}
              rows={4}
            />
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4">
          {response ? (
            <p className="mb-0 mt-0 text-sm text-ink dark:text-zinc-200">{response}</p>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting || !recaptchaSiteKey}
            className="rounded-full border border-ink/15 bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/20 dark:bg-zinc-100 dark:text-ink dark:shadow-[4px_4px_0_0_#22dd55] dark:hover:bg-white"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
