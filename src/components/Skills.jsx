import React, { useEffect, useRef, useState } from 'react';
import { Server, Code, Database, Wrench, Award } from 'lucide-react';
import { skills } from '../mock/portfolioData';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);

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

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (isVisible) {
      // Animate skills with stagger effect
      Object.keys(skills).forEach((category, catIndex) => {
        skills[category].forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set([...prev, `${category}-${skillIndex}`]));
          }, (catIndex * 200) + (skillIndex * 100));
        });
      });
    }
  }, [isVisible]);

  const categoryIcons = {
    backend: Server,
    frontend: Code,
    database: Database,
    tools: Wrench,
    other: Award
  };

  const categoryColors = {
    backend: 'from-cyan-600 to-teal-600',
    frontend: 'from-teal-600 to-emerald-600',
    database: 'from-emerald-600 to-cyan-600',
    tools: 'from-orange-500 to-orange-600',
    other: 'from-slate-600 to-slate-700'
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const IconComponent = categoryIcons[category];
            const gradientColor = categoryColors[category];

            return (
              <div
                key={category}
                className={`transition-all duration-1000 delay-${catIndex * 100} transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-cyan-300 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-r ${gradientColor} rounded-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 capitalize">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillList.map((skill, index) => {
                      const isAnimated = animatedSkills.has(`${category}-${index}`);
                      
                      return (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700 group-hover:text-cyan-600 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-sm font-semibold text-slate-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${gradientColor} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : '0%'
                              }}
                            ></div>
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

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <p className="text-slate-600 mb-2">
              <span className="font-semibold text-slate-900">Always Learning:</span> Continuously exploring new technologies and best practices
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 rounded-full text-sm font-medium">
                Clean Code
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 rounded-full text-sm font-medium">
                Best Practices
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-cyan-50 text-emerald-700 rounded-full text-sm font-medium">
                Scalable Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
