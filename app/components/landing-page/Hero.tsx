import Container from './Container';
import FadeInWrapper from './FadeInOnScroll';

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-16 sm:py-20 lg:py-28">

        {/* Left: Text Content */}
        <FadeInWrapper className="max-w-2xl px-4 sm:px-0">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-tight">
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

          <div className="mt-8 sm:mt-10 flex gap-4">
            <a
              href="#request"
              className="inline-flex items-center px-2 sm:px-3 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Request manpower
            </a>

            <a
              href="#learn-more"
              className="inline-flex items-center px-2 sm:px-3 py-3 sm:py-4 bg-white border text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition"
            >
              Learn more
            </a>
          </div>
        </FadeInWrapper>

        {/* Right: Images */}
        <FadeInWrapper className="relative h-[380px] sm:h-[500px] md:h-[550px] lg:h-[700px] w-full">
          <div className="absolute right-2 sm:right-6 top-0 w-[85%] sm:w-[75%] md:w-[70%] lg:w-full xl:w-[75%] overflow-hidden shadow-2xl">
            <img
              src="/images/PlaceholderImage2.png"
              alt="Male worker"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute left-2 sm:left-10 bottom-20 sm:bottom-10 lg:bottom-59 w-[45%] sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] overflow-hidden shadow-xl z-20">
            <img
              src="/images/PlaceholderImage1.png"
              alt="Female engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeInWrapper>

      </Container>
    </section>
  );
}
