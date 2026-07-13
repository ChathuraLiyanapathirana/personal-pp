"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ProjectHeroBackdropProps = {
  images: string[];
};

const AUTO_ADVANCE_MS = 6000;

const ProjectHeroBackdrop = ({ images }: ProjectHeroBackdropProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActiveIndex((index) => (index + 1) % images.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(id);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
    >
      {images.map((image, index) => (
        <Image
          key={image}
          src={encodeURI(image)}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover object-top transition-opacity duration-[1500ms] ease-out ${
            index === activeIndex
              ? "opacity-[0.1] dark:opacity-[0.10]"
              : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
};

export default ProjectHeroBackdrop;
