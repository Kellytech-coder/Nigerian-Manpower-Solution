import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero1.png"
          alt="Manpower hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h1 className="text-white font-bold leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Empowering <br /> Businesses with <br /> Strategic Manpower <br /> Solutions
        </h1>

        <p className="text-gray-200 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl md:max-w-2xl mx-auto">
          We are a modern manpower and workforce solutions company helping organizations
          find trusted talent, and build stronger teams for long-term growth.
        </p>

        {/* Buttons */}
       {/* Buttons */}
<div className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-3 sm:gap-5">
  <Link href="/landing-page">
    <button className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e65c00] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-md font-medium text-base md:text-lg transition">
      Learn more
    </button>
  </Link>

  <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white px-6 py-3 sm:px-8 sm:py-3 rounded-md font-medium text-base md:text-lg transition">
    Contact Our Team
  </button>
</div>

      </div>
    </section>
  );
}
