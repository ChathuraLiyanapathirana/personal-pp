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
      <CardBody className="bg-slate-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] !h-auto rounded-xl p-2 border  ">

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
              <time dateTime={formatedDate} className="block text-xs text-gray-500 ms-2">
                {" "}
                {formatedDate}{" "}
              </time>
            </CardItem>
            <CardItem
              translateZ="80"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <h3 className="mt-0.5 text-lg text-gray-900 ms-2">
                <HtmlRenderer htmlString={title} />
              </h3>
            </CardItem>
            <CardItem
              translateZ="70"
              className="text-xl dark:text-white"
            >
              <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ms-2">
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
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-800 ms-2"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180 text-gray-800"
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
