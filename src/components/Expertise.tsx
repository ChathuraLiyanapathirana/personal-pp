import React from "react";
import { ExpertiseType } from "@/types/appTypes";

const Expertise = ({ value }: ExpertiseType) => {
  return (
    <div className="w-full aspect-square min-w-[4.5rem] min-h-[4.5rem] bg-lime-400 dark:bg-lime-800 rounded-xl flex justify-center items-center hover:bg-lime-500 dark:hover:bg-lime-700 text-black dark:text-white hover:text-slate-900 transition duration-300 p-2">
      <span className="font-extrabold text-center text-base sm:text-lg break-words leading-tight">
        {value}
      </span>
    </div>
  );
};

export default Expertise;
