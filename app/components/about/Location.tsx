"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const LocationSection = () => {
  const mapUrl =
    "https://www.google.com/maps?q=123+Sample+St,+Sydney+NSW+2000+AU";

  // Compress animation
  const compressVariants: Variants = {
    hidden: { scaleY: 0.8, opacity: 0 }, // slightly compressed and invisible
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }, // smooth dramatic reveal
    },
    exit: {
      scaleY: 0.8,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }, // compress out
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={compressVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-700 mb-2">
            Address
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Our location
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Location Details */}
          <div className="lg:pr-12">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sydney
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                123 Sample St, Sydney NSW 2000 AU
              </p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium transition"
              >
                View Map →
              </a>
            </div>
          </div>

          {/* Clickable Map */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg overflow-hidden
                       hover:ring-2 hover:ring-amber-600 transition"
            aria-label="Open map location"
          >
            <div className="w-full h-80 flex items-center justify-center bg-white">
              <img
                src="/images/Maplogo.jpg"
                alt="Map location"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </a>

        </div>
      </div>
    </motion.section>
  );
};

export default LocationSection;
