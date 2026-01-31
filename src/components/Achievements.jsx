import React, { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Zap, Target, Code, Users } from 'lucide-react';
import { achievements } from '../mock/portfolioData';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const icons = [Trophy, Award, Zap, Target, Code, Users];
  const colors = [
    'from-yellow-500 to-orange-500',
    'from-cyan-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-emerald-500 to-green-500',
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500'
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements & <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey as a developer.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = icons[index % icons.length];
            const colorClass = colors[index % colors.length];

            return (
              <div
                key={achievement.id}
                className={`group transition-all duration-1000 delay-${index * 100} transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="relative h-full bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Icon Badge */}
                  <div className="relative mb-4">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${colorClass} rounded-xl shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Year Badge */}
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold shadow-lg">
                      {achievement.year}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-tl-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
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