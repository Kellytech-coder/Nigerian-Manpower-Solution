// app/components/landing-page/Logos.tsx
import Image from 'next/image';
import Container from './Container';

export default function Logos() {
  // Duplicate logos for seamless scrolling effect
  const logos = [
    { name: 'Webflow', src: '/images/logo-webflow.svg' },
    { name: 'Relume', src: '/images/logo-relume.svg' },
    { name: 'Webflow', src: '/images/logo-webflow.svg' },
    { name: 'Relume', src: '/images/logo-relume.svg' },
    { name: 'Webflow', src: '/images/logo-webflow.svg' },
    { name: 'Relume', src: '/images/logo-relume.svg' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-amber-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Trusted by leading Nigerian enterprises
          </h2>
        </div>

        {/* Logos Container with Overflow Hidden */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amber-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Logos */}
          <div className="flex animate-infinite-scroll hover:pause-animation">
            {/* First set of logos */}
            {logos.map((logo, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-8 lg:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity brightness-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-8 lg:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}