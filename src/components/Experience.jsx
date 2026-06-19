import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experience } from "../mock/portfolioData";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      data-testid="experience-section"
      className="py-24 bg-white dark:bg-[#0a0a0f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="text-sm sm:text-base font-mono font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              03 — Work Experience
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Where I&apos;ve{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              shipped.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-teal-500/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`md:flex items-stretch ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Card */}
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="group p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300 font-semibold">
                          {exp.type}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 ring-4 ring-white dark:ring-[#0a0a0f]" />
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
