import React from 'react';

const RecruitmentProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Define Requirements',
      description: 'We understand your hiring and workforce needs.',
      imageSrc: '/images/howwework1.png',
      alt: 'Team meeting discussing requirements',
    },
    {
      id: 2,
      title: 'Source & Screen Talent',
      description: 'We find and verify the right candidates.',
      imageSrc: '/images/howwework2.png',
      alt: 'Person video conferencing with a candidate',
    },
    {
      id: 3,
      title: 'Deploy & Manage',
      description: 'We match and deploy talent quickly and efficiently.',
      imageSrc: '/images/howwework3.png',
      alt: 'Handshake after an interview',
    },
    {
      id: 4,
      title: 'Support & Optimize',
      description: 'We offer ongoing HR and workforce support.',
      imageSrc: '/images/howwework4.png',
      alt: 'Person analyzing a data chart on a laptop',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-3">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Recruitment & Deployment Process
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-1/2 h-64">
                <img
                  src={step.imageSrc}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                />
              </div>

             {/* Content */}
<div className="w-1/2 p-5 pt-4 flex flex-col justify-start">
  <h3 className="text-lg font-bold text-gray-900 mb-2">
    {step.id}. {step.title}
  </h3>
  <p className="text-gray-600 text-sm leading-relaxed">
    {step.description}
  </p>
</div>

            </div>
          ))}
        </div>

        {/* CTA */}
       <div className="mt-16">
  <a
    href="#"
    className="inline-flex items-center gap-2
               border border-gray-300
               px-5 py-3
               rounded-lg
               text-base font-medium text-gray-900
               hover:border-gray-900
               hover:bg-gray-50
               transition-all duration-300
               group"
  >
    Learn More About Our Process
    <svg
  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M13 7l5 5m0 0l-5 5m5-5H6"
  />
</svg>

          </a>
        </div>

      </div>
    </section>
  );
};

export default RecruitmentProcess;
