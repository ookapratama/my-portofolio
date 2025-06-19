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


export const ABOUT = `
<p>
  Hello! My name is Judhistira Ooka Pratama, a versatile <b>Full-stack Developer with a strong backend focus</b> and a keen interest in <b>Artificial Intelligence</b>. I bring ${
    new Date().getFullYear() - 2022
  } years of professional experience, and a total of ${
    new Date().getFullYear() - 2021
  } years in software development since 2021. My core expertise lies in <b>TypeScript and PHP</b>, complemented by extensive knowledge in server-side technologies, database management, and exploring AI applications.
</p>
<p>
  Throughout my career, I've consistently delivered robust and scalable solutions, adept at integrating complex databases and ensuring seamless data flow across systems. My focus on optimizing performance and security has led to significant improvements in application efficiency and reliability.
</p>
<p>
  Keeping up with evolving technology trends, especially in the realm of AI, is a priority for me. I am dedicated to creating innovative solutions that not only align with but also propel the strategic goals of an organization forward. My analytical approach and meticulous attention to system architecture have been pivotal in solving intricate problems and fostering technological advancement in every project I partake in.
</p>
`;
