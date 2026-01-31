import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, CheckCircle, Clock, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../mock/portfolioData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Live':
        return <CheckCircle className="w-4 h-4" />;
      case 'In Progress':
        return <Clock className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'In Progress':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-cyan-100 text-cyan-700 border-cyan-200';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, API integration, and scalable solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 delay-${index * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-slate-200 hover:border-cyan-300 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-100 via-teal-50 to-emerald-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/20">{project.title.charAt(0)}</div>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {getStatusIcon(project.status)}
                      {project.status}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cyan-600 font-medium mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-700 mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-cyan-600 mt-1">•</span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-medium border border-slate-200">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <div className="mb-4 p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                      <p className="text-sm text-cyan-800 font-medium">
                        <Zap className="w-4 h-4 inline mr-1" />
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.link && (
                      <Button
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-300 hover:bg-slate-50"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {!project.link && !project.github && (
                      <Button variant="outline" className="flex-1" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
