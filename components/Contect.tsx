"use client";

import { motion } from "framer-motion";
import Form from "./UI/Form";
import { contactInfo } from "@/context";

export default function ContactSection() {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              {contactInfo.title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {contactInfo.description}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {/* Email Icon */}
              <a href="#" aria-label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 16.01V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h11l4 4-.01-4z"
                  />
                </svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69V10.41h3.13V8.033c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.794.144v3.24l-1.917.001c-1.504 0-1.795.714-1.795 1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              {/* Dribbble Icon */}
              <a href="#" aria-label="Dribbble">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm7.612 4.57a9.61 9.61 0 012.254 6.042c-.274-.08-2.901-.787-5.71-.303-.077-.166-.155-.332-.235-.497-1.177-2.419-2.646-4.545-4.344-6.298a9.612 9.612 0 018.035 1.056zM12 2.4c2.007 0 3.852.663 5.345 1.774a29.172 29.172 0 01-1.902 1.93c-3.64-1.303-7.19-.896-9.246-.443C7.314 3.812 9.585 2.4 12 2.4zM4.204 5.978a9.597 9.597 0 015.105-.662c-.84.88-1.63 1.84-2.368 2.87-2.57.79-4.349 1.792-4.562 1.906a9.576 9.576 0 011.825-4.114zM2.4 12c0-.35.026-.697.076-1.04.268-.118 2.076-.9 4.553-1.62-.227.363-.448.731-.662 1.104a35.55 35.55 0 00-2.252 5.39A9.588 9.588 0 012.4 12zm9.6 9.6a9.589 9.589 0 01-7.506-3.647c.084-.395.632-2.875 2.758-5.994.49-.84 1.016-1.654 1.563-2.443 1.383-.24 3.623-.36 6.036.286.283.61.553 1.23.81 1.857a47.57 47.57 0 00-5.69 4.694c.067.157.13.313.194.472 1.32 3.143 2.248 5.737 2.336 5.972a9.597 9.597 0 01-.5.085c-.333.046-.666.068-1 .068zM18.735 16.32c-.28.483-.567.962-.862 1.438-1.042-.046-2.671-.204-4.661-1.676a44.65 44.65 0 015.285-4.336c.218.548.424 1.097.618 1.647-.115.213-.23.428-.343.645a37.53 37.53 0 00-.037.282z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Form Section */}
          <Form />
        </div>
      </motion.div>
    </section>
  );
}
