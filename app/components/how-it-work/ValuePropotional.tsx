import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      id: 1,
      title: 'Reliable Workforce Supply',
      description:
        'Consistent and on-time manpower delivery for critical operations.',
    },
    {
      id: 2,
      title: 'Full HR Compliance',
      description:
        'NDPR, Pension, NSITF, HSE compliance all covered.',
    },
    {
      id: 3,
      title: 'Zero Hiring Stress',
      description:
        'We handle sourcing, screening, documentation, and workforce management.',
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-700 mb-4">
              Our value proposition
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-14">
              What You Get When <br /> You Work With Us
            </h2>

            <div className="space-y-10 mb-14">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className={`pb-6 ${
                    index !== benefits.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.id}. {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-amber-500 hover:bg-[#e65100] text-white px-7 py-3 rounded-md font-semibold transition-colors">
                Get in Touch
              </button>

              <button className="flex items-center gap-1 text-gray-900 font-semibold hover:gap-2 transition-all">
                See Our Certifications
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[460px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/howitwork-cta.png"
              alt="Smiling professional in meeting"
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

export default ValueProposition;
