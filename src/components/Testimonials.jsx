import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { testimonials } from '../mock/portfolioData';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const currentRef = sectionRef.current;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What People <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative transition-all duration-1000 delay-200 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-32 h-32 text-cyan-600" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                "{currentTestimonial.content}"
              </p>

              {/* Rating Stars */}
              <div className="flex justify-center md:justify-start gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-gradient-to-r from-cyan-600 to-teal-600'
                          : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;