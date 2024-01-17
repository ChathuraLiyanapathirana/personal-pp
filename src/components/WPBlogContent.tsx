"use client";

import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { PostType } from "@/types/appTypes";

const WPBlogContent = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState<null | string>(null);

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
        setError((error as Error).message);
      }
    })();
  }, []);

  return (
    <div>
      {posts?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
          {posts.map((item: PostType, index) => {
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
    </div>
  );
};

export default WPBlogContent;
