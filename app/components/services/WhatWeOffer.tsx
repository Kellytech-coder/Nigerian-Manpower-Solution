"use client";

import {
  UserPlus,
  FileText,
  Users,
  User,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Permanent Recruitment",
      description:
        "Reliable long-term placements for specialized and general roles. We source, screen, and match highly qualified candidates to ensure strong organizational fit.",
      icon: UserPlus,
    },
    {
      title: "Temporary & Contract Staffing",
      description:
        "Flexible workforce solutions for short-term or project-based needs. Ideal for businesses looking for quick, compliant, and scalable staffing.",
      icon: FileText,
    },
    {
      title: "Outsourced Workforce Management",
      description:
        "Complete workforce deployment, supervision, and administrative support. We handle HR operations so you can focus on core business activities.",
      icon: Users,
    },
    {
      title: "Executive Search / Leadership",
      description:
        "Top-tier recruitment for senior-level and critical leadership positions, backed by industry insights and talent mapping.",
      icon: User,
    },
    {
      title: "Bulk & Mass Recruitment",
      description:
        "High-volume hiring for industries requiring large teams, seasonal workers, or operational staff, fast and efficiently.",
      icon: Layers,
    },
    {
      title: "Screening, Verification & Compliance",
      description:
        "Background checks, identity verification, skill assessments, and workplace compliance support to ensure trustworthy hiring.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We provide a broad range of manpower recruitment and staffing
            services designed to support companies across multiple industries.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-[#0A1A33] rounded-2xl p-8 text-white hover:translate-y-[-4px] transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-500 mb-6">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
