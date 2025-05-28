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
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Ooka Pratama's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "My current focus in technology and development.",
    metadata: {
      title: "Skills",
      description:
        "Ooka Pratama's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "My development journey — from building ideas to making an impact.",
    metadata: {
      title: "Experience",
      description: "Ooka Pratama's Development journey — from building ideas to making an impact.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Ooka Pratama.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Ooka Pratama's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ooka Pratama's resume.",
    metadata: {
      title: "Resume",
      description: "Ooka Pratama's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Ooka Pratama's professional journey and career timeline.",
    },
  },
  dashboard: {
    title : "Dashboard",
    description: "This dashboard highlights my journey as a developer through my GitHub contributions — where I build, share, and grow.",
    metadata: {
      title: "Dashboard",
      description: 'This dashboard highlights my journey as a developer through my GitHub contributions — where I build, share, and grow.'
    }
  },
};
