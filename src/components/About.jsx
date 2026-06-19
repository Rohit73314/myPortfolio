import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, Award, Users, Zap } from "lucide-react";
import { about } from "../mock/portfolioData";
import AnimatedCounter from "./AnimatedCounter";

const statIcons = { 0: Award, 1: CheckCircle2, 2: Zap, 3: Users };

const About = () => {
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
      id="about"
      ref={sectionRef}
      data-testid="about-section"
      className="py-24 bg-white dark:bg-[#0a0a0f] relative"
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
              01 — About me 
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            More than just a developer —{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              a problem solver.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.description}
            </p>

            <div className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-slate-700 dark:text-slate-200 font-medium mb-3">
                Core Competencies:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "React",
                  "Next.js",
                  "PHP",
                  "MySQL",
                  "REST APIs",
                  "Razorpay",
                  "WhatsApp API",
                  "AI Integration"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-500/20 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-5">
              {about.stats.map((stat, index) => {
                const Icon = statIcons[index] || Award;
                return (
                  <div
                    key={stat.label}
                    className="group relative p-6 rounded-2xl bg-slate-50/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-25 transition-opacity">
                      <Icon className="w-12 h-12 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="relative">
                      <div className="font-display text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-300 dark:to-teal-300 bg-clip-text text-transparent mb-2">
                        <AnimatedCounter end={stat.value} duration={2000} />
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 dark:from-cyan-500/20 dark:via-teal-500/15 dark:to-emerald-500/15 dark:border dark:border-cyan-400/20 text-white">
              <h3 className="font-display text-2xl font-bold mb-2 dark:text-white">
                Looking for opportunities
              </h3>
              <p className="text-cyan-50 dark:text-slate-200 leading-relaxed">
                Open to exciting full-stack and backend development roles where I can contribute to
                building impactful products and grow with a talented team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
