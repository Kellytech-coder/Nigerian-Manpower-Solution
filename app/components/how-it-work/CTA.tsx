import React from 'react';
import { FileText, Search, ClipboardCheck, Users, Settings } from 'lucide-react';

const DeploymentTimeline = () => {
  const timelineSteps = [
    { day: 'Day • 1', title: 'Request Submitted', icon: <FileText className="w-6 h-6" /> },
    { day: 'Day • 1-2', title: 'Screening & candidate shortlisting', icon: <Search className="w-6 h-6" /> },
    { day: 'Day • 2-3', title: 'Client approval', icon: <ClipboardCheck className="w-6 h-6" /> },
    { day: 'Day • 3-5', title: 'Worker deployment & onboarding', icon: <Users className="w-6 h-6" /> },
    { day: 'Day • 5+', title: 'Workforce management + weekly feedback', icon: <Settings className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-[#051129] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <span className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium text-gray-300">
            Deployment Timeline
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Manpower Deployment <br /> Timeline
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Clear timelines so you always know what to expect.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="absolute top-7 left-0 w-full h-[1px] bg-gray-700 z-0 hidden md:block" />

          {/* Vertical Line (Mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700 z-0 md:hidden" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-[#ff6f00] flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(255,111,0,0.3)] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <span className="text-sm font-medium text-gray-400 block uppercase tracking-wider">
                    {step.day}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimeline;
