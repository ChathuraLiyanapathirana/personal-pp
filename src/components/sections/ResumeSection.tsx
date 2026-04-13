import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../SectionHeading";
import { faqItems } from "@/constants/faq";

const ResumeSection = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="resume"
    >
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Full background"
          title="Resume"
          description="Interested in working together? My resume covers the full picture: roles, technical scope, and qualifications, all in one place."
        />

        <div className="flex flex-col items-start gap-6 rounded-2xl border border-ink/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900/90 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <p className="m-0 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Everything a recruiter or collaborator needs to go from curious to confident, all in one document.
            </p>
          </div>
          <a
            href="/pdf/Chathura-Buddhika-Resume.pdf"
            download="Chathura-Pathiranage-Resume.pdf"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-50 shadow-brand-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-ink dark:shadow-[4px_4px_0_0_#22dd55] dark:hover:bg-white"
          >
            <FontAwesomeIcon icon={faFileArrowDown} className="h-4 w-4" aria-hidden />
            Download resume
          </a>
        </div>

        <div className="mt-8">
          <div className="mb-5">
            <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
              Quick Answers
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              A compact summary for recruiters and clients reviewing fit before opening the full resume.
            </p>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group h-fit self-start rounded-2xl border border-ink/10 bg-white/90 p-5 shadow-sm transition hover:border-brand/25 dark:border-white/10 dark:bg-zinc-900/90"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-ink marker:hidden dark:text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-brand transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
