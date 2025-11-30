import Container from './Container';

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-20 lg:py-28">

        {/* Left: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
            Powering<br />
            Nigeria’s<br />
            businesses<br />
            with expert<br />
            workforce<br />
            solutions
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
            We deliver skilled, reliable manpower across critical industries.<br />
            Our precision staffing transforms enterprise performance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#request"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Request manpower
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition"
            >
              Learn more
            </a>
          </div>
        </div>

{/* Right: Stacked Images */}
<div className="relative h-[550px] lg:h-[700px] w-full">

  {/* Back Image — Big image (Man) */}
  <div className="absolute right-27 top-0 w-[70%] lg:w-[90%] xl:w-[65%] rounded-3xl overflow-hidden shadow-2xl z-10">
    <img
      src="/images/PlaceholderImage2.png"
      alt="Male worker"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Front Image — Smaller image (Woman) */}
  <div className="absolute left-0 bottom-10 lg:bottom-65 w-[50%] lg:w-[45%] xl:w-[40%] rounded-3xl overflow-hidden shadow-xl z-20">
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
