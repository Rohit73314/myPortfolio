import React, { useEffect, useRef, useState } from "react";
import { Server, Code, Database, Wrench, Award } from "lucide-react";
import { skills } from "../mock/portfolioData";

const categoryIcons = {
  backend: Server,
  frontend: Code,
  database: Database,
  tools: Wrench,
  other: Award
};

const categoryColors = {
  backend: "from-cyan-500 to-teal-500",
  frontend: "from-teal-500 to-emerald-500",
  database: "from-emerald-500 to-cyan-500",
  tools: "from-orange-500 to-amber-500",
  other: "from-fuchsia-500 to-rose-500"
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animated, setAnimated] = useState(new Set());
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
    if (!isVisible) return;
    Object.keys(skills).forEach((category, catIdx) => {
      skills[category].forEach((_, skillIdx) => {
        setTimeout(() => {
          setAnimated((prev) => new Set([...prev, `${category}-${skillIdx}`]));
        }, catIdx * 150 + skillIdx * 80);
      });
    });
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      data-testid="skills-section"
      className="py-8 bg-white dark:bg-[#0a0a0f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/40" />
            <span className="text-sm sm:text-base font-mono font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              05 — Technical Skills
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Technical{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              toolbox.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const Icon = categoryIcons[category];
            const gradient = categoryColors[category];
            return (
              <div
                key={category}
                className={`transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${catIndex * 100}ms` }}
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white capitalize">
                      {category}
                    </h3>
                  </div>
                  <div className="space-y-3.5">
                    {skillList.map((skill, idx) => {
                      const isAnim = animated.has(`${category}-${idx}`);
                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {skill.name}
                            </span>
                            <span className="text-xs font-mono text-slate-500 dark:text-slate-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
                              style={{ width: isAnim ? `${skill.level}%` : "0%" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 rounded-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
            <span className="text-sm text-slate-600 dark:text-slate-400">Always learning:</span>
            {["Clean Code", "Best Practices", "Scalable Architecture", "AI Integration"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
