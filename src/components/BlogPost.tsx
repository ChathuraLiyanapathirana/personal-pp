import Image from "next/image";
import React from "react";
import HtmlRenderer from "./HtmlRenderer";
import { contactInfo } from "@/constants/appConstant";

type Props = {
  title: string;
  date: string;
  image: string;
  description: string;
};

const BlogPost = ({ title, date, description, image }: Props) => {
  const formatedDate = new Date(date).toString().slice(0, 14);

  return (
    <div className="rounded-lg">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full">
        <div className="greyscaleImage transition duration-300">
          <Image
            width={500}
            height={500}
            alt="Office"
            src={`${process.env.IMAGE_PREFIX}${image}`}
            className="h-56 w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-white p-4 sm:p-6 h-full">
          <time dateTime={formatedDate} className="block text-xs text-gray-500">
            {" "}
            {formatedDate}{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">
              <HtmlRenderer htmlString={title} />
            </h3>
          </a>

          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            <HtmlRenderer htmlString={description} />
          </div>
          <a
            href={contactInfo.blog}
            target="_blank"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-800"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180 text-gray-800"
            >
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
