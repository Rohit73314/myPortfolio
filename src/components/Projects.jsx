import React, { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  Zap,
  ImageOff,
  MessageCircle,
  Sparkles,
  Plane,
  Hotel,
  BedDouble,
  IndianRupee
} from "lucide-react";
import { Button } from "../components/ui/button";
import { projects as rawProjects } from "../mock/portfolioData";

// Display order requested by Rohit:
// TravoByte → Karzandolls → Birthdaymasti → Metairfare → Punjab Aviation →
// Fareease → then the rest in original order.
const DISPLAY_ORDER = [
  "TravoByte",
  "Karzandolls",
  "Birthdaymasti",
  "Metairfare CRM",
  "Punjab Aviation",
  "Fareease"
];

const projects = (() => {
  const map = new Map(rawProjects.map((p) => [p.title, p]));
  const ordered = DISPLAY_ORDER.map((title) => map.get(title)).filter(Boolean);
  const orderedTitles = new Set(ordered.map((p) => p.title));
  const rest = rawProjects.filter((p) => !orderedTitles.has(p.title));
  return [...ordered, ...rest];
})();

const statusStyles = {
  Live: "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
  "In Progress":
    "bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/30",
  Completed:
    "bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30"
};

const getStatusIcon = (status) => {
  if (status === "Live") return <CheckCircle className="w-3.5 h-3.5" />;
  if (status === "In Progress") return <Clock className="w-3.5 h-3.5" />;
  return <Zap className="w-3.5 h-3.5" />;
};

// Brand-flavoured chips for headline integrations (Razorpay, WhatsApp, AI, etc.)
const highlightStyles = {
  razorpay: {
    label: "Razorpay",
    Icon: IndianRupee,
    className:
      "bg-[#072654] text-white border-[#072654] dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-500/30"
  },
  whatsapp: {
    label: "WhatsApp",
    Icon: MessageCircle,
    className:
      "bg-[#25D366] text-white border-[#25D366] dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30"
  },
  ai: {
    label: "AI",
    Icon: Sparkles,
    className:
      "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white border-transparent dark:from-fuchsia-500/20 dark:to-pink-500/20 dark:text-fuchsia-300 dark:border-fuchsia-500/30"
  },
  plane: {
    label: "Tripjack",
    Icon: Plane,
    className:
      "bg-sky-500 text-white border-sky-500 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-500/30"
  },
  hotel: {
    label: "HyperGuest",
    Icon: Hotel,
    className:
      "bg-orange-500 text-white border-orange-500 dark:bg-orange-500/15 dark:text-orange-300 dark:border-orange-500/30"
  },
  bed: {
    label: "Hotelbeds",
    Icon: BedDouble,
    className:
      "bg-teal-600 text-white border-teal-600 dark:bg-teal-500/15 dark:text-teal-300 dark:border-teal-500/30"
  }
};

const HighlightBadge = ({ item }) => {
  const style = highlightStyles[item.icon];
  if (!style) return null;
  const { Icon } = style;
  const label = item.label || style.label;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border shadow-sm ${style.className}`}
      title={label}
    >
      <Icon className="w-3 h-3" strokeWidth={2.5} />
      {label}
    </span>
  );
};

const ProjectCard = ({ project, index, isVisible }) => {
  const [imgError, setImgError] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const initial = project.title.charAt(0).toUpperCase();

  return (
    <div
      className={`group transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
    >
      <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 hover:shadow-2xl dark:hover:shadow-cyan-500/10 transition-all duration-500">
        {/* Thumbnail */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-cyan-500/10 via-teal-500/10 to-emerald-500/10 dark:from-cyan-500/20 dark:via-teal-500/15 dark:to-emerald-500/15">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="font-display text-[10rem] font-bold text-cyan-500/15 dark:text-cyan-400/15 leading-none select-none">
                {initial}
              </div>
              {!project.image && (
                <ImageOff className="absolute bottom-3 right-3 w-4 h-4 text-slate-400 dark:text-slate-600" />
              )}
            </div>
          )}

          {/* Top overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${
                statusStyles[project.status] || statusStyles.Completed
              }`}
            >
              {getStatusIcon(project.status)}
              {project.status}
            </span>
          </div>

          {/* Category */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 backdrop-blur-md border border-white/40 dark:border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
            {project.subtitle}
          </p>

          {/* Brand integration highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.highlights.map((h, i) => (
                <HighlightBadge key={i} item={h} />
              ))}
            </div>
          )}

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Key Features
              </p>
              <ul className="space-y-1">
                {project.features.slice(0, 3).map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span className="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies
                .slice(0, showAllTech ? project.technologies.length : 5)
                .map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              {project.technologies.length > 5 && (
                <button
                  type="button"
                  data-testid={`toggle-tech-${project.id}`}
                  onClick={() => setShowAllTech(!showAllTech)}
                  className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-500/20 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors"
                >
                  {showAllTech ? "Show less" : `+${project.technologies.length - 5}`}
                </button>
              )}
            </div>
          </div>

          {/* Impact */}
          {project.impact && (
            <div className="mb-4 p-3 rounded-xl bg-cyan-50/70 dark:bg-cyan-500/5 border border-cyan-100 dark:border-cyan-500/20">
              <p className="text-xs text-cyan-700 dark:text-cyan-300 font-medium flex items-start gap-1.5">
                <Zap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                {project.impact}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 mt-auto pt-2">
            {project.link && (
              <Button
                data-testid={`project-live-btn-${project.id}`}
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                className="flex-1 h-10 rounded-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold"
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                View Live
              </Button>
            )}
            {project.altLink && (
              <Button
                data-testid={`project-alt-btn-${project.id}`}
                onClick={() => window.open(project.altLink, "_blank", "noopener,noreferrer")}
                variant="outline"
                className="h-10 px-3 rounded-full border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                title="Visit company website"
              >
                Site
              </Button>
            )}
            {project.github && (
              <Button
                data-testid={`project-github-btn-${project.id}`}
                onClick={() => window.open(project.github, "_blank", "noopener,noreferrer")}
                variant="outline"
                className="h-10 px-3 rounded-full border-slate-300 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const current = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.05 }
    );
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-testid="projects-section"
      className="py-8 bg-slate-50/60 dark:bg-[#0c0d14] relative"
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
              04 — Featured Projects
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Selected{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              projects.
            </span>
          </h2>
          {/* <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From AI-powered SaaS to multi-API hotel platforms — products real businesses run on
            every day.
          </p> */}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
