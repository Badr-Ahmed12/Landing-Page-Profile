"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./UI/Button";
import { heroText, decorations } from "@/context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const shapeVariants = {
  float: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between bg-white p-8 md:p-16 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Text */}
      <motion.div className="max-w-lg w-full" variants={textVariants}>
        <p className="text-gray-500 text-sm md:text-base font-medium mb-2">
          Branding | Image making
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {heroText.title}
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          {heroText.description}
        </p>
        <Button name="Get Started" />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative mt-8 md:mt-0 w-full max-w-md"
        variants={textVariants}
      >
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
          <Image
            src={heroText.image}
            alt={heroText.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Decorations */}
        {decorations.map((d, i) => (
          <motion.div
            key={i}
            variants={shapeVariants}
            animate="float"
            className={`absolute ${d.position} ${d.size} ${d.color} ${d.shape} ${d.md} opacity-80`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
