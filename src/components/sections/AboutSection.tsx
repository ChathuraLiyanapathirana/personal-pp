import React from "react";
import { expertise } from "@/constants/appConstant";
import Expertise from "../Expertise";
import SectionHeading from "../SectionHeading";

const AboutSection = () => {
  return (
    <div
      className="relative min-h-screen xxs:pb-8 xxs:pt-8 md:container md:mx-auto flex flex-col items-center justify-center"
      id="about"
    >
      <div className="relative w-full px-5 md:px-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="Expertise"
          description="Technologies and practices I use to design, build, and ship software."
          className="mx-auto max-w-7xl"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-2 w-full">
          {expertise.map((item, index) => (
            <Expertise value={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
