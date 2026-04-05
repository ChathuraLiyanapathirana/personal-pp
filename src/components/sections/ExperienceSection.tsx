"use client";

import { experienceSummary } from "@/constants/appConstant";
import React from "react";
import ExperiencePill from "../ExperiencePill";
import SectionHeading from "../SectionHeading";

const ExperienceSection = () => {
  return (
    <div
      className="relative border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-28"
      id="experience"
    >
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Career path"
          title="Experience"
          description="A timeline of roles, products, and the problems I have helped ship from consulting to full time product teams."
        />

        <div className="relative">
          <div
            className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-gradient-to-b from-brand/60 via-zinc-300/80 to-transparent dark:from-brand/50 dark:via-zinc-600/60 md:left-[1.375rem]"
            aria-hidden
          />
          <ul className="relative m-0 list-none space-y-0 p-0">
            {experienceSummary.map((item, index) => (
              <li key={`${item.company}-${index}`} className="list-none">
                <ExperiencePill
                  company={item.company}
                  description={item.description}
                  designation={item.designation}
                  domain={item.domain}
                  duration={item.duration}
                  product={item.product}
                  nested={item.nested}
                  nestedItems={item.nestedItems}
                  stepIndex={index + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
