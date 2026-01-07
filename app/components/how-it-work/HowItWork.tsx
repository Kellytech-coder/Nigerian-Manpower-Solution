import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      stepNum: 'Step • 1',
      title: 'Submit Your Manpower Request',
      description: 'Tell us the roles you need, quantity, duration, and location. Include:',
      items: [
        'Job specifications',
        'Skill level',
        'Work schedule',
        'Special requirements (HSE, certifications, etc.)',
      ],
      image: '/images/howitwork1.png',
    },
    {
      id: '02',
      stepNum: 'Step • 2',
      title: 'Candidate Sourcing & Screening',
      description:
        'We search, verify, and shortlist the best-fit candidates from our workforce pool. Our screening includes:',
      items: [
        'Identity verification',
        'Experience checks',
        'Basic assessments',
        'Availability confirmation',
      ],
      image: '/images/howitwork2.png',
    },
    {
      id: '03',
      stepNum: 'Step • 3',
      title: 'Approval & Deployment',
      description:
        'You approve the shortlisted workers and we deploy them, often within 24–72 hours depending on volume. Include:',
      items: [
        'Mobilization',
        'Safety briefing',
        'On-site orientation',
        'Attendance setup',
      ],
      image: '/images/howitwork3.png',
    },
    {
      id: '04',
      stepNum: 'Step • 4',
      title: 'Workforce Management & Support',
      description:
        'We manage all backend HR processes while you focus on operations:',
      items: [
        'Attendance tracking',
        'Payroll processing',
        'Performance monitoring',
        'Replacement guarantee',
        'Regular communication',
      ],
      image: '/images/howitwork4.png',
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-800 mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            A Smooth 4-Step <br /> Process
          </h2>
          <p className="text-gray-600">
            Whether you need 5 workers or over 200+, our process stays clear,
            reliable, and designed for speed.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-md">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative pl-20">
                {/* Vertical connector line (only between steps) */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[28px] top-[56px] h-[calc(100%+8rem)] w-px bg-gray-300 hidden md:block" />
                )}

                {/* Number */}
                <div className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6f00] text-lg font-bold text-white ring-8 ring-[#f9fafb]">
                  {step.id}
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {step.stepNum}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-md">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-900 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
