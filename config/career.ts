import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string | null;
  companyUrl?: string;
  logo?: string;
  locationType: string;
  type: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "freelance",
    position: "Freelance Software Engineer",
    company: "Freelance",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2021-12',
    endDate: "",
    companyUrl: "/experience",
    logo: "/career/freelance.png",
    locationType:'Remote',
    type: 'Freelance'
  },
  {
    id: "siddiSolution",
    position: "Fullstack Developer and Lecturer",
    company: "CV. Siddi Solution Technology",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2024-04',
    endDate: "",
    companyUrl: "https://www.instagram.com/cv.siddisolutiontechno/",
    logo: "/career/siddi.png",
    locationType:'Hybrid Remote',
    type: 'Freelance'
  },
  {
    id: "pelindo",
    position: "IT Support Intern",
    company: "PT Pelabuhan Indonesia (Persero) Cabang Makassar",
    location: "Makassar, Sulawesi Selatan",
    startDate: '2019-05',
    endDate: "2019-09",
    companyUrl: "https://pelindo.co.id/port/pelabuhan-makassar",
    logo: "/career/pelindo1.png",
    locationType:'Onsite',
    type: 'Fulltime'
  },
  
  // {
  //   id: "agentprod",
  //   position: "Software Development Intern",
  //   company: "Agentprod LLP",
  //   location: "Bengaluru, India",
  //   startDate: '2023-10-01',
  //   endDate: '2024-03-01',
  //   description: [
  //     "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2).",
  //     "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
  //     "Deployed ML models on AWS SageMaker instead of Replicate.",
  //   ],
  //   achievements: [
  //     "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
  //     "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
  //     "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
  //     "Created a Next.js dashboard for user analytics.",
  //   ],
  //   skills: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Typescript"],
  //   companyUrl: "https://agentprod.com",
  //   logo: "/career/agentprod-logo.png",
  // },
  // {
  //   id: "builtdesign",
  //   position: "Web Developer Intern",
  //   company: "Builtdesign",
  //   location: "Nagpur, India",
  //   startDate: '2021-07-01',
  //   endDate: '2022-07-01',
  //   description: [
  //     "Developed websites using React, Angular, and GraphQL.",
  //     "Set up AWS servers and CI/CD pipelines.",
  //     "Built a multi-page PDF reader for large files (>300MB).",
  //   ],
  //   achievements: [
  //     "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
  //     "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
  //     "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
  //   ],
  //   skills: [
  //     "React",
  //     "Angular",
  //     "GraphQL",
  //     "AWS",
  //     "HTML 5",
  //     "CSS 3",
  //     "Javascript",
  //   ],
  //   companyUrl: "https://builtdesign.in",
  //   logo: "/career/builtdesign-logo.png",
  // },
];
