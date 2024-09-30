import React from "react";
import { contactInfo } from "@/constants/appConstant";
import WPBlogContent from "../WPBlogContent";
import ProjectCard from "../ProjectCard";

const ProjectSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen bg-white pt-4 lg:pr-4 lg:pl-4 xxs:pr-4 xxs:pl-4"
      id="project"
    >
      <div className="flex flex-1 flex-col lg:items-start xs:items-end xs:justify-end">
        <h1 className="text-4xl font-extrabold sm:text-4xl text-slate-900 mt-0 mb-0">
          Projects
        </h1>
        <h2 className="text-2xl font-extrabold sm:text-2xl text-slate-900 mt-6 mb-0">
          Professional Contributions
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-5 mt-6 mb-0">
          <ProjectCard
            title="Komoju"
            by="Delica"
            description="Japan based payment gateway offering seamless integration for online merchants."
            job="React native SDK development"
            link="https://www.npmjs.com/package/@komoju/komoju-react-native"
            linkLabel="Npm repo"
            toColor="to-lime-600"
          />
          <ProjectCard
            title="Singlife"
            by="Singlife ph & Singlife singapore"
            description="Singapore-based financial company offering a wide range of products and services."
            job="Both IOS and Android application developments"
            link="https://singlife.com/en"
            linkLabel="Singlife Sg"
            link2="https://singlife.com.ph/"
            linkLabel2="Singlife Ph"
            toColor="to-red-500"
          />
          <ProjectCard
            title="Lucky1"
            by="DigitalX"
            description="Online lottery platform based in Sri Lanka."
            job="Full Stack development and Widgets development"
            link="https://lucky1.lk/"
            linkLabel="Website"
            toColor="to-blue-600"
          />
          <ProjectCard
            title="SriPay"
            by="Boswin pvt Ltd"
            description="Payment gateway based in Sri Lanka, integrated with Alipay."
            job="Full Stack development and mobile application development using Ionic3"
            link="https://sripay.lk/"
            linkLabel="Website"
            toColor="to-sky-600"
          />
        </div>
        <h2 className="text-2xl font-extrabold sm:text-2xl text-slate-900 mt-6 mb-0">
          Personal Contributions
        </h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-4 gap-5 mt-6 mb-0">
          <ProjectCard
            title="Stitchnp"
            by="lpcb"
            description="Helps consolidate multiple package commands into a single command."
            link="https://stitchnp.vercel.app/"
            linkLabel="Tool"
            toColor="to-yellow-600"
          />
          <ProjectCard
            title="Github"
            by="lpcb"
            description="There are several projects available for free use."
            link="https://github.com/ChathuraLiyanapathirana"
            linkLabel="Github"
            toColor="to-gray-300"
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectSection;
