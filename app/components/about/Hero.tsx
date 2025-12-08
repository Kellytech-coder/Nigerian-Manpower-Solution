import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero1.png" // Replace with your actual image
          alt="Manpower hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl px-4 sm:px-6 md:px-8">
        <h1 className="text-white font-bold leading-snug text-xl sm:text-2xl md:text-4xl lg:text-5xl">
          Empowering <br /> Businesses with <br /> Strategic Manpower <br /> Solutions
        </h1>

        <p className="text-gray-200 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          We are a modern manpower and workforce solutions company helping organizations
          find trusted talent, and build stronger teams for long-term growth.
        </p>

        {/* Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/landing-page">
            <button className="w-full sm:w-auto bg-[#FF6A00] hover:bg-[#e65c00] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm md:text-base transition">
              Learn more
            </button>
          </Link>

          <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white px-5 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm md:text-base transition">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
