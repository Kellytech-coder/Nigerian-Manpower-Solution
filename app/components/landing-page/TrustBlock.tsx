// app/components/landing-page/TrustBlock.tsx
import Image from 'next/image';
import { Users, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import Container from './Container';

export default function TrustBlock() {
  const features = [
    {
      icon: Users,
      title: 'Trusted workforce solutions',
      description: 'Streamline your enterprise performance with compliant, reliable manpower strategies',
    },
    {
      icon: ArrowRightLeft,
      title: 'Fast deployment',
      description: 'Rapid personnel allocation for urgent business needs',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise trust',
      description: 'Proven track record of delivering high-quality workforce solutions across critical industries',
    },
  ];

  return (
    <section className="bg-amber-50 py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Left */}
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/trust.jpg"
              alt="Trusted workforce professional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Right */}
          <div className="space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl lg:text-2xl font-black text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300">
                Learn more
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 font-semibold text-gray-900 hover:gap-4 transition-all duration-300"
              >
                Contact
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}