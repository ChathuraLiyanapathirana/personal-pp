"use client";

import { ReactNode, useState } from "react";
import { MenuToggle } from "@/components/MenuToggle";
import SideMenu from "@/components/SideMenu";
import SiteHeader from "@/components/SiteHeader";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import { useActiveSection } from "@/hooks/useActiveSection";

type HomeClientShellProps = {
  children: ReactNode;
};

export default function HomeClientShell({ children }: HomeClientShellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className="relative overflow-x-hidden">
      <SiteHeader activeSection={activeSection} />
      <SideMenu onClickItem={() => setIsOpen(false)} activeSection={activeSection} />
      <MenuToggle toggle={() => setIsOpen((open) => !open)} isOpen={isOpen} />
      {children}
    </div>
  );
}
