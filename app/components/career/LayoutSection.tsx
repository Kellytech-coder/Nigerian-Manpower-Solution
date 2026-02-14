"use client";

import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Reliable Job Opportunities",
    description:
      "We partner with reputable companies, offering roles across multiple industries.",
    icon: BriefcaseIcon,
  },
  {
    name: "Timely Payments",
    description:
      "Wages and salaries are processed promptly and transparently.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Training & Upskilling",
    description:
      "Access to basic HSE, productivity, and job-readiness training.",
    icon: AcademicCapIcon,
  },
  {
    name: "Safe & Compliant Workplaces",
    description:
      "Every deployment follows safety, insurance, and regulatory standards.",
    icon: ShieldCheckIcon,
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Why Work With Us
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We offer fair opportunities, timely payments, and safe working
            conditions so you can grow your career with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="rounded-2xl bg-[#0B1F3A] p-8 text-left"
            >
              {/* Icon container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
