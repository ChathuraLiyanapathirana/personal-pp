import React from "react";
import { contactInfo } from "@/constants/appConstant";
import SectionHeading from "../SectionHeading";
import BlogPost from "../BlogPost";
import { PostType } from "@/types/appTypes";

async function getPosts(): Promise<PostType[]> {
  const api = process.env.WP_URL;

  if (!api) {
    return [];
  }

  try {
    const response = await fetch(api, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

const BlogSection = async () => {
  const posts = await getPosts();

  return (
    <div
      className="relative min-h-screen border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="blog"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            className="mb-0"
            eyebrow="Writing"
            title="Blog"
            description="Long form posts and technical notes, full archive lives on the main blog site."
          />
          <a
            href={contactInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display shrink-0 text-2xl font-bold text-brand transition hover:text-brand-dim sm:text-3xl"
          >
            appcitor.com
          </a>
        </div>
        <div className="mt-2">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((item, index) => (
                <BlogPost
                  date={item.date}
                  description={item.excerpt.rendered}
                  image={item._embedded["wp:featuredmedia"][0].media_details?.file}
                  title={item.title.rendered}
                  key={`${item.title.rendered}-${index}`}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Blog posts are temporarily unavailable.
            </p>
          )}
        </div>
        <div className="mt-12 flex justify-end">
          <a
            href={contactInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-display inline-flex items-center gap-2 text-2xl font-bold text-ink transition hover:text-brand dark:text-white dark:hover:text-brand sm:text-3xl"
          >
            See More
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
