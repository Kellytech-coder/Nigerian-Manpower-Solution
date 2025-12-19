"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

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


const IndustryCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    // Update cards per view based on screen width
    const updateCardsPerView = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setCardsPerView(3);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = industries.length - cardsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + cardsPerView));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - cardsPerView));
  };

  const visibleIndustries = industries.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

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
          onClick={() => setIsModalOpen(true)}
          className="mt-6 md:mt-0 border border-gray-600 px-6 py-2 rounded-md text-sm hover:bg-white hover:text-black transition-all"
        >
          View all
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="grid gap-6 md:grid-cols-3">
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
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-gray-300 text-sm mb-6">{industry.description}</p>
                <button className="flex items-center text-sm font-semibold">
                  See full details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows (only on mobile or when carousel is active) */}
        {cardsPerView === 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-black p-2 rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#FF6B00] text-white p-2 rounded-full"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Modal for "View All" */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex justify-center items-start overflow-auto py-20 px-4">
          <div className="bg-[#050B1C] w-full max-w-6xl p-6 rounded-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-white">All Industry Categories</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
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
                    <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                    <p className="text-gray-300 text-sm mb-6">{industry.description}</p>
                    <button className="flex items-center text-sm font-semibold">
                      See full details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustryCategories;
