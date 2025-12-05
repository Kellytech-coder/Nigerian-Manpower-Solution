"use client";
import Image from "next/image";

export default function WorkforcePromo() {
  return (
    <section className="relative bg-[#06142A]">

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* LEFT TEXT SIDE */}
        <div className="text-white max-w-xl mx-auto px-6 md:px-12 py-20 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Let’s Build Your<br />Workforce Together
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Whether you need permanent staff, contract workers, or 
            industry-specific talent, we are here to support your growth 
            with the right manpower.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-7 rounded-full transition-all">
              Request manpower
            </button>

            <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-2.5 px-7 rounded-full transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE — full height */}
        <div className="relative h-[300px] lg:h-auto">
          <Image
            src="/images/about-workforce.png"
            alt="Two people shaking hands in a business agreement"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
