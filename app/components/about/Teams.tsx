"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const leaders = [
  {
    name: "Awa Kelechi",
    title: "Founder & Lead Software Engineer",
    description: "Driving operational excellence and workforce innovation.",
    imageSrc: "/images/teams1.png",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/kelechi-awa-8a0a63256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/KelechiAwa4?t=WSYQsE5uc0bhqcduMqufZQ&s=09",
      instagram: "https://www.instagram.com/awa_bryan?igsh=Y2hleDllc2Zqc2lh",
    },
  },
  {
    name: "Nku Victor",
    title: "Co-Founder & Chief Product Designer",
    description: "Empowering teams and strengthening businesses growth.",
    imageSrc: "/images/teams2.png",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

// Float animation for each card
const floatVariants: Variants = {
  hidden: { y: 40, opacity: 0 }, // start slightly below
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }, // smooth float-in
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" }, // float out upwards
  },
};

const LeadershipTeam: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Meet Our Leadership
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Leadership Team
        </p>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 mb-12"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
      >
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center max-w-xs w-full sm:w-auto"
            variants={floatVariants}
          >
            <img
              src={leader.imageSrc}
              alt={leader.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-md mb-3 shadow-md"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
              {leader.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">
              {leader.title}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-3">
              {leader.description}
            </p>
            {/* Social media icons */}
            <div className="flex justify-center gap-3 sm:gap-4">
              <a href={leader.socials.linkedin} aria-label="LinkedIn">
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
              <a href={leader.socials.twitter} aria-label="Twitter">
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
              <a href={leader.socials.instagram} aria-label="Instagram">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Left-aligned hiring section */}
      <motion.div
        className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg max-w-xl mx-auto text-center sm:text-left"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          We’re hiring!
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 mb-4">
          Join our team and help us shape the future of workforce solutions.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          Open positions
        </button>
      </motion.div>
    </section>
  );
};

export default LeadershipTeam;
