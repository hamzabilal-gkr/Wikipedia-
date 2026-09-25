/**
 * ========================================================================
 * PERSONAL IDENTITY PROFILE DATA CONFIGURATION
 * ========================================================================
 * Edit this file to update your personal details, education, skills,
 * projects, and contact links. All information is loaded statically here.
 */

export interface QuickFact {
  label: string;
  value: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: 'Currently Enrolled' | 'Completed' | 'Upcoming';
  location: string;
  details?: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface InterestItem {
  name: string;
  shortDescription: string;
  iconName: string;
}

export interface ContactInfo {
  email: {
    address: string;
    display: string;
  };
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
}

export interface ProfileData {
  // Personal & Identity
  fullName: string;
  title: string;
  subtitle: string;
  location: string;
  nationality: string;
  avatarUrl: string;
  avatarFallback: string;
  shortIntro: string;
  aboutBio: string[];
  
  // Wikipedia-inspired Quick Facts
  quickFacts: QuickFact[];
  
  // Sections
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  interests: InterestItem[];
  contact: ContactInfo;
}

export const initialProfileData: ProfileData = {
  fullName: "Ameer Hamza",
  title: "Computer Science Undergraduate",
  subtitle: "Bachelor of Science in Computer Science (BSCS)",
  location: "Ghakhar Mandi, Pakistan",
  nationality: "Pakistani",
  
  // High-fidelity generated avatar asset
  avatarUrl: "src/assets/images/profile.jpeg",
  avatarFallback: "AH",
  
  // Homepage Short Introduction
  shortIntro: "Computer Science student interested in technology, artificial intelligence, web development, digital creativity, and emerging technologies.",
  
  // Narrative About Biography
  aboutBio: [
    "I am an undergraduate student currently enrolled in a Bachelor of Science in Computer Science (BSCS) in Ghakhar Mandi, Pakistan. My academic studies and personal projects revolve around software architecture, intelligent algorithms, and modern web application development.",
    "Passionate about the intersection of rigorous computing and functional design, I regularly develop full-stack applications, explore neural network applications, and produce digital visual assets. My objective is to engineer scalable, intuitive software solutions that solve real-world logistical and academic problems."
  ],
  
  // Wikipedia-inspired Quick Facts Box
  quickFacts: [
    { label: "Full Name", value: "Hamza Bilal" },
    { label: "Occupation", value: "Student / Aspiring Software Engineer" },
    { label: "Education", value: "Bachelor of Science in Computer Science (BSCS)" },
    { label: "Degree", value: "BS Computer Science" },
    { label: "Location", value: "Ghakhar Mandi, Pakistan" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Areas of Interest", value: "AI, Web Development, Creative Media" }
  ],
  
  // Education History
  education: [
    {
      id: "bscs-current",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Govt. Graduate College Ghakhar Mandi, Gujranwala",
      period: "2026 — 2030 (Expected)",
      status: "Currently Enrolled",
      location: "Ghakhar Mandi, Pakistan",
      isCurrent: true,
      details: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks",
        "Focusing on modern software engineering standards, clean code architecture, and algorithm design"
      ]
    },
    {
      id: "intermediate-prev",
      degree: "Intermediate in Computer Science",
      institution: "Govt. Associate College for Boys Ghakhar Mandi, Gujranwala",
      period: "2024 — 2026",
      status: "Completed",
      location: "Ghakhar Mandi, Pakistan",
      isCurrent: false,
      details: [
        "Disciplines: Computer Science, Higher Mathematics, Physics",
        "Graduated with distinction and completed foundational coursework for university computing studies"
      ]
    },
    {
      id: "secondary-prev",
      degree: "Matriculation - Science",
      institution: "Govt. Higher Secondary School no.1 Ghakhar",
      period: "2022 — 2024",
      status: "Completed",
      location: "Gujranwala, Pakistan",
      isCurrent: false,
      details: [
        "Core sciences, Mathematics, and introductory Computer Fundamentals",
        "Developed early enthusiasm for computer hardware, software logic, and algorithmic reasoning"
      ]
    }
  ],
  
  // Skills categorized
  skillCategories: [
    {
      name: "Web Development",
      description: "Building responsive, modern, user-friendly client interfaces and web applications.",
      skills: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React", "Node.js Basics", "REST APIs"]
    },
    {
      name: "Artificial Intelligence",
      description: "Exploration of machine intelligence, prompt engineering, and intelligent systems.",
      skills: ["Python", "Machine Learning Concepts", "Prompt Engineering", "Large Language Models", "Data Analysis Basics"]
    },
    {
      name: "Computer Technology",
      description: "Core computer science fundamentals, operating environments, and development workflows.",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Git & GitHub", "Linux / CLI", "Database Design & SQL"]
    },
    {
      name: "Graphic Design",
      description: "Visual identity, UI layout prototyping, typography, and vector illustration.",
      skills: ["Figma", "Adobe Photoshop", "Canva", "UI/UX Fundamentals", "Digital Branding", "Color Theory"]
    },
    {
      name: "Video Editing",
      description: "Timeline editing, audio sync, color grading, and dynamic digital storytelling.",
      skills: ["Adobe Premiere Pro", "CapCut Desktop", "Motion Graphics Basics", "Audio Post-Production", "Color Correction"]
    },
    {
      name: "Digital Content Creation",
      description: "Multimedia asset creation, technical documentation, and online media publishing.",
      skills: ["Technical Writing", "Digital Photography", "Social Media Graphics", "Content Strategy", "Visual Storyboarding"]
    }
  ],
  
  // Projects Gallery
  projects: [
    {
      id: "project-1",
      name: "Academic Identity Portal & Portfolio",
      category: "Web Development",
      description: "A fast, encyclopedic personal profile and portfolio engineered with React, TypeScript, and clean academic layout standards.",
      longDescription: "Designed to serve as a digital curriculum vitae and academic identity hub inspired by the structured information hierarchy of reference encyclopedias. Built with semantic HTML, fluid responsiveness, and modular content data structures.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: "/src/assets/images/project_web_thumb_1790347944280.jpg",
      demoUrl: "https://example.com/portal",
      githubUrl: "https://github.com/hamzabilal-dev/identity-portal"
    },
    {
      id: "project-2",
      name: "AI Study Assistant & Knowledge Indexer",
      category: "Artificial Intelligence",
      description: "An intelligent study workflow prototype to organize lecture notes, summarize academic papers, and query technical topics.",
      longDescription: "An exploration into LLM prompting and semantic indexing for computer science coursework. Parses lecture syllabi and textbook excerpts to generate revision flashcards and contextual quizzes.",
      technologies: ["Python", "OpenAI / Gemini API", "Vector Embeddings", "FastAPI"],
      image: "/src/assets/images/project_ai_thumb_1790347958616.jpg",
      demoUrl: "https://example.com/study-assistant",
      githubUrl: "https://github.com/hamzabilal-dev/study-assistant"
    },
    {
      id: "project-3",
      name: "Campus Course Scheduler & CGPA Planner",
      category: "Web Development",
      description: "A lightweight course schedule planner and CGPA calculator tailored for university semester management.",
      longDescription: "A practical utility for BSCS students to calculate weighted GPA across credit hours, schedule course conflict notifications, and organize assignment deadlines with local browser persistence.",
      technologies: ["JavaScript", "HTML5/CSS3", "Local Storage", "Responsive UI"],
      image: "/src/assets/images/project_web_thumb_1790347944280.jpg",
      demoUrl: "https://example.com/student-portal",
      githubUrl: "https://github.com/hamzabilal-dev/course-scheduler"
    }
  ],
  
  // Compact Areas of Interest
  interests: [
    {
      name: "Artificial Intelligence",
      shortDescription: "Neural networks, natural language interfaces, and autonomous agent systems.",
      iconName: "Brain"
    },
    {
      name: "Web Development",
      shortDescription: "Component-driven architectures, responsive ergonomics, and high-performance frontends.",
      iconName: "Code2"
    },
    {
      name: "Technology & Computing",
      shortDescription: "Computer architecture, modern microprocessors, open-source software, and distributed systems.",
      iconName: "Cpu"
    },
    {
      name: "Digital Creativity",
      shortDescription: "Graphic design, generative art, minimalist interface aesthetics, and digital typography.",
      iconName: "Palette"
    },
    {
      name: "Computer Science",
      shortDescription: "Algorithmic computational complexity, graph theory, data structures, and compiler design.",
      iconName: "Binary"
    },
    {
      name: "Photography & Visual Content",
      shortDescription: "Framing, street photography, documentary visual capture, and digital image editing.",
      iconName: "Camera"
    }
  ],
  
  // Contact Information
  contact: {
    email: {
      address: "hamzabilal.gkr@gmail.com",
      display: "hamzabilal.gkr@gmail.com"
    },
    github: {
      username: "hamzabilal-dev",
      url: "https://github.com/hamzabilal-gkr"
    },
    linkedin: {
      username: "hamza-bilal",
      url: "https://linkedin.com/in/hamza-bilal"
    },
    instagram: {
      handle: "@prof.hamzabilal",
      url: "https://www.instagram.com/prof.hamzabilal/"
    }
  }
};
