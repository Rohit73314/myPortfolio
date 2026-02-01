import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock/portfolioData';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = `${process.env.PUBLIC_URL}/RohitCv.pdf`;
  link.download = `Rohit-Resume-${new Date().getFullYear()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 font-mono text-sm text-slate-600 animate-float">
          {"{ code: 'clean' }"}
        </div>
        <div className="absolute top-1/3 right-1/4 font-mono text-sm text-slate-600 animate-float animation-delay-2000">
          {"<Component />"}
        </div>
        <div className="absolute bottom-1/4 left-1/3 font-mono text-sm text-slate-600 animate-float animation-delay-4000">
          {"function() { }"}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Greeting */}
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
            {personalInfo.name}
          </h1>

          {/* Role with gradient and typing animation */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-12">
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              <TypingAnimation
                texts={[
                  // 'Backend Developer',
                  'Full-Stack Web Developer',
                  'Laravel Expert',
                  'Next.js Developer',
                  'API Integration Specialist',
                  'Performance Optimizer'
                ]}
                typingSpeed={80}
                deletingSpeed={50}
                delayBetween={2500}
              />
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            {personalInfo.tagline}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-600" />
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
                onClick={handleDownloadResume}
                className="group bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume (PDF)
              </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              className="group border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-cyan-50"
            >
              <Linkedin className="w-5 h-5 text-cyan-600" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-slate-50"
            >
              <Github className="w-5 h-5 text-slate-800" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-orange-50"
            >
              <Mail className="w-5 h-5 text-orange-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
