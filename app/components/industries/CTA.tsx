import React from "react";
import Image from "next/image";

const HeroCTA = () => {
  return (
    <section className="w-full min-h-[560px] flex flex-col md:flex-row">

      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-[#071a33] flex items-center">
        <div className="px-8 md:px-14 lg:px-20 py-16 max-w-lg">
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.15]">
            Hire Trusted Manpower <br />
            for Your Industry
          </h1>

          <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-md">
            Whether you need a small team or a large workforce, we provide
            reliable manpower tailored to your operation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-7 py-3 rounded-md font-semibold transition-colors">
              Request manpower
            </button>

            <button className="border border-white/30 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/10 transition-all">
              Speak with an Expert
            </button>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/2 min-h-[420px] md:min-h-full">
        <Image
          src="/images/services-hero.png" // replace with actual image
          alt="Business professionals shaking hands"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
};

export default HeroCTA;
