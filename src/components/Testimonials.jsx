import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "../components/ui/button";
import { testimonials } from "../mock/portfolioData";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const current = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      data-testid="testimonials-section"
      className="py-8 bg-white dark:bg-[#0a0a0f]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              07 — Testimonials
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What People <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">Say</span>
          </h2>
        </div>

        {/* Card */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-white to-slate-50 dark:from-white/[0.04] dark:to-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl">
            <div className="absolute top-6 right-6 opacity-10 dark:opacity-20">
              <Quote className="w-28 h-28 text-cyan-500" />
            </div>

            <div className="relative">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white text-2xl font-display font-bold shadow-lg flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">{t.position}</p>
                </div>
              </div>

              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic mb-6 font-serif-accent">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      data-testid={`testimonial-dot-${idx}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-8 bg-gradient-to-r from-cyan-500 to-teal-500"
                          : "w-2 bg-slate-300 dark:bg-white/15 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    data-testid="testimonial-prev-btn"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentIndex(
                        (prev) => (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="rounded-full border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    data-testid="testimonial-next-btn"
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                    className="rounded-full border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400"
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
