"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
      <Image
        src="/images/iam.png"
        width={320}
        height={200}
        className="my-image"
        alt=""
      />
    </motion.div>
  );
};

export default ProfileImage;
