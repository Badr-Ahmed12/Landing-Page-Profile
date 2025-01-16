"use client";
import { navLinks } from "@/context";
import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="py-4 text-black shadow-lg sm:py-6"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo Section */}
        <div className="logo text-2xl font-bold">
          <h1>Logo</h1>
        </div>

        {/* Hamburger Menu Icon (for small screens) */}
        <button
          onClick={toggleMenu}
          className="block sm:hidden p-2 text-gray-700 hover:text-yellow-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (for small screens) */}
        <motion.ul
          variants={variants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          className={`flex flex-col space-y-4 ${isMenuOpen ? "block" : "hidden"} sm:hidden`}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.title}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href={link.href}
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Navigation Links (for large screens) */}
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="hidden sm:flex sm:flex-row sm:space-x-6"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.title}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href={link.href}
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
