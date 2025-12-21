"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      style={{ perspective: 1200 }}
      className="relative min-h-[calc(100svh-4rem)] sm:min-h-[100svh] overflow-hidden"
    >
      <motion.section
        key="hero"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-start justify-center
                   px-4 sm:px-6 md:px-8 pt-20 sm:pt-24"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero1.png"
            alt="Manpower hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative text-center max-w-5xl mx-auto -mt-2 sm:-mt-4">
          <h1 className="text-white font-extrabold leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering <br />
            Businesses with <br />
            Strategic Manpower <br />
            Solutions
          </h1>

          <p className="text-gray-200 mt-5 sm:mt-6
                        text-lg sm:text-xl md:text-2xl
                        max-w-2xl mx-auto">
            We are a modern manpower and workforce solutions company helping organizations
            find trusted talent and build stronger teams for long-term growth.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row
                          items-center justify-center gap-4 sm:gap-3">
            <Link href="/landing-page">
              <button className="bg-[#FF8C00] hover:bg-[#e65c00]
                                 text-white px-8 py-4 rounded-md font-semibold text-lg">
                Learn more
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-white/20 hover:bg-white/30
                                 text-white border border-white
                                 px-8 py-4 rounded-md font-semibold text-lg">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
