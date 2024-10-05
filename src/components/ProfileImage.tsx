"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
      <picture>
        <source srcSet="/images/iam.webp" type="image/webp" />
        <source srcSet="/images/iam.png" type="image/png" />
        <Image
          src="/images/iam.png"
          width={320}
          height={200}
          className="my-image"
          alt="iam image"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </picture>
    </motion.div>
  );
};

export default ProfileImage;
