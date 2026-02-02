// Mock data for Rohit Singh's Portfolio

export const personalInfo = {
  name: "Rohit Singh",
  role: "Full-Stack Web Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "singhrohit73314@gmail.com",
  phone: "+91 9667305448",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/rohit-singh-913016229/",
  github: "https://github.com/Rohit73314",
  resumeUrl: "/RohitCv.pdf"
};

export const about = {
  description: "Passionate Full-Stack Web Developer with 1.5+ years of experience specializing in PHP, Laravel, React, and Next.js. I build and optimize scalable web applications with a focus on performance, clean code, and seamless user experiences. My expertise spans API integration, backend optimization, and modern frontend development.",
  highlights: [
    "1.5+ years of professional development experience",
    "Specialized in Laravel, React, Next.js, and MySQL",
    "Built travel management platform handling 10K+ bookings",
    "Expert in API integration and performance optimization"
  ],
  stats: [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Mastered", value: "15+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Nibble Software Technologies PVT LTD",
    position: "Jr. Backend Developer",
    duration: "April 2025 - Present",
    location: "Delhi, India",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained PHP/Laravel/React applications, contributing to faster development cycles and improved code quality",
      "Integrated REST APIs and optimized backend logic, reducing load times by 40%",
      "Collaborated with UI/UX and QA teams to deliver scalable features handling high traffic",
      "Implemented performance optimization strategies improving overall system efficiency"
    ],
    technologies: ["Laravel", "Next.js", "PHP", "MySQL", "REST APIs"]
  },
  {
    id: 2,
    company: "Nibble Software Technologies PVT LTD",
    position: "Backend Developer - Trainee",
    duration: "Aug 2024 - Mar 2025",
    location: "Delhi, India",
    type: "Trainee",
    responsibilities: [
      "Assisted in designing and maintaining server-side logic using Laravel for CRM applications",
      "Contributed to feature enhancements, bug fixes, and backend performance optimization",
      "Improved system stability through rigorous testing and code reviews",
      "Learned best practices in scalable backend architecture"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Git"]
  }
];

export const projects = [
  {
    id: 1,
    title: "TravoByte",
    subtitle: "Comprehensive Travel Management Platform",
    description: "A full-featured travel management platform supporting both B2C and B2B operations with multi-vendor capabilities. Handles complete travel booking lifecycle from lead generation to post-booking support.",
    longDescription: "TravoByte is an enterprise-grade travel management solution that revolutionizes how travel agencies manage their operations. The platform integrates multiple third-party APIs for flights, hotels, and payments, providing a seamless booking experience.",
    features: [
      "Lead management and quotation builder",
      "Multi-vendor booking management system",
      "AI-powered package creation for automated travel packages",
      "Comprehensive MIS reports with analytics dashboard",
      "Integrated accounting and wallet management",
      "Centralized email marketing and communication tools",
      "Real-time chat and client management",
      "Document and complaint management system"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Payment Gateway", "SendGrid", "AI Integration"],
    integrations: ["Flight APIs", "Hotel APIs", "Just Click Pay", "Currency Exchange", "Geolocation", "SendGrid"],
    category: "Web Application",
    image: "/projects/travobyte.jpg",
    link: "https://travobyte.com",
    github: "",
    status: "Live",
    impact: "Handling 10,000+ bookings monthly with 99.9% uptime"
  },
  {
    id: 2,
    title: "Birthdaymasti",
    subtitle: "E-commerce Cake Ordering Platform",
    description: "An in-house developed cake e-commerce platform offering a delightful selection of cakes for every occasion. Features intuitive UI, secure payments, and efficient order management.",
    longDescription: "Built from scratch, Birthdaymasti provides customers with a seamless online cake ordering experience. The platform handles inventory management, order tracking, and payment processing with robust security measures.",
    features: [
      "Product catalog with advanced filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment gateway integration",
      "Real-time order tracking system",
      "Admin panel for inventory management",
      "Customer reviews and ratings",
      "Promotional offers and discount management"
    ],
    technologies: ["Laravel", "Next.js", "PHP", "JavaScript", "MySQL", "REST APIs"],
    category: "E-commerce",
    image: "/projects/birthdaymasti.jpg",
    link: "https://birthdaymasti.com",
    github: "",
    status: "Live"
  },
  {
    id: 3,
    title: "Karzandolls",
    subtitle: "Collectibles E-commerce Platform",
    description: "Rebuilding an existing collectibles e-commerce site with modern tech stack. Migrating from CodeIgniter to Laravel backend with Next.js frontend for improved performance and scalability.",
    longDescription: "A complete platform overhaul focusing on performance, user experience, and scalability. Implementing modern best practices and optimizing for high traffic scenarios.",
    features: [
      "Product catalog with advanced filtering and search",
      "Wishlist and cart management",
      "Secure authentication and payment integration",
      "Order tracking and history",
      "Scalable Laravel admin panel",
      "Fast, responsive Next.js storefront",
      "Inventory and promotion management"
    ],
    technologies: ["Laravel", "Next.js", "MySQL", "REST APIs", "Payment Integration"],
    category: "E-commerce",
    image: "/projects/karzandolls.jpg",
    link: "",
    github: "",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Alumni Tracking System",
    subtitle: "Alumni Management Platform",
    description: "Developed a comprehensive system to manage alumni data and improve engagement. Features include profile management, event coordination, and networking capabilities.",
    features: [
      "Alumni profile management",
      "Event coordination and RSVP system",
      "Networking and messaging features",
      "Job board for alumni opportunities",
      "Analytics dashboard for engagement metrics"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    category: "Web Application",
    image: "/projects/alumni.jpg",
    link: "",
    github: "",
    status: "Completed"
  }
];

export const skills = {
  backend: [
    { name: "Laravel", level: 90, icon: "server" },
    { name: "PHP", level: 88, icon: "code" },
    { name: "Node.js", level: 75, icon: "globe" },
    { name: "Express.js", level: 72, icon: "zap" },
    { name: "RESTful APIs", level: 85, icon: "link" },
    { name: "Authentication", level: 80, icon: "shield" }
  ],
  frontend: [
    { name: "React.js", level: 85, icon: "react" },
    { name: "Next.js", level: 82, icon: "layers" },
    { name: "JavaScript", level: 88, icon: "code" },
    { name: "Bootstrap", level: 80, icon: "layout" },
    
  ],
  database: [
    { name: "MySQL", level: 90, icon: "database" },
    { name: "MongoDB", level: 75, icon: "database" },
    { name: "Firebase", level: 70, icon: "flame" }
  ],
  tools: [
    { name: "Git", level: 85, icon: "git-branch" },
    { name: "GitHub", level: 85, icon: "github" },
    { name: "AWS EC2", level: 70, icon: "cloud" },
    { name: "REST APIs", level: 88, icon: "api" }
  ],
  other: [
    { name: "DSA", level: 75, icon: "cpu" },
    { name: "DBMS", level: 82, icon: "hard-drive" },
    { name: "OS", level: 78, icon: "monitor" },
    { name: "Problem Solving", level: 85, icon: "puzzle" }
  ]
};

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Ganga Institute of Technology and Management",
    duration: "Sep 2022 - July 2024",
    grade: "7.20 CGPA",
    location: "Delhi, India"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Ganga Institute of Technology and Management",
    duration: "Aug 2019 - July 2022",
    grade: "7.53 CGPA",
    location: "Delhi, India"
  }
];

export const achievements = [
  {
    id: 1,
    title: "National-Level Hackathon Participant",
    description: "Represented team and received positive feedback for innovative project presentation",
    year: "2023"
  },
  {
    id: 2,
    title: "Alumni Tracking System Development",
    description: "Developed comprehensive system to manage alumni data and improve engagement",
    year: "2023"
  },
  {
    id: 3,
    title: "Performance Optimization Expert",
    description: "Reduced application load times by 40% through backend optimization",
    year: "2024"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Tech Lead",
    position: "Senior Developer, Nibble Software",
    content: "Rohit is an exceptional developer with strong problem-solving skills. His ability to quickly adapt to new technologies and deliver high-quality code is impressive.",
    avatar: "/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    name: "Project Manager",
    position: "Manager, Nibble Software",
    content: "Working with Rohit has been a pleasure. He consistently delivers projects on time and his attention to detail in both frontend and backend development is commendable.",
    avatar: "/testimonials/avatar2.jpg"
  }
];
