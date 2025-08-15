"use client";
import Image from "next/image";
import { logos } from "@/context";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function CompaniesBar() {
  return (
    <motion.div
      className="bg-gray-100 py-8 sm:py-10 md:py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20 lg:gap-28">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={logoVariants}
            whileHover={{ scale: 1.08 }}
            className="flex justify-center transition-transform duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={70}
              className="h-14 md:h-20 object-contain max-w-[180px] mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
