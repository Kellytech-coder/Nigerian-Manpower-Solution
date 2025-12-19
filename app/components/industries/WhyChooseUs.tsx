import React from 'react';
import { Users, Target, ShieldCheck, FileText, Briefcase, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Fast Workforce Deployment",
      description: "Quick turnaround for urgent hiring needs.",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Industry-Ready Talent",
      description: "Pre-screened and trained personnel.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Compliance & Verification",
      description: "Identity checks, documentation, and HR compliance support.",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Flexible Contracts",
      description: "Temporary, contract, or permanent staffing.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Professional Workforce Management",
      description: "Payroll, attendance, and supervision handled for you.",
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Nationwide Coverage",
      description: "Access to trained manpower across Nigeria.",
    },
  ];

  return (
    <section className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-24 px-6 font-sans">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-gray-700 text-lg font-medium mb-4">
            Why Companies Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Why Businesses Trust Our Manpower Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0A1629] rounded-xl p-8 flex flex-col items-start min-h-[280px] transition-transform hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="bg-[#FF6B00] p-3 rounded-lg mb-8 shadow-lg">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-2xl font-bold mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
