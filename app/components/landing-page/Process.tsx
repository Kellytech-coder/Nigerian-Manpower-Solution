// app/components/landing-page/Process.tsx
import Image from 'next/image';
import Container from './Container';

export default function Process() {
  const steps = [
    {
      category: 'Request',
      title: 'Initial consultation',
      description: 'Understand your specific workforce requirements',
      image: '/images/mds1.png',
      link: 'Details',
    },
    {
      category: 'Assessment',
      title: 'Workforce profiling',
      description: 'Identify precise skill sets and industry-specific needs',
      image: '/images/mds2.png',
      link: 'Match',
    },
    {
      category: 'Candidate selection',
      title: 'Rigorous screening and skills verification',
      description: 'Precision matching of talent',
      image: '/images/mds3.png',
      link: 'Deploy',
    },
    {
      category: 'Workforce integration',
      title: 'Smooth onboarding and performance monitoring',
      description: 'Continuous support',
      image: '/images/mds4.png',
      link: 'Follow-up',
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 px-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Process
          </p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Our manpower deployment strategy
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Seamless workforce solutions from initial contact to final placement
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - 2x2 Grid of Small Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Top */}
                <div className="relative h-48">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Bottom */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {step.category}
                  </span>
                  <h3 className="mt-2 text-xl font-black text-gray-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 flex-grow">
                    {step.description}
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-gray-900 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    {step.link}
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Large Featured Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            {/* Image Top */}
            <div className="relative h-64 lg:h-80">
              <Image
                src="/images/mds5.png"
                alt="Long-term workforce optimization"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Bottom */}
            <div className="p-8 lg:p-10 flex flex-col flex-grow">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Performance evaluation
              </span>
              <h3 className="mt-4 text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                Long-term workforce optimization
              </h3>
              <p className="mt-6 text-base lg:text-lg text-gray-600 flex-grow">
                Ongoing strategic workforce management and continuous improvement
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-8 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300">
                  Request
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-gray-900 hover:gap-4 transition-all duration-300"
                >
                  Consult
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}