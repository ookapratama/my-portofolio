import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Trash,
  User,
  X,
  Zap,
  Instagram,
  LayoutDashboard,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiHono,
  SiGithub,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiGoogleauthenticator,
  SiTailwindcss,
  SiExpo,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiJquery,
  SiPython,
  SiVercel,
  SiJupyter,
  SiWordpress,
  SiPostgresql,
  SiFlask,
  SiAxios,
  SiShadcnui,
  SiN8N,
  SiMlflow,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiPlotly,
} from "react-icons/si";
import { TbHexagonLetterSFilled } from "react-icons/tb";

export type stackCardProps = {
  [key: string]: (size?: number) => JSX.Element;
};

const defaultIconSize: number = 50;

export const StackCardIcons: stackCardProps = {
  nextjs: (size = defaultIconSize) => <SiNextdotjs size={size} />,
  express: (size = defaultIconSize) => <SiExpress size={size} />,
  nodejs: (size = defaultIconSize) => (
    <SiNodedotjs size={size} className="text-green-600" />
  ),
  typescript: (size = defaultIconSize) => (
    <SiTypescript className="text-blue-600" size={size} />
  ),
  javascript: (size = defaultIconSize) => (
    <SiJavascript className="text-yellow-400" size={size} />
  ),
  html5: (size = defaultIconSize) => (
    <SiHtml5 size={size} className="text-orange-600" />
  ),
  css3: (size = defaultIconSize) => (
    <SiCss3 size={size} className="text-blue-600" />
  ),
  react: (size = defaultIconSize) => (
    <SiReact className="text-sky-500" size={size} />
  ),
  bootstrap: (size = defaultIconSize) => (
    <SiBootstrap className="text-purple-600" size={size} />
  ),
  hono: (size = defaultIconSize) => (
    <SiHono className="text-orange-600" size={size} />
  ),
  mysql: (size = defaultIconSize) => <SiMysql size={size} />,
  mongo: (size = defaultIconSize) => (
    <SiMongodb size={size} className="text-green-600" />
  ),
  graphql: (size = defaultIconSize) => (
    <SiGraphql size={size} className="text-pink-600" />
  ),
  redux: (size = defaultIconSize) => (
    <SiRedux size={size} className="text-pink-600" />
  ),
  googleAuth: (size = defaultIconSize) => (
    <SiGoogleauthenticator size={size} className="text-pink-600" />
  ),
  tailwind: (size = defaultIconSize) => (
    <SiTailwindcss size={size} className="text-pink-600" />
  ),
  github: (size = 25) => <SiGithub size={size} />,
  laravel: (size = defaultIconSize) => <SiLaravel size={size} className="text-red-500" />,
  php: (size = defaultIconSize) => <SiPhp size={size} className="text-purple-500" />,
  jquery: (size = defaultIconSize) => <SiJquery size={size} />,
  axios: (size = defaultIconSize) => <SiAxios size={size} />,
  shadcn: (size = defaultIconSize) => <SiShadcnui size={size} />,
  pandas: (size = defaultIconSize) => <SiPandas size={size} className="text-gray-700" />,
  scikitlearn: (size = defaultIconSize) => <SiScikitlearn size={size} className="text-orange-400" />,
  numpy: (size = defaultIconSize) => <SiNumpy size={size} className="text-blue-500" />,
  plotly: (size = defaultIconSize) => <SiPlotly size={size} className="text-gray-800" />,
  python: (size = defaultIconSize) => <SiPython size={size} />,
};

export type stacksProps = {
  [key: string]: JSX.Element;
};

//  untuk di skills
const iconSize: number = 30;
export const StackIcons: stacksProps = {
  "Next.js": <SiNextdotjs size={iconSize} />,
  Express: <SiExpress size={iconSize} />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Typescript: <SiTypescript className="text-blue-600" size={iconSize} />,
  Javascript: <SiJavascript className="text-yellow-400" size={iconSize} />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-600" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-600" />,
  "React.js": <SiReact className="text-sky-500" size={iconSize} />,
  "React Native": <SiReact size={iconSize} className="text-sky-500" />,
  "C++": <SiCplusplus size={iconSize} className="text-blue-700" />,
  Bootstrap: <SiBootstrap className="text-purple-600" size={iconSize} />,
  Hono: <SiHono className="text-orange-600" size={iconSize} />,
  PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  Jquery: <SiJquery size={iconSize} />,
  Python: <SiPython size={iconSize} />,
  MySQL: <SiMysql size={iconSize} />,
  Github: <SiGithub size={iconSize} />,
  Expo: <SiExpo size={iconSize} />,
  Tailwind: <SiTailwindcss size={iconSize} className="text-blue-400" />,
  Vercel: <SiVercel size={iconSize} />,
  // WordPress: <SiWordpress size={iconSize} />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-700" />,
  Flask: <SiFlask size={iconSize} className="text-green-500" />,
  Jupyter: <SiJupyter size={iconSize} className="text-orange-600" />,
  n8n: <SiN8N size={iconSize} className="text-red-400" />,
  TensorFlow: <SiTensorflow size={iconSize} className="text-orange-500" />,
  PyTorch: <SiPytorch size={iconSize} className="text-red-400" />,
  Pandas: <SiPandas size={iconSize} />,
  "Scikit-learn": <SiScikitlearn size={iconSize} />,

};

//  untuk di skills dashboard
const iconSizeDashboard: number = 60;
export const StackDashboardIcons: stacksProps = {
  python: <SiPython size={iconSizeDashboard} />,
  n8n: <SiN8N size={iconSizeDashboard} className="text-red-400" />,
  tensor: <SiTensorflow size={iconSizeDashboard} className="text-orange-500" />,
  // nextjs: <SiNextdotjs size={iconSizeDashboard} />,
  // typescript: <SiTypescript className="text-blue-600" size={iconSizeDashboard} />,
  // hono: <SiHono className="text-orange-600" size={iconSizeDashboard} />,
  // express: <SiExpress size={iconSizeDashboard} />,

};

export const Icons = {
  dashboard: LayoutDashboard,
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  gmail: SiGmail,
  linkedin: SiLinkedin,
  userFill: BiSolidUser,
  work: HiBriefcase,
  superprof: TbHexagonLetterSFilled,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
  retro: Palette,
  cyberpunk: Zap,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
  instagram: Instagram,
};
