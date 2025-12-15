"use client";

import Link from "next/link";
// Import all necessary icons from react-icons/fa
import { FaTruck, FaIndustry, FaHardHat, FaOilCan, FaLaptopCode, FaShoppingBag, FaMoneyBillWave } from 'react-icons/fa';

export default function IndustriesWeServe() {

  // Define industries. Note: I'm replacing FaBrain with FaLaptopCode for a more standard "Technology" icon
  const industries = [
    { name: "Logistics & Transportation", icon: FaTruck },
    { name: "Manufacturing", icon: FaIndustry },
    { name: "Construction", icon: FaHardHat },
    { name: "Oil & Gas", icon: FaOilCan },
    { name: "Technology", icon: FaLaptopCode }, // Changed icon for a better visual fit
    { name: "Retail & E-commerce", icon: FaShoppingBag },
    { name: "Banking & Finance", icon: FaMoneyBillWave },
  ];

  // Colors derived directly from the Figma file analysis/previous code
  const primaryColor = "#FF8C00";      // Bright Orange
  const connectorColor = "#22395B";    // Darker blue/connector color (closer to the line in the image)
  const backgroundColor = "#0B1F3F";   // Very Dark Blue

  return (
    // Section matches dark background, large padding (py-20)
    <section className={`bg-[${backgroundColor}] text-white py-20 px-4`}>
      {/* Set the grid container height to match the tallest content (the industry list) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[500px]">

        {/* Left Content: Title, Description, and Bottom-Aligned Link */}
        {/* We use flex-col and justify-between to push the link to the bottom */}
        <div className="md:pr-10 pt-4 flex flex-col justify-between h-full">
          
          {/* Top Content (Text) */}
          <div>
            {/* Subtitle "Industries We Serve" - Matches small, grey, uppercase style */}
            <p className="text-sm font-medium uppercase text-gray-400 mb-2 tracking-widest">
              Industries We Serve
            </p>
            
            {/* Main Title - Matches 5xl, very bold, tight line-height */}
            <h2 className="text-5xl font-extrabold mb-10 max-w-xl leading-snug">
              We deliver manpower solutions across diverse sectors
            </h2>
          </div>
          
          {/* Bottom Content (Link) - Pushed to the bottom by justify-between */}
          <Link
            href="/industries"
            className="inline-flex items-center text-white font-medium hover:text-orange-400 transition text-base"
          >
            View Full Industries Page
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Right Content: Vertical List of Industries */}
        {/* Increased spacing to space-y-12 to visually separate the icons/text more, matching the design */}
        <div className="space-y-12">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            // Check if we are on the last item to hide the connecting line
            const isLastItem = index === industries.length - 1;
            
            return (
              <div
                key={index}
                className="flex items-start gap-6" // Use items-start to align top, matching the design
              >
                {/* Icon Container (The orange icon and the vertical line) */}
                <div 
                  className="relative flex-shrink-0"
                  style={{ minWidth: '40px' }} // Ensure a fixed width for alignment
                >
                  {/* The vertical connector line: height needs to span the distance to the next item */}
                  {!isLastItem && (
                    <div 
                      // Height is set to fill the space between the current icon and the next
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full z-0 mt-8"
                      style={{ 
                        backgroundColor: connectorColor,
                        height: 'calc(100% + 24px)' // Increased height to account for the space-y-12 (3rem = 48px)
                      }}
                    ></div>
                  )}
                  
                  {/* The Icon Container: W-8 h-8 matches the visual size in the design */}
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {/* Render the icon inside the circle, using white for contrast like the custom icons */}
                    <IconComponent className="text-white text-base" /> 
                  </div>
                </div>

                {/* Industry Name - Matches large, white, bold text */}
                <span className="text-2xl font-semibold leading-none pt-0.5">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}