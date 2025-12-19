import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/industryhero.png')`, // Replace with your actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay to match Figma depth */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Industries We Serve
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          We provide skilled, semi-skilled, and unskilled workforce support to help companies 
          operate efficiently, reduce hiring overhead, and scale with confidence.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-200">
            Request Manpower
          </button>
          
          <button className="border border-white/60 hover:border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-md transition-all duration-200">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;