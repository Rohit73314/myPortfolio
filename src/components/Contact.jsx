import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { personalInfo } from '../mock/portfolioData';
import { useToast } from '../hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { toast } = useToast();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const data = new FormData(form);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Connect</h3>
                <p className="text-slate-600">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl hover:from-cyan-100 hover:to-teal-100 transition-all duration-300 border border-cyan-100 group"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 from-orange-200 transition-all duration-300 border border-orange-100 group"
                >
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600 text-sm">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-100">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600 text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-slate-600 group-hover:text-cyan-600" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-slate-800 hover:bg-slate-50 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-slate-600 group-hover:text-slate-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
          >
            <form
              ref={formRef}
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200"
            >
              {/* Add this hidden input with YOUR access key */}
              <input type="hidden" name="access_key" value="00ccae41-0fed-4eca-b520-eb6e2652e3a9" />

              {/* Optional: customize the email subject & receiver */}
              <input type="hidden" name="subject" value="New Contact Message from Portfolio" />
              <input type="hidden" name="from_name" value={formData.name} /> {/* optional */}
              <input type="hidden" name="email" value={formData.email} />     {/* optional */}

              {/* Your existing fields stay the same */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-white border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full bg-white border-slate-300 focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="w-full bg-white border-slate-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
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