"use client";

import {
  RocketLaunchIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Fast Workforce Deployment",
    description: "Quick turnaround for urgent hiring needs.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Industry-Ready Talent",
    description: "Pre-screened and trained personnel.",
    icon: UserGroupIcon,
  },
  {
    name: "Compliance & Verification",
    description:
      "Identity checks, documentation, and HR Compliance support.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Flexible Contracts",
    description: "Temporary, contract, or permanent staffing.",
    icon: DocumentTextIcon,
    link: "/jobs",
    linkLabel: "View Jobs",
  },
  {
    name: "Professional Workforce Management",
    description: "Payroll, attendance, and supervision handled for you.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Nationwide Coverage",
    description: "Access to trained manpower across Nigeria.",
    icon: GlobeAltIcon,
  },
];

export default function WhyCompaniesChooseUs() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Label */}
        <p className="text-sm font-medium text-gray-600">
          Why Companies choose Us
        </p>

        {/* Main Heading */}
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl">
          Why Businesses Trust Our Manpower Services
        </h2>

        {/* Service Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl bg-[#0B1F3A] p-8 text-left"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500">
                <service.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {service.description}
              </p>

              {/* Optional Link */}
              {service.link && (
                <a
                  href={service.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-orange-400"
                >
                  {service.linkLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="/work-with-us"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
          >
            Work With Us
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
