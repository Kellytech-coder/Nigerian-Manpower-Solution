import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactus1.png" // Replace with your image in the public folder
          alt="Customer support representative"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
          Get in Touch With Us
        </h1>
        
        <p className="mb-10 text-lg md:text-xl font-medium leading-relaxed opacity-90 mx-auto max-w-2xl">
          We&apos;re here to support your manpower needs and answer all inquires. 
          Reach out to us anytime.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-md bg-amber-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-amber-600">
            Request Manpower
          </button>
          
          <button className="rounded-md border border-gray-400 bg-white/5 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Speak With Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;