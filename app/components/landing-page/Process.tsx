// app/components/landing-page/Process.tsx
import Image from 'next/image';
import Container from './Container';
import FadeInWrapper from './FadeInOnScroll';

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
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <FadeInWrapper className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
          <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">
            Process
          </p>
          <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-snug sm:leading-tight lg:leading-tight">
            Our manpower deployment strategy
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Seamless workforce solutions from initial contact to final placement
          </p>
        </FadeInWrapper>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Side - 2x2 Grid of Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <FadeInWrapper key={idx} className="bg-white rounded-2xl shadow-md sm:shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
                {/* Image Top */}
                <div className="relative h-40 sm:h-44 md:h-48">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                {/* Content Bottom */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <span className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {step.category}
                  </span>
                  <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl font-black text-gray-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 flex-grow leading-relaxed">
                    {step.description}
                  </p>

                  <a
                    href="#"
                    className="mt-2 sm:mt-4 inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-900 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    {step.link}
                    <span className="text-base sm:text-lg">→</span>
                  </a>
                </div>
              </FadeInWrapper>
            ))}
          </div>

          {/* Right Side - Large Featured Card */}
          <FadeInWrapper className="bg-white rounded-2xl shadow-md sm:shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 mt-6 lg:mt-0">
            {/* Image Top */}
            <div className="relative h-56 sm:h-64 lg:h-80">
              <Image
                src="/images/mds5.png"
                alt="Long-term workforce optimization"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            {/* Content Bottom */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-grow">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                Performance evaluation
              </span>
              <h3 className="mt-2 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug sm:leading-tight">
                Long-term workforce optimization
              </h3>
              <p className="mt-3 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 flex-grow leading-relaxed">
                Ongoing strategic workforce management and continuous improvement
              </p>

              <div className="mt-4 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors duration-300">
                  Request
                </button>
               <a
                  href="#"
                  className="inline-flex items-center gap-1 sm:gap-2 px-6 sm:px-8 py-2 sm:py-3 
                  font-semibold text-gray-900 
                  border 
                  rounded-xl"
                >
                  Consult
                  <span className="text-base gap-1 sm:gap-3 sm:text-lg">&gt;</span>
                </a>
              </div>
            </div>
          </FadeInWrapper>
        </div>
      </Container>
    </section>
  );
}
