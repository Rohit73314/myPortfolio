import React, { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { personalInfo } from "../mock/portfolioData";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL || ""}/RohitCv.pdf`;
    link.download = `Rohit-Resume-${new Date().getFullYear()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 dark:from-[#0a0a0f] dark:via-[#0c0d14] dark:to-[#0a0f14]"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-10 w-[28rem] h-[28rem] bg-cyan-300/30 dark:bg-cyan-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-40 -right-10 w-[28rem] h-[28rem] bg-orange-200/40 dark:bg-fuchsia-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-[28rem] h-[28rem] bg-emerald-200/40 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
        }}
      />

      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25">
        <div className="absolute top-[18%] left-[12%] font-mono text-xs text-slate-500 dark:text-cyan-300 animate-float">
          {"{ scalable: true }"}
        </div>
        <div className="absolute top-[28%] right-[14%] font-mono text-xs text-slate-500 dark:text-teal-300 animate-float animation-delay-2000">
          {"<Component />"}
        </div>
        <div className="absolute bottom-[22%] left-[20%] font-mono text-xs text-slate-500 dark:text-emerald-300 animate-float animation-delay-4000">
          {"async () => ✨"}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
            {/* Greeting */}
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-mono mb-3">
              Hello, I&apos;m
            </p>

            {/* Big name */}
            <h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-5">
              <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typing role */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 h-12 flex items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                <TypingAnimation
                  texts={[
                    "Full-Stack Developer",
                    "Laravel Developer",
                    "React / Next.js Developer"
                  ]}
                  typingSpeed={80}
                  deletingSpeed={45}
                  delayBetween={2200}
                />
              </span>
            </div>

            {/* One-line tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-7">
              Building scalable web applications with modern technologies.
            </p>

            {/* Quick info */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-9 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                data-testid="download-resume-btn"
                onClick={handleDownloadResume}
                className="group h-12 px-7 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                data-testid="hero-contact-btn"
                onClick={handleContactClick}
                variant="outline"
                className="group h-12 px-7 text-base font-semibold rounded-full border-2 border-slate-900 dark:border-white/30 text-slate-900 dark:text-white bg-transparent hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:scale-[1.02] transition-all duration-300"
              >
                Let&apos;s talk
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-3">
              <a
                data-testid="hero-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-cyan-400 hover:text-cyan-500 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                data-testid="hero-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-slate-900 dark:hover:border-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                data-testid="hero-email"
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-3 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-orange-400 hover:text-orange-500 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-500">
            scroll
          </span>
          <div className="w-5 h-9 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
