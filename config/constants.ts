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
  | "PHP"
  | "Axios"
  | "Shadcn"
  | "RESTfull API"
  | "jQuery"
  | "n8n"
  | "Webhooks"
  | "Pandas"
  | "Scikit-learn"
  | "NumPy"
  | "Plotly"
  | "Google Sheets";

export type ValidCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Web Dev"
  | "Mobile Dev"
  | "User Management"
  | "3D Modeling"
  | "Problem-Solving"
  | "Debugging"
  | "System Administration"
  | "Technical Documentation"
  | "Automation"
  | "Machine Learning"
  | "Data Science"
  | "Artificial Intelligence"
  | "Workflow" ;
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
  Hello! My name is Judhistira Ooka Pratama, a <b>Backend Developer</b> with a strong foundation in full-stack principles and a keen focus on <b>integrating Artificial Intelligence and Machine Learning</b>. I bring ${
    new Date().getFullYear() - 2022
  } years of professional experience, and a total of ${
    new Date().getFullYear() - 2021
  } years in software development since 2021. My core expertise lies in <b>TypeScript and PHP</b>, complemented by extensive knowledge in server-side solutions, database management, and exploring AI applications.
</p>
<p>
  My career has been dedicated to delivering robust and scalable applications, with a consistent focus on optimizing performance and security. I excel at architecting server-side solutions, managing complex databases, and ensuring seamless data flow across systems.
</p>
<p>
  Currently, I am actively expanding my knowledge in Machine Learning and exploring automation tools to innovate how applications are built and function. I am driven by a passion for solving intricate problems and fostering technological advancement by combining my backend expertise with the power of AI to build the next generation of intelligent applications.
</p>
`;
