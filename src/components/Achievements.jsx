import React, { useEffect, useRef, useState } from "react";
import { Award, Trophy, Zap, Target, Code, Users } from "lucide-react";
import { achievements } from "../mock/portfolioData";

const icons = [Trophy, Award, Zap, Target, Code, Users];
const colors = [
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-teal-500",
  "from-orange-500 to-rose-500",
  "from-emerald-500 to-green-500",
  "from-sky-500 to-cyan-500",
  "from-fuchsia-500 to-pink-500"
];

const Achievements = () => {
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
      id="achievements"
      ref={sectionRef}
      data-testid="achievements-section"
      className="py-8 bg-slate-50/60 dark:bg-[#0c0d14]"
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
              06 — Achievements
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Milestones &amp;{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              recognition.
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            const gradient = colors[index % colors.length];
            return (
              <div
                key={achievement.id}
                className={`group transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden">
                  <div className="relative mb-4">
                    <div
                      className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-mono font-bold shadow">
                      {achievement.year}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-200/30 to-teal-200/20 dark:from-cyan-500/10 dark:to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
