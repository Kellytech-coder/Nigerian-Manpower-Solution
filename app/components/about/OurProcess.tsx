import React from 'react';

const processSteps = [
  {
    title: 'Understanding Your Needs',
    description: 'We analyze your manpower requirements and job specifications.',
    imageAlt: 'Discussion between two professionals',
    imageSrc: '/images/about-ourprocess1.png',
  },
  {
    title: 'Candidate Sourcing & Screening',
    description: 'We search, verify, and shortlist the most qualified candidates.',
    imageAlt: 'Video interview on laptop',
    imageSrc: '/images/about-ourprocess2.png',
  },
  {
    title: 'Matching & Deployment',
    description: 'We align the right talent to your business needs.',
    imageAlt: 'Professional conversation',
    imageSrc: '/images/about-ourprocess3.png',
  },
  {
    title: 'Continuous Support',
    description: 'We provide post-deployment monitoring and workforce management.',
    imageAlt: 'Handshake in business setting',
    imageSrc: '/images/about-ourprocess4.png',
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Process</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Our Approach to Manpower Delivery</p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-full sm:w-64"
          >
            <img
              src={step.imageSrc}
              alt={step.imageAlt}
              className="w-full h-36 sm:h-40 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-md sm:text-lg font-semibold text-gray-700 mb-1">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 text-center sm:text-left">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
          See Full How It Works
        </button>
      </div>
    </section>
  );
};

export default OurProcess;
