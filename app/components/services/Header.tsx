"use client";

import Link from "next/link";

export default function Header() {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex
        items-center
        justify-center
        text-center
        px-4
        pt-28
      "
      style={{
        backgroundImage: "url('/images/services1.png')", // put image in /public/images
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Our Manpower & <br /> Workforce Solutions
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200">
          From recruitment to workforce management, we deliver end-to-end
          manpower services that help businesses scale efficiently and
          sustainably.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/request-manpower"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Request Manpower
          </Link>

          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
