"use client";

import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HelloSection from "@/components/sections/HelloSection";
import { MenuToggle } from "@/components/MenuToggle";
import SideMenu from "@/components/SideMenu";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import { Suspense, useState } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Loader from "@/components/Loader";
import ProjectSection from "@/components/sections/ProjectSection";
config.autoAddCss = false;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope}>
      <SideMenu onClickItem={() => setIsOpen(!isOpen)} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      <HelloSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <Suspense fallback={<Loader />}>
        <BlogSection />
      </Suspense>
      <ContactSection />
    </div>
  );
}
