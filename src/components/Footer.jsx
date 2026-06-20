import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../mock/portfolioData";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-slate-950 dark:bg-black text-slate-300 border-t border-white/5"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <a href="#home" className="inline-flex items-center mb-4">
              <span className="font-display text-3xl font-extrabold tracking-tighter bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                RS
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-5">
              Backend Developer building scalable CRMs, SaaS &amp; AI-powered platforms for
              travel, aviation and hotels.
            </p>
            <div className="flex gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-orange-400 hover:text-orange-400 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <span className="font-medium text-white">Email</span>
                <br />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Phone</span>
                <br />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Location</span>
                <br />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 inline mx-0.5" /> and lots of coffee.
          </p>
          <button
            type="button"
            data-testid="footer-back-to-top"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-500 hover:text-slate-900 transition-all duration-300 text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
