"use client";

import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { contactInfo } from "@/constants/appConstant";

type Props = {};

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const api = process.env.WP_URL ?? "";
      try {
        const response = await fetch(api);

        if (!response.ok) {
          throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }

        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  return (
    <div
      className="md:container md:mx-auto min-h-screen bg-white pt-4 lg:pr-4 lg:pl-4 xxs:pr-4 xxs:pl-4"
      id="blog"
    >
      <div className="flex flex-1 flex-col lg:items-start xs:items-end xs:justify-end">
        <h1 className="text-4xl font-extrabold sm:text-4xl text-slate-900 mt-0 mb-0">
          Full blog site
        </h1>
        <a
          href={contactInfo.blog}
          target="_blank"
          className="text-3xl font-extrabold sm:text-3xl mt-0 text-lime-400 hover:text-slate-900 transition duration-300 underline mb-4"
        >
          appcitor.com
        </a>
      </div>
      {posts?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
          {posts.map((item, index) => {
            return (
              <BlogPost
                date={item?.date}
                description={item?.excerpt?.rendered}
                image={
                  item?._embedded["wp:featuredmedia"][0].media_details?.file
                }
                title={item?.title?.rendered}
                key={index}
              />
            );
          })}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col items-end justify-end">
        <a
          href={contactInfo.blog}
          target="_blank"
          className="text-3xl font-extrabold sm:text-3xl text-slate-900 mt-8"
        >
          See More
          <span
            aria-hidden="true"
            className="transition-all group-hover:ms-0.5 rtl:rotate-180 text-gray-800 ml-2"
          >
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
