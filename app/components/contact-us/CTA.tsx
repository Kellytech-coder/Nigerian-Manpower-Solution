import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HireWorkersCTA = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[500px] overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 bg-[#051129] p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Need to Hire Skilled <br className="hidden md:block" /> or Unskilled <br className="hidden md:block" /> Workers Fast?
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
          We deploy vetted manpower across multiple industries within <br className="hidden md:block" /> 24-72 hours.
        </p>

        {/* Action Button */}
        <div>
          <Link href="/request-manpower" passHref>
            <button className="bg-[#ff6f00] hover:bg-[#e65100] text-white px-8 py-3.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20">
              Request Manpower Now
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 relative min-h-[400px]">
        <Image
          src="/images/contactus-cta.png" // Replace with your actual image path
          alt="Skilled worker in safety gear"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HireWorkersCTA;