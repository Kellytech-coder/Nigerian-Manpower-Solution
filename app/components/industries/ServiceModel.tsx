import React from "react";
import Image from "next/image";

const services = [
  {
    id: "1",
    title: "Skilled & Semi-skilled Workers",
    description:
      "Technicians, operators, supervisors, and specialized labor relevant to each industry.",
  },
  {
    id: "2",
    title: "Large Workforce Deployment",
    description:
      "Fast and compliant deployment for high-volume or seasonal labor demands.",
  },
  {
    id: "3",
    title: "Dedicated Workforce Management",
    description:
      "On-site supervisors, shift managers, attendance tracking, and HR support.",
  },
];

const ServiceModel = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 font-sans">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Industry-Specific Service Model
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Tailored Manpower <br className="hidden md:block" />
            Solutions for Every Industry
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Every industry has unique workforce requirements. We provide specialized
            manpower solutions built for your operational environment.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Services */}
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id}>
                <div className="flex items-start gap-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.id}.
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-4 pl-12 text-gray-600 text-base leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative h-[540px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/industryhero.png"
              alt="Industrial facility"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceModel;
