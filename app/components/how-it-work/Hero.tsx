import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] sm:h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/howitwork-hero.png"
          alt="Manpower Process Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 text-center text-white">
        {/* Heading */}
        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug sm:leading-tight">
          How Our Manpower <br /> Process Works
        </h1>
        
        {/* Subtext */}
        <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl font-light leading-relaxed sm:leading-relaxed opacity-90">
          From request to deployment, we streamline the entire manpower process 
          so your team gets qualified workers without operational delays.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="min-w-[200px] rounded-md bg-[#ff6f00] px-6 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#e65100]">
            Request Manpower
          </button>
          
          <button className="min-w-[200px] rounded-md border border-gray-400 bg-white/10 px-6 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
            Speak With Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
