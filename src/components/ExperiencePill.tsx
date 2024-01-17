import { ExperienceType } from "@/types/appTypes";
import React from "react";
import HtmlRenderer from "./HtmlRenderer";

const ExperiencePill = ({
  company,
  description,
  designation,
  duration,
  domain,
  product,
}: ExperienceType) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
        {company}
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-lime-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
          {duration}
        </time>
        <div className="text-xl font-bold text-slate-900">{designation}</div>
      </div>
      <div className="text-slate-500">
        <strong>Domain:</strong> {domain}
        <br></br>
        <strong>Products:</strong> {product}
        <br></br>
        <HtmlRenderer htmlString={description} />
      </div>
    </div>
  );
};

export default ExperiencePill;
