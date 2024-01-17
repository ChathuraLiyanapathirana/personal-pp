import { experienceSummary } from "@/constants/appConstant";
import React from "react";
import ExperiencePill from "../ExperiencePill";

const ExperienceSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen xxs:pt-8 xxs:pb-8 bg-white flex justify-center items-start"
      id="experience"
    >
      <div className="-my-6 md:w-2/3 xxs:pl-4 xxs:pr-4">
        {experienceSummary.map((item, index) => (
          <ExperiencePill
            company={item.company}
            description={item.description}
            designation={item.designation}
            domain={item.domain}
            duration={item.duration}
            product={item.product}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
