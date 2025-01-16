"use client";

import Image from "next/image";
import { Logos } from "@/context";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CompaniesBar() {
  return (
    <motion.div
      className="bg-gray-100 py-6 sm:py-8 md:py-10"
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {Logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            variants={animation}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="h-12 md:h-16 object-contain max-w-xs mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
