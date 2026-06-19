import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.slice(1));
      const fromTop = window.scrollY + 120;
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        return el.offsetTop <= fromTop && el.offsetTop + el.offsetHeight > fromTop;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        data-testid="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center group"
              data-testid="nav-logo"
            >
              <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tighter bg-gradient-to-br from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                RS
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-slate-200/70 dark:border-white/5 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    data-testid={`nav-link-${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-cyan-600 to-teal-600 shadow-md"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-16 right-3 left-3 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  data-testid={`mobile-nav-link-${link.href.slice(1)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
