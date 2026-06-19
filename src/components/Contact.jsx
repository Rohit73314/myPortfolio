import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { personalInfo } from "../mock/portfolioData";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    const current = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData(e.target);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thank you! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to send message. Please email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-testid="contact-section"
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
              07 — Get In Touch
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/40" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
            Have an idea? Let&apos;s{" "}
            <span className="font-serif-accent italic text-cyan-600 dark:text-cyan-400">
              build it.
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info column */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              data-testid="contact-email-card"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400/60 dark:hover:border-cyan-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-semibold text-slate-900 dark:text-white">
                  Email
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              data-testid="contact-phone-card"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-orange-400/60 transition-all group"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white">
                  Phone
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-slate-900 dark:text-white">
                  Location
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
                Follow me
              </p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.linkedin}
                  data-testid="contact-linkedin-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500 transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.github}
                  data-testid="contact-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <form
              ref={formRef}
              data-testid="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-xl"
            >
              <input
                type="hidden"
                name="access_key"
                value="00ccae41-0fed-4eca-b520-eb6e2652e3a9"
              />
              <input type="hidden" name="subject" value="New Contact Message from Portfolio" />

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="contact-name-input"
                    className="bg-white dark:bg-white/[0.03] border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 focus-visible:ring-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="contact-email-input"
                    className="bg-white dark:bg-white/[0.03] border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 focus-visible:ring-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    data-testid="contact-subject-input"
                    className="bg-white dark:bg-white/[0.03] border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 focus-visible:ring-cyan-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="contact-message-input"
                    className="bg-white dark:bg-white/[0.03] border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 focus-visible:ring-cyan-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="contact-submit-btn"
                  className="w-full h-12 rounded-full text-base font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
