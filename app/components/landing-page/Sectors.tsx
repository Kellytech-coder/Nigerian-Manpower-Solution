// app/components/landing-page/Sectors.tsx
import Image from 'next/image';
import Container from './Container';

export default function Sectors() {
  const sectors = [
    {
      category: 'Construction',
      title: 'Heavy-duty workforce for infrastructure development',
      description: 'Skilled technicians and project-specific personnel',
      image: '/images/placeholderImage7.png',
    },
    {
      category: 'Oil & gas',
      title: 'Technical expertise for energy sector challenges',
      description: 'Specialized professionals meeting rigorous industry standards',
      image: '/images/placeholderImage8.png',
    },
    {
      category: 'Manufacturing',
      title: 'Precision workforce for industrial production',
      description: 'Skilled operators ensuring operational excellence and efficiency',
      image: '/images/placeholderImage9.png',
    },
  ];

  return (
    <section id="sectors" className="bg-slate-900 py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4">
          <p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-widest">
            Industries
          </p>
          <h2 className="mt-2 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-snug sm:leading-tight lg:leading-tight">
            Powering diverse Nigerian sectors
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Specialized manpower solutions for complex industrial environments
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {sectors.map((sector, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer h-[420px] sm:h-[480px] lg:h-[550px]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                  {sector.category}
                </span>
                <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug sm:leading-tight">
                  {sector.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base lg:text-base text-white/80 leading-relaxed">
                  {sector.description}
                </p>

                {/* Explore Link */}
                <a
                  href="#"
                  className="mt-4 sm:mt-6 inline-flex items-center gap-1 sm:gap-2 text-white font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                >
                  Explore
                  <span className="text-base sm:text-lg">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
