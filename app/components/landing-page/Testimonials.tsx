// app/components/landing-page/Testimonials.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './Container';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: 'Their technical team transformed our entire operational efficiency',
      author: 'Michael Okonkwo',
      role: 'CEO, Delta Engineering',
      image: '/images/testimonial-1.jpg',
      rating: 5,
    },
    {
      quote: 'Unparalleled professionalism and rapid deployment capabilities',
      author: 'Sarah Ahmed',
      role: 'HR Director, Gulf Oil',
      image: '/images/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: 'Consistently delivers top-tier talent across complex projects',
      author: 'Emmanuel Nwankwo',
      role: 'Operations Manager, Lagos Manufacturing',
      image: '/images/testimonial-3.jpg',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // MOBILE/TABLET: show only the active testimonial
  // DESKTOP (lg): show active + next 2
  const visibleTestimonials =
    typeof window !== 'undefined' && window.innerWidth >= 1024
      ? [
          testimonials[currentSlide],
          testimonials[(currentSlide + 1) % testimonials.length],
          testimonials[(currentSlide + 2) % testimonials.length],
        ]
      : [testimonials[currentSlide]];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 px-4">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Client success stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real impact from our precision workforce solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <article
                key={`${currentSlide}-${idx}`}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-900 text-lg leading-relaxed flex-grow">
                  {testimonial.quote}
                </blockquote>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'bg-gray-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
