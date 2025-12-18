
import { Project, Achievement, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    title: "MindMate - Adaptive AI Study Buddy",
    subtitle: "Next.js, TypeScript, Google Gemini API",
    tags: ["Next.js", "Gemini API", "Tailwind", "TypeScript"],
    date: "2025",
    githubUrl: "https://github.com/jahnvi2204/mindmate_-adaptive-study-buddy",
    liveUrl: "https://mindmate-adaptive-study-buddy.vercel.app",
    description: [
      "Designed and developed an AI-powered personalized learning assistant that adapts to user materials.",
      "Implemented AI-generated study plans, interactive quiz mode, and real-time AI tutor using Gemini API.",
      "Built a premium glassmorphism UI with smooth animations and responsive layouts.",
      "Integrated local storage persistence for automatic saving of study materials."
    ]
  },
  {
    title: "CodeGuard AI",
    subtitle: "Python, Machine Learning, Flask, React.js",
    tags: ["NLP", "ML", "Flask", "React"],
    date: "2025",
    githubUrl: "https://github.com/jahnvi2204/codeguard-ai",
    liveUrl: "https://codeguard-ai.vercel.app",
    description: [
      "Architected an AI-powered code analysis platform for vulnerability detection and performance analysis.",
      "Built intelligent code review automation with NLP capabilities to identify 150+ security flaws.",
      "Developed a Flask API backend paired with a dynamic React.js frontend for visualization."
    ]
  },
  {
    title: "SereNova - Mental Health Chatbot",
    subtitle: "Python, NLP, Sentiment Analysis, TensorFlow",
    tags: ["TensorFlow", "NLP", "Python", "Mental Health"],
    date: "2024",
    githubUrl: "https://github.com/jahnvi2204/SereNova-AI",
    liveUrl: "https://serenova-chatbot.vercel.app",
    description: [
      "Created an AI-driven mental health support platform utilizing TensorFlow and NLP.",
      "Implemented real-time Sentiment Analysis and NLU to provide tailored CBT techniques.",
      "Integrated a crisis detection mechanism with high-confidence trigger phrases for user safety."
    ]
  },
  {
    title: "Inventory-Tracker",
    subtitle: "React, Node.js, MongoDB, Google OAuth",
    tags: ["React", "Node.js", "MongoDB", "OAuth", "Socket.io"],
    date: "2024",
    githubUrl: "https://github.com/jahnvi2204/Inventory-Tracker",
    description: [
      "A comprehensive inventory management system built with React frontend and Node.js backend.",
      "Features real-time product tracking, analytics, and user management with Google OAuth authentication.",
      "Implemented Socket.io for real-time updates, Chart.js for data visualization, and role-based access control."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL"]
  },
  {
    name: "Web Technologies",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"]
  },
  {
    name: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Postman", "Docker"]
  },
  {
    name: "AI & ML",
    skills: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Generative AI"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "IBM DevOps Certification",
    details: "Comprehensive training in CI/CD, Docker, Kubernetes, and Cloud Computing",
    year: "2024",
    certificateUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/1b5d32e7ebaa4143864cb80016e1d73c"
  },
  {
    title: "SmartBridge MERN Stack Development",
    details: "Proficiency in building full-stack applications using MongoDB, Express, React, and Node.js",
    year: "2024",
    certificateUrl: "https://skillwallet.smartinternz.com/internships/mongo_db/b2651c9921723afdfd04ed61ec302a6b"
  }
];
