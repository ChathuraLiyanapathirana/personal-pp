import React from "react";
import { expertise } from "@/constants/appConstant";
import Expertise from "../Expertise";

const AboutSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen xxs:pt-8 xxs:pb-8 bg-white dark:bg-neutral-900 flex flex-col justify-center items-center"
      id="about"
    >
      <div className="w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-8 w-full">
          {expertise.map((item, index) => (
            <Expertise value={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
