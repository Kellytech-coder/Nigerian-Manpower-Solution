// app/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.jpg')", // replace with your actual image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Start Your Career With Us
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          We connect hardworking professionals with reliable jobs in
          manufacturing, construction, logistics, telecoms, renewable energy,
          and more.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/positions"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            View Open Positions
          </a>
          <a
            href="/submit-cv"
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-md transition"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </section>
  );
}
