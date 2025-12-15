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

  const primaryColor = "#FF8C00";   // Orange
  const connectorColor = "#22395B";

  return (
    <section className="bg-[#0A1A33] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start min-h-[500px]">

        {/* Left Content */}
        <div className="md:pr-10 pt-4 flex flex-col justify-between h-full">
          <div>
            <p className="text-sm font-medium uppercase text-gray-400 mb-2 tracking-widest">
              Industries We Serve
            </p>

            <h2 className="text-5xl font-extrabold mb-10 max-w-xl leading-snug">
              We deliver manpower solutions across diverse sectors
            </h2>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center text-white font-medium hover:text-orange-400 transition"
          >
            View Full Industries Page
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Right Content */}
        <div className="space-y-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isLast = index === industries.length - 1;

            return (
              <div key={index} className="flex items-start gap-6">
                <div className="relative flex-shrink-0 w-10">
                  {!isLast && (
                    <div
                      className="absolute left-1/2 top-8 w-[2px]"
                      style={{
                        height: "calc(100% + 48px)",
                        backgroundColor: connectorColor,
                        transform: "translateX(-50%)",
                      }}
                    />
                  )}

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Icon className="text-white text-base" />
                  </div>
                </div>

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
