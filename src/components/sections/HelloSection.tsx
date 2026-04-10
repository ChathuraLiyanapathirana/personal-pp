"use client";

import React from "react";
import ProfileImage from "../ProfileImage";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:hello@chathura.dev",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HelloSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" id="hello">
      <section className="relative">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row lg:items-center lg:justify-between px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-16 lg:py-0">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col lg:max-w-xl xl:max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand dark:border-brand/30 dark:bg-brand/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Available for work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-balance text-4xl font-bold leading-[1.1] tracking-tight text-ink dark:text-zinc-50 xs:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl"
            >
              <span className="block text-ink/60 dark:text-zinc-400 text-lg md:text-xl font-medium tracking-normal mb-2">
                Hello, I&apos;m
              </span>
              <span className="block">
                Chathura
                <span className="text-brand">.</span>
              </span>
            </motion.h1>

            {/* Role/Title */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-ink/80 dark:text-zinc-300"
            >
              Senior Software Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg md:leading-relaxed"
            >
              Passionate about crafting innovative software solutions that drive
              efficiency and elevate user experiences. With over 8 years of
              hands-on experience, I deliver cutting-edge solutions that
              seamlessly blend technology and user needs.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#experience"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-50 transition-all duration-300 hover:shadow-lg hover:shadow-ink/25 dark:bg-zinc-100 dark:text-ink dark:hover:shadow-brand/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Experience
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-brand to-brand-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full border-2 border-ink/10 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:border-brand hover:text-brand dark:border-white/10 dark:text-zinc-200 dark:hover:border-brand dark:hover:text-brand"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-1"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full text-ink/60 transition-all duration-300 hover:text-brand dark:text-zinc-400 dark:hover:text-brand"
                  aria-label={link.name}
                >
                  <span className="absolute inset-0 rounded-full bg-brand/0 transition-all duration-300 group-hover:bg-brand/10" />
                  {link.icon}
                </a>
              ))}
              <span className="ml-4 h-px w-16 bg-gradient-to-r from-ink/20 to-transparent dark:from-zinc-700" />
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="mt-16 flex justify-center lg:mt-0 lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand/20 via-transparent to-brand/10 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border border-brand/20 dark:border-brand/30" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full border border-ink/10 dark:border-zinc-700" />
              
              <ProfileImage />
              
              {/* Stats/Highlights */}
              <motion.div
                className="absolute -right-4 top-8 rounded-2xl border border-ink/5 bg-white/80 px-5 py-3 shadow-xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80 md:-right-12"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <p className="text-2xl font-bold text-ink dark:text-white">8+</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Years Exp.</p>
              </motion.div>
              
              <motion.div
                className="absolute -left-4 bottom-16 rounded-2xl border border-ink/5 bg-white/80 px-5 py-3 shadow-xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80 md:-left-16"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <p className="text-2xl font-bold text-brand">50+</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Projects</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href="#experience"
            className="flex flex-col items-center gap-2 text-ink/40 transition-colors hover:text-brand dark:text-zinc-500 dark:hover:text-brand"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default HelloSection;
