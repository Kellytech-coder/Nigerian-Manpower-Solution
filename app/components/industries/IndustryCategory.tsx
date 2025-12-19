"use client";
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const industries = [
  {
    title: "Construction & Engineering",
    description: "Skilled and unskilled labor supply for construction sites, infrastructure projects, and engineering operations.",
    image: "/images/sector1.png",
  },
  {
    title: "Manufacturing & Production",
    description: "Factory workers, machine operators, quality control staff, and operational supervisors.",
    image: "/images/industrycategory1.png",
  },
  {
    title: "Oil & Gas / Energy",
    description: "Technical manpower, field operators, safety officers, and project support staff.",
    image: "/images/industrycategory2.png",
  },
  {
    title: "Logistics, Transportation & Warehousing",
    description: "Loaders, inventory officers, forklift operators, dispatch staff, and warehouse managers.",
    image: "/images/industrycategory3.png",
  },
  {
    title: "Technology & IT Services",
    description: "IT support staff, technical assistants, helpdesk agents, and system operations support.",
    image: "/images/industrycategory4.png",
  },
  {
    title: "Hospitality & Events",
    description: "Hotel staff, cleaners, cooks, waiters, event ushers, and facility support personnel.",
    image: "/images/industrycategory5.png",
  },
  {
    title: "Banking, Finance & Corporate Office",
    description: "Administrative assistants, receptionists, customer service reps, and office support personnel.",
    image: "/images/industrycategory6.png",
  },
  {
    title: "Agriculture & Food Processing",
    description: "Farm assistants, production workers, quality inspectors, sorting and packaging teams.",
    image: "/images/industrycategory7.png",
  },
  {
    title: "Retail & E-Commerce",
    description: "Sales attendants, merchandisers, packers, delivery assistants, and customer support teams.",
    image: "/images/industrycategory8.png",
  },
  {
    title: "Safety & Security",
    description: "Security personnel, safety officers, access control staff, and surveillance support teams.",
    image: "/images/industrycategory10.png",
  },
  {
    title: "Healthcare & Medical Support",
    description: "Nurses, assistants, cleaners, patient support staff, and facility maintenance teams.",
    image: "/images/industrycategory11.png",
  },
  {
    title: "Customer Support / BPO",
    description: "Call center agents, telemarketers, helpdesk teams, and onboarding support staff.",
    image: "/images/industrycategory9.png",
  },
];

const CARDS_PER_VIEW = 3;

const IndustryCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const maxIndex = industries.length - CARDS_PER_VIEW;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + CARDS_PER_VIEW
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - CARDS_PER_VIEW
    );
  };

  const visibleIndustries = viewAll
    ? industries
    : industries.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <section className="bg-[#050B1C] text-white py-20 px-6 md:px-12 lg:px-24">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-2xl">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-3">
            Industry categories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Industrial Coverage
          </h2>
          <p className="text-gray-400 text-lg">
            We partner with organizations across multiple sectors, delivering manpower solutions that align with their operational needs and industry standards.
          </p>
        </div>

        <button
          onClick={() => setViewAll(!viewAll)}
          className="mt-6 md:mt-0 border border-gray-600 px-6 py-2 rounded-md text-sm hover:bg-white hover:text-black transition-all"
        >
          {viewAll ? "Show less" : "View all"}
        </button>
      </div>

      {/* Cards */}
      <div
        className={`grid gap-6 mb-12 ${
          viewAll
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {visibleIndustries.map((industry, index) => (
          <div
            key={index}
            className="relative h-[480px] group overflow-hidden rounded-sm cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${industry.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                {industry.description}
              </p>
              <button className="flex items-center text-sm font-semibold">
  See full details
  <ArrowRight className="ml-1 w-4 h-4" />
</button>

            </div>
          </div>
        ))}
      </div>

      {/* Controls (hidden when View All is active) */}
      {!viewAll && (
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {Array.from({
              length: Math.ceil(industries.length / CARDS_PER_VIEW),
            }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full ${
                  i * CARDS_PER_VIEW === currentIndex
                    ? "bg-white w-4"
                    : "bg-gray-600 w-1.5"
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 bg-white text-black hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-[#FF6B00] text-white hover:bg-[#e66000]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustryCategories;
