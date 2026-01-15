import React from 'react';
import Image from 'next/image';

const TermsOfServiceHero = () => {
  return (
    <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/terms2.png" // Replace with your actual image path from public folder
          alt="Hands filling out legal paperwork"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Text Legibility as seen in design */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Terms of Service
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl font-medium">
          Last Updated: January 6, 2026
        </p>
      </div>
    </section>
  );
};

export default TermsOfServiceHero;