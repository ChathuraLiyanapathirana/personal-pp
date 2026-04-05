"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) => {
  return (
    <motion.header
      className={cn("mb-14 md:mb-20", className)}
      initial={{ y: 24 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-brand-dim dark:text-brand">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink dark:text-white sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-r from-ink via-ink to-brand bg-clip-text text-transparent dark:from-white dark:via-zinc-100 dark:to-brand">
          {title}
        </span>
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
          {description}
        </p>
      ) : null}
      <div
        className="mt-8 h-px max-w-xs bg-gradient-to-r from-brand via-brand/40 to-transparent"
        aria-hidden
      />
    </motion.header>
  );
};

export default SectionHeading;
