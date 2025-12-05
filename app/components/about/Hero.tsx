import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero1.png" // <-- Replace with your actual image
          alt="Manpower hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative text-center max-w-4xl px-6">
        <h1 className="text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
          Empowering <br /> Businesses with <br /> Strategic Manpower <br /> Solutions
        </h1>

        <p className="text-gray-200 mt-6 text-base md:text-lg max-w-2xl mx-auto">
          We are a modern manpower and workforce solutions company helping organizations
          find trusted talent, and build stronger teams for long-term growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <button className="bg-[#FF6A00] hover:bg-[#e65c00] text-white px-6 py-3 rounded-md font-medium text-sm md:text-base">
            Learn more
          </button>

          <button className="bg-white/20 hover:bg-white/30 text-white border border-white px-6 py-3 rounded-md font-medium text-sm md:text-base">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
