"use client";
import { navLinks } from "@/context";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.4, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`${
        isMobile
          ? "flex flex-col items-center space-y-6 py-6"
          : "flex flex-row space-x-8"
      }`}
    >
      {navLinks.map((link) => (
        <motion.li key={link.title} variants={itemVariants}>
          <a
            href={link.href}
            className="relative text-lg font-medium text-black hover:text-yellow-300 transition-colors duration-300"
          >
            {link.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-4 text-black shadow-lg sm:py-6 bg-white sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="logo flex items-center font-bold text-2xl">
          <span className="text-yellow-300">Visual </span>
          <span>Design</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:block">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="sm:hidden p-2 text-gray-700 hover:text-yellow-300 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden bg-white border-t border-gray-200 shadow-md"
        >
          <NavLinks isMobile />
        </motion.div>
      )}
    </motion.nav>
  );
}
