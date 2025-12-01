// app/components/landing-page/CTA.tsx
import Image from 'next/image';
import Container from './Container';

export default function CTA() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <Container className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <div className="flex items-center py-16 lg:py-20 px-4 lg:px-0 lg:pr-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Ready to transform your workforce strategy?
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed">
                Connect with our expert team and unlock precision manpower solutions
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex  gap-4">
                <button className="px-8 py-4 rounded-full bg-amber-500 text-white font-semibold text-base lg:text-lg hover:bg-amber-600 transition-colors duration-300 shadow-lg">
                  Request manpower
                </button>
                <button className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base lg:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-auto">
            <Image
              src="/images/PlaceholderImage10.png"
              alt="Professional construction worker"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}