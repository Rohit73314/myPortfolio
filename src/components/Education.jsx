import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Your actual education data
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Ganga Institute of Technology and Management",
      location: "Delhi, India",
      duration: "September 2022 – July 2024",
      cgpa: "7.20 / 10.0",
      highlights: [
        "Focused on advanced software development, cloud computing, and data engineering",
        "Completed industry-relevant projects in web technologies and database systems",
        "Developed strong problem-solving skills through algorithm design and system analysis",
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Ganga Institute of Technology and Management",
      location: "Delhi, India",
      duration: "August 2019 – July 2022",
      cgpa: "7.53 / 10.0",
      highlights: [
        "Built strong foundation in programming, web development, and database management",
        "Learned core languages: C, C++, Java, Python, JavaScript",
        "Hands-on experience with HTML, CSS, PHP, MySQL, and basic software engineering principles",
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic foundation in computer applications and software development
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line (desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-200 to-teal-200 dark:from-cyan-900 dark:to-teal-900 rounded-full hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 md:mb-20 transition-all duration-1000 transform ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Education Card */}
                <div className="w-full md:w-5/12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-cyan-600 dark:text-cyan-400 font-medium">
                    <MapPin className="w-5 h-5" />
                    <span>{edu.institution}, {edu.location}</span>
                  </div>

                  <div className="mb-5">
                    <span className="inline-block bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;