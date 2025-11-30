import Container from './Container';

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-16 sm:py-20 lg:py-28">

        {/* Left: Text Content */}
        <div className="max-w-2xl px-4 sm:px-0">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            Powering<br />
            Nigeria’s<br />
            businesses<br />
            with expert<br />
            workforce<br />
            solutions
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            We deliver skilled, reliable manpower across critical industries.<br />
            Our precision staffing transforms enterprise performance.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <a
              href="#request"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Request manpower
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right: Stacked Images */}
        <div className="relative h-[380px] sm:h-[500px] md:h-[550px] lg:h-[700px] w-full">

          {/* Back Image — Big image */}
          <div className="absolute right-2 sm:right-6 top-0 w-[75%] sm:w-[65%] md:w-[60%] lg:w-[90%] xl:w-[65%] rounded-3xl overflow-hidden shadow-2xl z-10">
            <img
              src="/images/PlaceholderImage2.png"
              alt="Male worker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front Image — Smaller image */}
          <div className="absolute left-2 sm:left-15 bottom-30 sm:bottom-10 lg:bottom-68 w-[45%] sm:w-[40%] md:w-[38%] lg:w-[45%] xl:w-[40%] rounded-3xl overflow-hidden shadow-xl z-20">
            <img
              src="/images/PlaceholderImage1.png"
              alt="Female engineer"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </Container>
    </section>
  );
}
