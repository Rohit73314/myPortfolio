import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';
import { about } from '../mock/portfolioData';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
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

  const statIcons = {
    0: Award,
    1: CheckCircle2,
    2: Zap,
    3: Users
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.description}
            </p>

            <div className="space-y-3">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-slate-700 font-medium mb-3">Core Competencies:</p>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'React', 'Next.js', 'PHP', 'MySQL', 'REST APIs', 'Performance Optimization'].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-700 rounded-full text-sm font-medium hover:from-cyan-100 hover:to-teal-100 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, index) => {
                const IconComponent = statIcons[index] || Award;
                return (
                  <div
                    key={index}
                    className="group relative p-6 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg cursor-default"
                  >
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComponent className="w-12 h-12 text-cyan-600" />
                    </div>
                    <div className="relative">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                        <AnimatedCounter end={stat.value} duration={2000} suffix="" />
                      </div>
                      <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <div className="mt-6 p-6 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Looking for opportunities</h3>
              <p className="text-cyan-50">
                Open to exciting full-stack development roles where I can contribute to building impactful products and grow with a talented team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
