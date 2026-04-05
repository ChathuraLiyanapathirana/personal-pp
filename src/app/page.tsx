import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HelloSection from "@/components/sections/HelloSection";
import HomeClientShell from "@/components/HomeClientShell";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ProjectSection from "@/components/sections/ProjectSection";
config.autoAddCss = false;

export default function Home() {
  return (
    <HomeClientShell>
      <HelloSection />
      {/* <AboutSection /> */}
      <ExperienceSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </HomeClientShell>
  );
}
