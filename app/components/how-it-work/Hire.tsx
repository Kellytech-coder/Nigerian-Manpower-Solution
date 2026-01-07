import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HireSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[500px] overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 bg-[#051129] px-6 sm:px-12 md:px-20 py-12 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug sm:leading-tight">
          Ready to Hire <br /> Manpower?
        </h2>
        
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-full sm:max-w-lg leading-relaxed">
          Get qualified, reliable, and compliant workers for your business. 
          Quickly and professionally!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/request" passHref>
            <button className="w-full sm:w-auto bg-amber-500 hover:bg-[#e65100] text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold transition-all transform hover:scale-105">
              Request Manpower Now
            </button>
          </Link>
          
          <Link href="/book-call" passHref>
            <button className="w-full sm:w-auto bg-transparent border border-gray-600 hover:border-gray-400 text-white px-6 sm:px-8 py-3.5 rounded-lg font-bold transition-all">
              Book a 15-Minute Call
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <Image
          src="/images/howitwork-cta.png"
          alt="Professional handshake and hiring"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default HireSection;
