import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Ganga Institute of Technology and Management",
    location: "Delhi, India",
    duration: "September 2022 – July 2024",
    cgpa: "7.20 / 10.0",
    highlights: [
      "Focused on advanced software development, cloud computing and data engineering",
      "Completed industry-relevant projects in web technologies and database systems",
      "Developed strong problem-solving skills through algorithm design and system analysis"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ganga Institute of Technology and Management",
    location: "Delhi, India",
    duration: "August 2019 – July 2022",
    cgpa: "7.53 / 10.0",
    highlights: [
      "Built strong foundation in programming, web development and database management",
      "Learned core languages: C, C++, Java, Python, JavaScript",
      "Hands-on experience with HTML, CSS, PHP, MySQL and software engineering principles"
    ]
  }
];

const Education = () => {
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
      id="education"
      ref={sectionRef}
      data-testid="education-section"
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
              02 — Education
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.00]">
            Academic{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              foundation.
            </span>
          </h2>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built strong fundamentals in computer applications and software development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`group transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-full p-7 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-3 -left-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                <div className="pl-12">
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-cyan-600 dark:text-cyan-400 font-medium text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {edu.institution}, {edu.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
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
