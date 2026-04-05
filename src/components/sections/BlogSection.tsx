import React from "react";
import { contactInfo } from "@/constants/appConstant";
import WPBlogContent from "../WPBlogContent";
import SectionHeading from "../SectionHeading";

const BlogSection = () => {
  return (
    <div
      className="relative min-h-screen border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="blog"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            className="mb-0"
            eyebrow="Writing"
            title="Blog"
            description="Long-form posts and technical notes, full archive lives on the main blog site."
          />
          <a
            href={contactInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display shrink-0 text-2xl font-bold text-brand transition hover:text-brand-dim sm:text-3xl"
          >
            appcitor.com
          </a>
        </div>
        <div className="mt-2">
          <WPBlogContent />
        </div>
        <div className="mt-12 flex justify-end">
          <a
            href={contactInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-display inline-flex items-center gap-2 text-2xl font-bold text-ink transition hover:text-brand dark:text-white dark:hover:text-brand sm:text-3xl"
          >
            See More
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
