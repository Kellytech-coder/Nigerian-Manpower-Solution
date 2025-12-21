"use client";
import React, { useState } from "react";
import { motion, Variants, easeOut, easeIn } from "framer-motion";

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "about",
      title: "About NMS",
      description:
        "Founded with a mission to bridge the gap between exceptional talent and forward-thinking organizations...",
      image: "/images/about-hero2.png",
    },
    {
      type: "mission-vision",
      leftLabel: "Our Mission, Vision & Values",
      leftTitle: "Mission Statement",
      leftDescription:
        "To provide reliable, efficient, and scalable manpower solutions that empower businesses and support workforce development.",
      leftTitle2: "Vision Statement",
      leftDescription2:
        "To become the most trusted manpower provider recognized for innovation, transparency, and excellence.",
      rightLabel: "Core Values",
      values: [
        { icon: "shield", title: "Integrity", description: "We work with transparency and honesty" },
        { icon: "star", title: "Excellence", description: "We deliver top-tier recruitment and workforce services." },
        { icon: "lightbulb", title: "Innovation", description: "We leverage technology for smarter manpower solutions." },
        { icon: "refresh", title: "Responsiveness", description: "We respond quickly to clients and employee needs." },
        { icon: "users", title: "People First", description: "We prioritize growth and development at every level." }
      ]
    },
    {
      type: "why-choose",
      label: "Why Choose Us",
      title: "Why Businesses Choose Us",
      description:
        "We combine industry expertise, technology, and a human-focused approach...",
      features: [
        { image: "/images/about-ourstory1.png", title: "Reliable Workforce Supply", description: "Fast, verified, and ready-to-work talent." },
        { image: "/images/about-ourstory2.png", title: "Flexible Staffing Models", description: "Permanent, temporary, and contract hiring." },
        { image: "/images/about-ourstory3.png", title: "Industry Expertise", description: "Deep knowledge across multiple sectors." },
        { image: "/images/about-ourstory4.png", title: "Quality Assurance", description: "Strict screening and compliance checks." },
      ],
    },
  ];

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const renderIcon = (iconType: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    star: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    lightbulb: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    refresh: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    users: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  };
  return icons[iconType] || icons.shield;
};


  const currentSlideData = slides[currentSlide];


// Animation variants for dramatic zoom
const zoomVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, y: 30 },
  visible: { 
    scale: 1.05,
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut } // slower zoom-in
  },
  exit: { 
    scale: 0.8,
    opacity: 0,
    y: -30,
    transition: { duration: 0.8, ease: easeIn }
  },
};



  return (
    <motion.section
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-12 px-4 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={zoomVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* About Slide */}
        {currentSlideData.type === "about" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <p className="text-xs sm:text-sm uppercase text-gray-300 mb-2 sm:mb-4 tracking-wider">Our Story</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">{currentSlideData.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed">{currentSlideData.description}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={currentSlideData.image} alt={currentSlideData.title}
                   className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover" />
            </div>
          </div>
        )}

        {/* Mission, Vision Slide */}
        {currentSlideData.type === "mission-vision" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 text-white">
            <div>
              <p className="text-xs sm:text-sm uppercase text-gray-400 mb-4 sm:mb-6 tracking-wider">{currentSlideData.leftLabel}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{currentSlideData.leftTitle}</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">{currentSlideData.leftDescription}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{currentSlideData.leftTitle2}</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">{currentSlideData.leftDescription2}</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm uppercase text-gray-400 mb-4 sm:mb-6 tracking-wider">{currentSlideData.rightLabel}</p>
              <div className="space-y-4 sm:space-y-6">
                {currentSlideData.values?.map((v, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start">
                    <div className="text-amber-500 flex-shrink-0 mt-1">{renderIcon(v.icon)}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{v.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Slide */}
        {currentSlideData.type === "why-choose" && (
          <div className="text-white">
            <p className="text-xs sm:text-sm uppercase text-gray-300 mb-2 sm:mb-4 tracking-wider">{currentSlideData.label}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">{currentSlideData.title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-10 max-w-3xl leading-relaxed">{currentSlideData.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10">
              {currentSlideData.features?.map((f, i) => (
                <div key={i} className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transform transition-transform duration-300">
                  <img src={f.image} alt={f.title} className="w-full h-40 sm:h-48 object-cover" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{f.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GLOBAL NAVIGATION BUTTONS (bottom) */}
        <div className="flex justify-start mt-10 gap-3">
          <button onClick={handlePrev} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-md flex items-center justify-center transition-colors text-xl sm:text-2xl ${currentSlide === 0 ? "bg-slate-700 text-gray-400" : ""} ${currentSlide === 1 ? "bg-slate-800 text-white" : ""} ${currentSlide === 2 ? "bg-amber-500 text-white hover:bg-amber-600" : ""}`}>‹</button>
          <button onClick={handleNext} className={`w-10 h-10 sm:w-12 sm:h-12 rounded-md flex items-center justify-center transition-colors text-xl sm:text-2xl ${currentSlide === 0 ? "bg-amber-500 text-white hover:bg-amber-600" : ""} ${currentSlide === 1 ? "bg-amber-500 text-white hover:bg-amber-600" : ""} ${currentSlide === 2 ? "bg-slate-700 text-gray-400" : ""}`}>›</button>
        </div>

      </div>
    </motion.section>
  );
}
