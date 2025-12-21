"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const processSteps = [
  {
    title: "Understanding Your Needs",
    description: "We analyze your manpower requirements and job specifications.",
    imageAlt: "Discussion between two professionals",
    imageSrc: "/images/about-ourprocess1.png",
  },
  {
    title: "Candidate Sourcing & Screening",
    description: "We search, verify, and shortlist the most qualified candidates.",
    imageAlt: "Video interview on laptop",
    imageSrc: "/images/about-ourprocess2.png",
  },
  {
    title: "Matching & Deployment",
    description: "We align the right talent to your business needs.",
    imageAlt: "Professional conversation",
    imageSrc: "/images/about-ourprocess3.png",
  },
  {
    title: "Continuous Support",
    description: "We provide post-deployment monitoring and workforce management.",
    imageAlt: "Handshake in business setting",
    imageSrc: "/images/about-ourprocess4.png",
  },
];

// Container variant for staggering children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // each card appears 0.3s after previous
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1, // exit in reverse order
    },
  },
};

// Each card animation
const cardVariants: Variants = {
  hidden: { x: -100, opacity: 0 }, // start from left
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }, // slower dramatic animation
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeIn" }, // slide out to right
  },
};

const OurProcess: React.FC = () => {
  return (
    <motion.section
      className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Our Process
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Our Approach to Manpower Delivery
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-64"
            variants={cardVariants}
          >
            <img
              src={step.imageSrc}
              alt={step.imageAlt}
              className="w-full h-36 sm:h-40 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-md sm:text-lg font-semibold text-gray-700 mb-1">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-10 text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          See Full How It Works
        </button>
      </motion.div>
    </motion.section>
  );
};

export default OurProcess;
