import React from "react";
import { ExpertiseType } from "@/types/appTypes";

const Expertise = ({ value, large }: ExpertiseType) => {
  const dynamicClassName = `font-extrabold text-center text-${
    large ? "lg" : "sm"
  }`;
  return (
    <div className="w-14 h-14 bg-slate-900 rounded-lg flex justify-center items-center hover:bg-lime-400 text-white hover:text-slate-900 transition duration-300">
      <span className={dynamicClassName}>{value}</span>
    </div>
  );
};

export default Expertise;
