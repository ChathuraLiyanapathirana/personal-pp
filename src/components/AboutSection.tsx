import { expertise } from "@/constants/appConstant";
import React from "react";
import Expertise from "./Expertise";
import DownloadButton from "./ResumeDownloadButton";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen xxs:pt-8 xxs:pb-8 bg-white flex flex-col justify-center items-center"
      id="about"
    >
      <div className="flex flex-wrap gap-8 lg:gap-8 xs:flex-col sm:flex-row">
        <div className="md:text-start sm:text-center xs:text-center flex-none">
          <h1 className="text-3xl font-semibold mb-4 text-slate-900 mt-0">
            Personal Information
          </h1>
          <div className="" />
          <p className="mt-8 mb-0">
            Surname : <strong>Liyana Pathiranage</strong>
          </p>
          <p className="mt-4 mb-0">
            Name : <strong>Chathura Buddhika</strong>
          </p>
          <p className="mt-4 mb-0">
            Birth Day : <strong>1993 February 07</strong>
          </p>
          <p className="mt-4 mb-0">
            Nationality : <strong>Sri Lankan</strong>
          </p>
          <p className="mt-4 mb-0">
            Languages : <strong>English and Sinhala</strong>
          </p>
          <p className="mt-4 mb-0">
            Freelance : <strong>Available</strong>
          </p>
          <DownloadButton />
        </div>
        <div className="hidden lg:flex-none sm:block w-0.5 md:mb-32 xxs:mb-24 bg-gray-700"></div>
        <div className="md:text-start sm:text-center xs:text-center flex-none">
          <h1 className="text-3xl font-semibold mb-0 text-slate-900 mt-0">
            Technologies / Tools
          </h1>
          <h1 className="text-3xl font-semibold mb-4 text-slate-900 mt-0">
            & Practices
          </h1>
          <div className="grid xs:grid-cols-4 md:grid-cols-4 gap-5 mt-8 mb-0">
            {expertise.map((item, index) => (
              <Expertise
                large={index === 0 || index === 1}
                value={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
