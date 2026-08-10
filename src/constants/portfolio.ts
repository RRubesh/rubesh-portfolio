const gitpilotTerminalImage = '/images/gitpilot-terminal.png';
const aiBugHunterImage = '/images/ai-bug-hunter.jpg';

const certEthicalHacking = '/images/cert-ethical-hacking.jpg';
const certSQLOracle = '/images/cert-sql-oracle.png';
const certPythonProjects = '/images/cert-python-projects.png';
const certPythonFundamentals = '/images/cert-python-fundamentals.png';
const certPythonStrings = '/images/cert-python-strings.png';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  category: string;
  badge: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface SkillItem {
  name: string;
  level: number;
  iconClass: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  category: 'Cybersecurity' | 'Database' | 'Python';
  image: string;
  badge: string;
}

export const USER_INFO = {
  name: "RUBESH R",
  uppercaseName: "RUBESH R",
  title: "Full-Stack Developer & Penetration Tester",
  phone: "+91-9042847832",
  profileImage: "/images/rubesh-profile.png",
  roles: [
    "Full-Stack Developer",
    "Penetration Testing Specialist",
    "AI Agent & LLM Developer",
    "Cybersecurity Enthusiast"
  ],
  tagline: "Building intelligent AI systems, secure cybersecurity platforms, and modern full-stack applications that solve real-world problems.",
  summary: "Motivated B.Tech Information Technology student with a strong foundation in Full-Stack Development and Penetration Testing. Skilled in building responsive and scalable web applications using React.js, TypeScript, Tailwind CSS, and backend technologies. Proficient in programming languages such as Python and JavaScript, with hands-on experience in secure software development, vulnerability assessment, and security testing methodologies. Passionate about ethical hacking, secure coding practices, and developing innovative technology solutions. A quick learner with strong problem-solving skills, analytical thinking, and the ability to adapt to emerging technologies.",
  education: [
    {
      degree: "B.Tech in Information Technology (Currently: 3rd Year)",
      year: "2024 - 2028",
      institution: "Jeppiaar Institute of Technology"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      year: "Secondary Education",
      institution: "Government High School"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      year: "Primary Education",
      institution: "Government High School"
    }
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "rubeshr000@gmail.com",
  github: "https://github.com/RRubesh",
  linkedin: "https://www.linkedin.com/in/rubesh-r-",
  resumeFile: "Rubesh_R_Resume.pdf",
  languages: ["English", "Tamil", "Telugu"],
  softSkills: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Quick Learner"],
  achievements: [
    "Certified Ethical Hacking & Penetration Testing Specialist (CappricioSec University).",
    "Multiple Infosys Springboard Certifications in Python Programming & Oracle SQL Databases.",
    "Built multiple production-ready React frontend projects with modern UI/UX principles.",
    "Active GitHub contributor with consistent open-source project contributions."
  ],
  bio: [
    "Motivated B.Tech Information Technology student at Jeppiaar Institute of Technology with a strong foundation in Full Stack Development and Penetration Testing.",
    "Skilled in building responsive and scalable web applications using React.js, TypeScript, Tailwind CSS, FastAPI, Python, SQL, and Docker containerization.",
    "Passionate about ethical hacking, vulnerability assessment, secure coding practices, and developing innovative AI-integrated solutions."
  ],
  stats: [
    { value: "5+", label: "Professional Certifications" },
    { value: "2+", label: "Flagship Projects" },
    { value: "10+", label: "Security & AI Tools" },
    { value: "2028", label: "B.Tech IT Graduation" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Development",
    subtitle: "React, TypeScript & FastAPI",
    description: "Building responsive, high-performance web applications with React.js, TypeScript, Tailwind CSS, FastAPI backend, SQLAlchemy ORM, and REST APIs.",
    icon: "Layers",
    highlights: ["React.js & TypeScript", "FastAPI Backend", "SQL & SQLAlchemy", "Docker Containers"]
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing & SAST",
    subtitle: "Vulnerability Auditing & Defense",
    description: "Conducting vulnerability assessments, ethical hacking audits, automated SAST code scanning, and implementing defense-in-depth secure coding practices.",
    icon: "ShieldCheck",
    highlights: ["Vulnerability Assessment", "Ethical Hacking", "SAST Tools", "Secure Coding"]
  },
  {
    id: "uiux-engineering",
    title: "Modern UI/UX Engineering",
    subtitle: "Glassmorphism & Interactive Motion",
    description: "Designing sleek glassmorphism user interfaces with subtle motion graphics, micro-interactions, responsive layouts, and Tailwind CSS animation.",
    icon: "Palette",
    highlights: ["Glassmorphism UI", "Framer Motion", "Tailwind CSS", "Micro-Interactions"]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "ceh-penetration-testing",
    title: "Certified Ethical Hacking & Penetration Testing",
    issuer: "CappricioSec University",
    issueDate: "13 Jun 2026",
    credentialId: "074d52eb184b3f0e6198",
    category: "Cybersecurity",
    badge: "Ethical Hacking",
    image: certEthicalHacking
  },
  {
    id: "sql-oracle-toad",
    title: "Learn SQL For Oracle Databases - Using Toad From Scratch",
    issuer: "Infosys Springboard",
    issueDate: "May 17, 2025",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Database",
    badge: "SQL & Databases",
    image: certSQLOracle
  },
  {
    id: "python-programming-projects",
    title: "Python Programming with Projects",
    issuer: "Infosys Springboard",
    issueDate: "May 14, 2025",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Python",
    badge: "Python Engineering",
    image: certPythonProjects
  },
  {
    id: "fundamentals-python-programming",
    title: "Fundamentals of Python Programming",
    issuer: "Infosys Springboard",
    issueDate: "May 9, 2025",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Python",
    badge: "Python Basics",
    image: certPythonFundamentals
  },
  {
    id: "strings-python-programming",
    title: "Strings in Python Programming",
    issuer: "Infosys Springboard",
    issueDate: "May 10, 2025",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Python",
    badge: "Python Data Structures",
    image: certPythonStrings
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-bug-hunter",
    projectNumber: "01",
    title: "AI Bug Hunter",
    category: "FastAPI + React + Docker + Ollama LLM",
    badge: "Full Stack Developer",
    role: "Full Stack Developer",
    description: "AI-powered Static Application Security Testing (SAST) platform for vulnerability detection. Built with FastAPI backend, React frontend, SQLAlchemy ORM, and Docker containerization. Integrated Ollama LLM for intelligent code analysis and automated security report generation.",
    features: [
      "Detects code vulnerabilities and generates detailed security reports",
      "Integrated Ollama LLM for intelligent code analysis",
      "Built with FastAPI backend, React frontend & SQLAlchemy ORM",
      "Designed intuitive React UI for code upload & report management",
      "Deployed using Docker for consistent, scalable environments"
    ],
    techStack: ["FastAPI", "React", "Docker", "Ollama LLM", "SQLAlchemy", "Python"],
    githubUrl: "https://github.com/RRubesh",
    liveUrl: "https://github.com/RRubesh",
    image: aiBugHunterImage
  },
  {
    id: "gitpilot-cli",
    projectNumber: "02",
    title: "GitPilot CLI",
    category: "Developer Tool",
    badge: "AI CLI Tool",
    role: "Developer",
    description: "AI-powered Git Command Assistant that automates commit message generation, inspects git diffs, and provides intelligent repository insights from terminal.",
    features: [
      "Git Workflow Automation",
      "Smart Commit Suggestions",
      "Repository Insight Analytics"
    ],
    techStack: ["Python", "Git", "LLM", "CLI"],
    githubUrl: "https://github.com/RRubesh",
    liveUrl: "https://github.com/RRubesh",
    image: gitpilotTerminalImage
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95, iconClass: "devicon-react-original colored" },
      { name: "TypeScript", level: 90, iconClass: "devicon-typescript-plain colored" },
      { name: "JavaScript", level: 92, iconClass: "devicon-javascript-plain colored" },
      { name: "HTML5", level: 95, iconClass: "devicon-html5-plain colored" },
      { name: "CSS3", level: 92, iconClass: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", level: 95, iconClass: "devicon-tailwindcss-plain colored" }
    ]
  },
  {
    title: "Backend & Tools",
    icon: "Server",
    skills: [
      { name: "FastAPI", level: 92, iconClass: "devicon-fastapi-plain colored" },
      { name: "Python", level: 95, iconClass: "devicon-python-plain colored" },
      { name: "SQL", level: 88, iconClass: "devicon-mysql-plain colored" },
      { name: "Docker", level: 88, iconClass: "devicon-docker-plain colored" },
      { name: "REST APIs", level: 94, iconClass: "fa-solid fa-cloud-arrow-up", color: "#3B82F6" },
      { name: "Git & GitHub", level: 94, iconClass: "devicon-git-plain colored" }
    ]
  },
  {
    title: "Penetration Testing & Security",
    icon: "ShieldAlert",
    skills: [
      { name: "Vulnerability Assessment", level: 90, iconClass: "fa-solid fa-bug", color: "#F97316" },
      { name: "Ethical Hacking", level: 88, iconClass: "fa-solid fa-shield", color: "#A855F7" },
      { name: "Secure Coding", level: 94, iconClass: "fa-solid fa-lock", color: "#22C55E" },
      { name: "SAST Tools", level: 92, iconClass: "fa-solid fa-terminal", color: "#06B6D4" }
    ]
  },
  {
    title: "Soft Skills & Languages",
    icon: "Bot",
    skills: [
      { name: "Problem Solving", level: 95, iconClass: "fa-solid fa-brain", color: "#4F46E5" },
      { name: "Teamwork", level: 90, iconClass: "fa-solid fa-users", color: "#7C3AED" },
      { name: "Communication", level: 92, iconClass: "fa-solid fa-comments", color: "#06B6D4" },
      { name: "Leadership", level: 88, iconClass: "fa-solid fa-award", color: "#F59E0B" },
      { name: "Quick Learner", level: 96, iconClass: "fa-solid fa-bolt", color: "#EAB308" },
      { name: "English / Tamil / Telugu", level: 100, iconClass: "fa-solid fa-language", color: "#10B981" }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    year: "2024 - 2028",
    title: "B.Tech in Information Technology",
    description: "Jeppiaar Institute of Technology (Currently: 3rd Year). Focused on Full-Stack Development, Penetration Testing, Python, React.js, and Docker."
  },
  {
    year: "2026",
    title: "AI Bug Hunter Platform",
    description: "Built AI-powered SAST platform integrating FastAPI, React, Docker, SQLAlchemy ORM, and Ollama LLM for automated security report generation."
  },
  {
    year: "2028 Goal",
    title: "Full-Stack & Penetration Testing Specialist",
    description: "Pioneering secure software engineering, vulnerability assessment, and AI-driven security automation.",
    highlight: true
  }
];
