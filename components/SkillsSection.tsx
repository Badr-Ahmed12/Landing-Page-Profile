"use client";
import { skills } from "@/context";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <motion.div
      className="bg-white py-12 mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {skills.map((skill, index) => (
          <motion.div key={index} className="text-center" variants={itemVariants}>
            {/* Icon */}
            <div
              className={`w-16 h-16 ${skill.color} mx-auto rounded-b-full flex items-center justify-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h11.25"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 20.25L15 15"
                />
              </svg>
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">{skill.title}</h3>
            {/* Description */}
            <p className="text-gray-500 mt-2">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
