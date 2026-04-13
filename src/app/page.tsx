import type { Metadata } from "next";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HelloSection from "@/components/sections/HelloSection";
import HomeClientShell from "@/components/HomeClientShell";
import {
  faqJsonLd,
  personJsonLd,
  profilePageJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectSection from "@/components/sections/ProjectSection";
import ResumeSection from "@/components/sections/ResumeSection";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "React Native Engineer",
  description:
    "Portfolio of Chathura Buddhika, a senior React Native engineer who builds high quality mobile apps and also works across React and Next.js products.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = [
    websiteJsonLd,
    profilePageJsonLd,
    personJsonLd,
    faqJsonLd,
  ];

  return (
    <HomeClientShell>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <HelloSection />
        <ExperienceSection />
        <ResumeSection />
        <ProjectSection />
        <BlogSection />
        <ContactSection />
      </main>
    </HomeClientShell>
  );
}
