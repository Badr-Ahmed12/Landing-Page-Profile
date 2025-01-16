"use client";

import { projects } from "@/context";
import Image from "next/image";
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

const GallerySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest work</h2>
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={animation}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                layout="responsive"
                width={400}
                height={300}
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
