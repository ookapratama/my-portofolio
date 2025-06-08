export type ValidSkills =
  | "Next.js"
  | "React"
  | "GraphQL"
  | "Nest.js"
  | "express.js"
  | "Node.js"
  | "MongoDB"
  | "Typescript"
  | "Javascript"
  | "HTML 5"
  | "CSS 3"
  | "React Native"
  | "Angular"
  | "Redux"
  | "Socket.io"
  | "Material UI"
  | "Tailwind CSS"
  | "AWS"
  | "Bootstrap"
  | "Google Auth"
  | "MySQL"
  | "Java"
  | "Databricks"
  | "Python"
  | "Docker"
  | "Kubernetes"
  | "PostgreSQL"
  | "Redis"
  | "Git"
  | "CI/CD"
  | "Jenkins"
  | "FastAPI"
  | "Django"
  | "Vue.js"
  | "Sass"
  | "Firebase"
  | "Azure"
  | "Google Cloud"
  | "Figma"
  | "Webpack"
  | "Jest"
  | "Cypress"
  | "Storybook"
  | "Prisma"
  | "Supabase"
  | "Vercel"
  | "Netlify"
  | "Three.js"
  | "WebGL"
  | "TensorFlow"
  | "PyTorch"
  | "Spring Boot"
  | "Laravel"
  | "PHP";

export type ValidCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Web Dev"
  | "Mobile Dev"
  | "3D Modeling";

export type ValidExpType = "Projects" | "Contributions";

export type ValidPages =
  | "home"
  | "skills"
  | "experience"
  | "career"
  | "contact"
  | "contributions"
  | "resume"
  | "about"
  | "dashboard";


// initial github types
export type GithubResponse = {
  status: number;
  data: { data: GithubContributions };
};

export type GithubContributions = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        colors: string[];
        weeks: string[];
        months: string[];
      };
    };
  };
};

export type Contributions = {
  date: string;
  contributionCount: number;
  color: string;
};

export type Months = {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionCounts: number;
};

export type CalendarProps = {
  totalContributions?: number;
  weeks: {
    firstDay: string;
    contributionDays: Contributions[];
  }[];
  months: Months[];
  colors: string[];
};

export type CalendarResponse = {
  contributionsCollection: {
    contributionCalendar: CalendarProps;
  };
};

export const GITHUB_ACCOUNTS = [
  {
    username: process.env.GITHUB_READ_USERNAME,
    token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    endpoint: `/api/github?type=personal`,
    type: "personal",
    is_active: true,
  },
];
