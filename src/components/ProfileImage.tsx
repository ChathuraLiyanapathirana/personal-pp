import React from "react";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="relative">
      {/* Subtle outer glow ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full scale-110 bg-gradient-to-br from-brand/20 via-transparent to-brand/10 blur-xl"
        aria-hidden
      />

      {/* Main image container */}
      <div className="relative">
        {/* Animated ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full border border-brand/30"
          aria-hidden
        />

        {/* Image wrapper with elegant border */}
        <div className="relative overflow-hidden rounded-full p-1 bg-gradient-to-br from-brand/40 via-brand/20 to-transparent">
          <div className="relative overflow-hidden rounded-full bg-background">
            <picture>
              <source srcSet="/images/iam.webp" type="image/webp" />
              <source srcSet="/images/iam.png" type="image/png" />
              <Image
                src="/images/iam.png"
                width={200}
                height={200}
                className="size-40 rounded-full object-cover object-center sm:size-44 md:size-48 transition-transform duration-500 hover:scale-105"
                alt="Portrait of Chathura Buddhika"
                priority={true}
                sizes="(max-width: 768px) 160px, 192px"
              />
            </picture>
          </div>
        </div>

        {/* Online status indicator */}
        <div className="absolute -bottom-1 -right-1 z-10 flex items-center justify-center">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-background p-0.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brand shadow-[0_0_8px_rgba(34,221,85,0.6)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
