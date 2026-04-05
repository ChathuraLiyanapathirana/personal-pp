import React from "react";
import ProjectCard from "../ProjectCard";
import { professionalProjects, personalProjects } from "@/constants/appConstant";
import SectionHeading from "../SectionHeading";
import SectionSubheading from "../SectionSubheading";

const ProjectSection = () => {
  return (
    <div
      className="relative border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="project"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Professional builds shipped with teams, plus personal experiments and side projects."
        />
        <SectionSubheading className="mt-2">Professional Contributions</SectionSubheading>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <SectionSubheading className="mt-14">Personal Contributions</SectionSubheading>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
