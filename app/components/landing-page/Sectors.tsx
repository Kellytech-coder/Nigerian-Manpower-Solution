// app/components/landing-page/Sectors.tsx
import Image from 'next/image';
import Container from './Container';

export default function Sectors() {
  const sectors = [
    {
      category: 'Construction',
      title: 'Heavy-duty workforce for infrastructure development',
      description: 'Skilled technicians and project-specific personnel',
      image: '/images/sector-1.jpg',
    },
    {
      category: 'Oil & gas',
      title: 'Technical expertise for energy sector challenges',
      description: 'Specialized professionals meeting rigorous industry standards',
      image: '/images/sector-2.jpg',
    },
    {
      category: 'Manufacturing',
      title: 'Precision workforce for industrial production',
      description: 'Skilled operators ensuring operational excellence and efficiency',
      image: '/images/sector-3.jpg',
    },
  ];

  return (
    <section id="sectors" className="bg-slate-900 py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 px-4">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            Industries
          </p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-black text-white leading-tight">
            Powering diverse Nigerian sectors
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Specialized manpower solutions for complex industrial environments
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sector, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-3xl group cursor-pointer h-[500px] lg:h-[600px]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 lg:p-10 flex flex-col justify-end">
                <span className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-wider">
                  {sector.category}
                </span>
                <h3 className="mt-3 text-2xl lg:text-3xl font-black text-white leading-tight">
                  {sector.title}
                </h3>
                <p className="mt-4 text-base text-white/80 leading-relaxed">
                  {sector.description}
                </p>

                {/* Explore Link */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore
                  <span className="text-xl">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}