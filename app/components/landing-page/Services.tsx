// app/components/landing-page/Services.tsx
import Image from 'next/image';
import Container from './Container';
import FadeInWrapper from './FadeInOnScroll';

export default function Services() {
  const services = [
    {
      category: 'Skilled labor',
      title: 'Professional talent deployment',
      description: 'Precision-matched experts for complex industrial requirements',
      image: '/images/service1.png',
    },
    {
      category: 'Temporary staffing',
      title: 'Flexible workforce',
      description: 'Rapid personnel allocation for short-term and dynamic project needs',
      image: '/images/service2.png',
    },
    {
      category: 'Facility management',
      title: 'Comprehensive support',
      description: 'End-to-end workforce and operational management for enterprise environments',
      image: '/images/service3.png',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <FadeInWrapper className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
          <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest">
            Solutions
          </p>
          <h2 className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Our comprehensive manpower services
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored workforce solutions for Nigeria's most demanding industries
          </p>
        </FadeInWrapper>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* First Card - Spans 2 Columns on Desktop Only */}
          <FadeInWrapper className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-300">
            {/* Text Left Half */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <span className="text-xs md:text-sm font-bold text-amber-500 uppercase tracking-wider">
                  {services[0].category}
                </span>
                <h3 className="mt-3 md:mt-4 text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  {services[0].title}
                </h3>
                <p className="mt-4 md:mt-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  {services[0].description}
                </p>
              </div>
              
              <button className="mt-8 md:mt-10 flex w-fit items-center gap-2 md:gap-3 rounded-full bg-amber-500 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white shadow-lg transition hover:bg-amber-600">
                Explore
                <span className="text-lg md:text-xl">→</span>
              </button>
            </div>

            {/* Image Right Half - Full Height */}
            <div className="relative w-full lg:w-1/2 h-64 md:h-80 lg:h-auto lg:min-h-[400px] order-1 lg:order-2">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeInWrapper>

          {/* Second Card - Portrait */}
          {services.slice(1).map((service, idx) => (
            <FadeInWrapper
              key={idx}
              className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Text Top */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-grow">
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="mt-2 md:mt-3 text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 flex-grow">
                  {service.description}
                </p>
                
                <a
                  href="#"
                  className="mt-6 md:mt-8 inline-flex items-center gap-2 text-sm md:text-base text-amber-500 font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore →
                </a>
              </div>

              {/* Image Bottom */}
              <div className="relative h-52 md:h-64 lg:h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </FadeInWrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}
