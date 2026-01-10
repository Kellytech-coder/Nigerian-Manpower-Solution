import React from 'react';
import Image from 'next/image';

const PrivacyHero = () => {
  return (
    <section className="relative h-[450px] w-full flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/privacy.png" // Ensure this image is in your /public folder
          alt="Professional team meeting"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-medium">
            Last Updated: January 6, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;