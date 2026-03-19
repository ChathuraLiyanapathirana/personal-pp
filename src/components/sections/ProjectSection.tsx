import React from "react";
import ProjectCard from "../ProjectCard";
import { professionalProjects, personalProjects } from "@/constants/appConstant";

const ProjectSection = () => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen bg-white dark:bg-neutral-900 pt-4 mb-8 md:mb-2 lg:pr-4 lg:pl-4 xxs:pr-4 xxs:pl-4"
      id="project"
    >
      <div className="flex flex-1 flex-col lg:items-start xs:items-end xs:justify-end">
        <h1 className="text-4xl font-extrabold sm:text-4xl text-slate-900 dark:text-white mt-0 mb-0">
          Projects
        </h1>
        <h2 className="text-2xl font-extrabold sm:text-2xl text-slate-900 dark:text-white mt-6 mb-0">
          Professional Contributions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 mt-6 mb-0">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <h2 className="text-2xl font-extrabold sm:text-2xl text-slate-900 dark:text-white mt-6 mb-0">
          Personal Contributions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-6 mt-6 mb-0">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
