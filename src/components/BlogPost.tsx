import React from "react";
import Image from "next/image";
import HtmlRenderer from "./HtmlRenderer";
import { contactInfo } from "@/constants/appConstant";
import { BlogPostType } from "@/types/appTypes";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const BlogPost = ({ title, date, description, image }: BlogPostType) => {
  const formatedDate = new Date(date).toString().slice(0, 14);

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="group/card relative !h-auto w-auto rounded-2xl border border-ink/10 bg-zinc-50 p-2 transition hover:border-brand/30 hover:shadow-brand dark:border-white/10 dark:bg-zinc-950 dark:hover:shadow-brand sm:w-[30rem]">

        <div className="rounded-lg mb-4">
          {/* <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full"> */}
          {/* <div className="greyscaleImage transition duration-300"> */}
          <CardItem
            translateZ="70"
            className="text-xl dark:text-white w-full"
          >
            <Image
              width={500}
              height={500}
              alt="Office"
              src={`${process.env.IMAGE_PREFIX}${image}`}
              className="h-56 w-full object-cover rounded-xl mb-4"
              loading="lazy"
            />
          </CardItem>
          {/* </div> */}

          {/* <div className="bg-white p-4 sm:p-6 h-full"> */}
          {/* <div className="p-4"> */}
            <CardItem
              translateZ="70"
              className="text-xl dark:text-white"
            >
              <time dateTime={formatedDate} className="ms-2 block text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {" "}
                {formatedDate}{" "}
              </time>
            </CardItem>
            <CardItem
              translateZ="80"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <h3 className="font-display ms-2 mt-0.5 text-lg text-ink dark:text-white">
                <HtmlRenderer htmlString={title} />
              </h3>
            </CardItem>
            <CardItem
              translateZ="70"
              className="text-xl dark:text-white"
            >
              <div className="ms-2 mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                <HtmlRenderer htmlString={description} />
              </div>
            </CardItem>
            <CardItem
              translateZ="80"
              className="text-x dark:text-white"
            >
              <a
                href={contactInfo.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="group ms-2 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-dim dark:text-brand"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </a>
            </CardItem>
          </div>
      </CardBody>
    </CardContainer>
  );
};

export default BlogPost;
