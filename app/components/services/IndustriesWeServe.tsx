"use client";

import Link from "next/link";
import {
  FaTruck,
  FaIndustry,
  FaHardHat,
  FaOilCan,
  FaLaptopCode,
  FaShoppingBag,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function IndustriesWeServe() {
  const industries = [
    { name: "Logistics & Transportation", icon: FaTruck },
    { name: "Manufacturing", icon: FaIndustry },
    { name: "Construction", icon: FaHardHat },
    { name: "Oil & Gas", icon: FaOilCan },
    { name: "Technology", icon: FaLaptopCode },
    { name: "Retail & E-commerce", icon: FaShoppingBag },
    { name: "Banking & Finance", icon: FaMoneyBillWave },
  ];

  const primaryColor = "#FF8C00"; // icon orange
  const connectorColor = "#1F3558"; // muted blue connector

  return (
    <section className="bg-[#081B36] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <div className="flex flex-col h-full">
          {/* Text at top */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Industries We Serve
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-xl">
              We deliver manpower
              <br />
              solutions across
              <br />
              diverse sectors
            </h2>
          </div>

          {/* Button at bottom */}
          <div className="mt-auto">
            <Link
              href="/industries"
              className="inline-flex items-center mt-12 text-sm font-medium text-white hover:text-amber-600 transition group"
            >
              View Full Industries Page
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative space-y-14">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isLast = index === industries.length - 1;

            return (
              <div key={index} className="flex items-start gap-8 relative">

                {/* ICON + CONNECTOR */}
                <div className="relative flex flex-col items-center">
                  {!isLast && (
                    <span
                      className="absolute top-10 left-1/2 w-[2px]"
                      style={{
                        height: "72px",
                        backgroundColor: connectorColor,
                        transform: "translateX(-50%)",
                      }}
                    />
                  )}

                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Icon className="text-white text-lg" />
                  </span>
                </div>

                {/* TEXT */}
                <span className="text-2xl font-semibold leading-snug">
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
