"use client";

import Image from "next/image";

export default function SpecializedServices() {
  const services = [
    {
      title: "Talent Sourcing & Recruitment",
      image: "/images/specialized1.png",
      items: [
        "Job analysis and role definition",
        "Candidates sourcing and headhunting",
        "Structured screening and interviews",
        "Candidate shortlisting & assessment reports",
        "Offer management and onboarding support",
      ],
    },
    {
      title: "Workforce Deployment & Manpower",
      image: "/images/specialized2.png",
      items: [
        "Staff onboarding and induction",
        "Daily/weekly performance tracking",
        "Attendance monitoring",
        "Payroll and HR support",
        "Contact management",
      ],
    },
    {
      title: "HR Advisory & Support Services",
      image: "/images/specialized3.png",
      items: [
        "HR policy development",
        "Outsourced HR operations",
        "Employee engagement programs",
        "Performance management setup",
      ],
    },
    {
      title: "Training & Upskilling",
      image: "/images/specialized4.png",
      items: [
        "Soft skills training",
        "Industry-specific training",
        "Workplace safety & compliance workshops",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <p className="text-sm font-semibold text-gray-500 mb-3">
          Detailed Service Breakdown
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">
          Our Specialized service <br /> Breakdown
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {index + 1}. {service.title}
                </h3>

                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
