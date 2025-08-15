"use client";
import { skills } from "@/context";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  const icons = (color: string) => [
    // Icon 1
    <svg
      key="icon1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-8 h-8 ${color.replace("bg-", "text-")}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18m-18 7.5h18m-18 7.5h18" />
    </svg>,

    // Icon 2
    <svg
      key="icon2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-8 h-8 ${color.replace("bg-", "text-")}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>,

    // Icon 3
    <svg
      key="icon3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={`w-8 h-8 ${color.replace("bg-", "text-")}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>,
  ];

  return (
    <motion.section
      className="bg-white py-16 mt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-gray-50 rounded-xl p-8 text-center transition-all duration-300"
            >
              <div
                className={`w-20 h-20 ${skill.color} bg-opacity-20 mx-auto rounded-full flex items-center justify-center shadow-md`}
              >
                {icons(skill.color)[index % 3]}
              </div>

              <h3 className="text-xl font-semibold mt-6">{skill.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
