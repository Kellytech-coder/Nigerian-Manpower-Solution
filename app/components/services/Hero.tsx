import React from 'react';
// Assuming Next.js Image component for optimization
// import Image from 'next/image'; 

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px]">
      
      {/* Left Content Column (Dark Blue Background) */}
      <div className="bg-[#121827] text-white p-8 md:p-16 lg:w-1/2 flex items-center">
        <div className="max-w-xl">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Get the Right Talent for Your Business
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-10">
            From specialized professionals to large workforce teams, we're here to provide reliable and efficient manpower support.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Primary Button (Orange) */}
            <a
              href="#" // Replace with actual link
              className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-center"
            >
              Request manpower
            </a>
            
            {/* Secondary Button (Outlined/Text) */}
            <a
              href="#" // Replace with actual link
              className="px-8 py-3 border border-white hover:bg-white hover:text-[#121827] text-white font-medium rounded-lg transition duration-300 text-center"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {/* Right Image Column (Covers the other 50% of the screen) */}
      <div className="lg:w-1/2 w-full h-80 lg:h-auto relative">
        {/* Placeholder for the image of the handshake */}
        <img
          src="/images/services-hero.png" // **Update this path to your image**
          alt="Two professionals shaking hands, securing a deal or placement."
          className="w-full h-full object-cover"
        />
        {/* If using Next.js <Image> component, use:
        <Image
          src="/images/right-talent-handshake.jpg"
          alt="Two professionals shaking hands, securing a deal or placement."
          layout="fill"
          objectFit="cover"
        />
        */}
      </div>
    </div>
  );
};

export default HeroSection;