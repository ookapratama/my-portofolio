import { title } from "process";
import { ValidPages } from "./constants";
import { metadata } from "@/app/layout";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Welcome to my code space. Let's build something extraordinary.",
    metadata: {
      title: "Backend Developer Portfolio",
      description:
        "Ooka Pratama's Professional Portfolio - Backend Developer experienced in Laravel and Machine Learning.",
    },
  },
  skills: {
    title: "Skills & Expertise",
    description: "Current focus in technology and development expertise.",
    metadata: {
      title: "Skills & Technology",
      description: "List of skills and technologies mastered by Ooka Pratama.",
    },
  },
  experience: {
    title: "Project Experience",
    description: "Development journey — from ideas to making an impact.",
    metadata: {
      title: "Project Experience",
      description:
        "List of Ooka Pratama's projects and professional development experience.",
    },
  },
  contact: {
    title: "Get in Touch",
    description: "Let's connect and explore collaboration opportunities.",
    metadata: {
      title: "Contact Ooka Pratama",
      description:
        "Contact Ooka Pratama for collaborations or project inquiries.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "List of Ooka Pratama's open-source contributions on GitHub.",
    },
  },
  resume: {
    title: "Resume",
    description: "Professional summary and qualifications.",
    metadata: {
      title: "Resume & CV",
      description:
        "Download resume and view Ooka Pratama's professional qualifications.",
    },
  },
  about: {
    title: "About Me",
    description:
      "My journey in code: projects, experience, skills, and education.",
    metadata: {
      title: "About Ooka Pratama",
      description:
        "Learn more about Ooka Pratama's background and motivation as a developer.",
    },
  },
  career: {
    title: "Career Journey",
    description: "Timeline of professional and educational journey.",
    metadata: {
      title: "Career Timeline",
      description: "Career history and professional journey of Ooka Pratama.",
    },
  },
  dashboard: {
    title: "Developer Dashboard",
    description: "Real-time GitHub activity statistics and code contributions.",
    metadata: {
      title: "Developer Statistics",
      description:
        "View Ooka Pratama's coding activity and GitHub contributions transparently.",
    },
  },
};
