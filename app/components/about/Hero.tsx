import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] w-full flex items-start justify-center
                 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero1.png"
          alt="Manpower hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto -mt-2 sm:-mt-4">
        <h1 className="text-white font-extrabold leading-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Empowering <br />
          Businesses with <br />
          Strategic Manpower <br />
          Solutions
        </h1>

        <p className="text-gray-200 mt-5 sm:mt-6
                      text-lg sm:text-xl md:text-2xl
                      max-w-2xl mx-auto">
          We are a modern manpower and workforce solutions company helping organizations
          find trusted talent and build stronger teams for long-term growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row
                        items-center justify-center gap-4 sm:gap-3
                        w-full max-w-lg mx-auto">
          <Link href="/landing-page" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto
                               bg-[#FF6A00] hover:bg-[#e65c00]
                               text-white px-8 py-4
                               rounded-md font-semibold
                               text-lg transition">
              Learn more
            </button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto
                               bg-white/20 hover:bg-white/30
                               text-white border border-white
                               px-8 py-4 rounded-md
                               font-semibold text-lg transition">
              Contact Our Team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
