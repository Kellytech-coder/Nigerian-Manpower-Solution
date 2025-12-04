// app/components/landing-page/CTA.tsx
import Image from 'next/image';
import Container from './Container';
import FadeInWrapper from './FadeInOnScroll';

export default function CTA() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <Container className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <FadeInWrapper className="flex items-center py-16 lg:py-20 px-4 lg:px-0 lg:pr-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Ready to transform your workforce strategy?
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed">
                Connect with our expert team and unlock precision manpower solutions
              </p>

              {/* CTA Buttons */}
              <FadeInWrapper className="mt-8 sm:mt-10 flex gap-4">
                <a
                  href="#request"
                  className="inline-flex items-center px-2 sm:px-3 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Request manpower
                </a>

                <a
                  href="#learn-more"
                  className="inline-flex items-center px-2 sm:px-3 py-3 sm:py-4 bg-white border text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition"
                >
                  Learn more
                </a>
              </FadeInWrapper>
            </div>
          </FadeInWrapper>

          {/* Right Image */}
          <FadeInWrapper className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/PlaceholderImage10.png"
              alt="Professional construction worker"
              fill
              className="object-cover"
              priority
            />
          </FadeInWrapper>
        </div>
      </Container>
    </section>
  );
}
