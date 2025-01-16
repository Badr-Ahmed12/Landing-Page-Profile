"use client"; 
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./UI/Button";
import { heroText } from "@/context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row items-center justify-between bg-white p-8 md:p-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div className="max-w-lg w-full" variants={textVariants}>
        <p className="text-gray-600 text-sm md:text-base font-medium mb-2">
          Branding | Image making
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {heroText.title}
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          {heroText.description}
        </p>
        <Button children="Learn More" />
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div className="relative mt-8 md:mt-0 w-full max-w-md" variants={textVariants}>
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
          <Image
            src={heroText.image}
            alt={heroText.title}
            className="w-full h-full object-cover"
            layout="responsive"
            width={400}
            height={500}
          />
        </div>

        <div className="absolute -top-8 -left-8 w-12 h-12 bg-red-400 rounded-full md:w-16 md:h-16"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-green-600 rounded-lg md:w-20 md:h-20"></div>
      </motion.div>
    </motion.div>
  );
}
