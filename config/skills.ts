import {
  Icons,
  StackDashboardIcons,
  StackIcons,
} from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Python is powerful... and fast; plays well with others; runs everywhere; is friendly & easy to learn; is Open.",
    rating: 5,
    icon: StackDashboardIcons.python,
  },
  // {
  //   name: "Hono",
  //   description:
  //     "Fast, lightweight, built on Web Standards. Support for any JavaScript runtime.",
  //   rating: 5,
  //   // icon: StackIcons.react,
  //   icon: StackDashboardIcons.hono,
  // },
  {
    name: "n8n",
    description:
      "The potential of AI with the power of automation, The practical way to make a business impact with AI",
    rating: 5,
    // icon: StackIcons.react,
    icon: StackDashboardIcons.n8n,
  },
  {
    name: "Data Science",
    description:
      "Developing strong capabilities in the ML lifecycle, from EDA and feature engineering to model building and deployment.",
    rating: 5,
    icon: StackDashboardIcons.data,
  },
  // {
  //   name: "TensorFlow",
  //   description:
  //     "An end-to-end platform for machine learning, TensorFlow makes it easy to create ML models that can run in any environment. ",
  //   rating: 5,
  //   icon: StackDashboardIcons.tensor,
  // },
  // {
  //   name: "React",
  //   description:
  //     "Craft interactive user interfaces using components, state, props, and virtual DOM.",
  //   rating: 5,
  //   // icon: StackIcons.react,
  //   icon: StackIcons.react,
  // },
  // {
  //   name: "express.js",
  //   description:
  //     "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
  //   rating: 5,
  //   icon: StackIcons.express,
  // },
  // {
  //   name: "Node.js",
  //   description:
  //     "Run JavaScript on the server side, enabling dynamic and responsive applications.",
  //   rating: 5,
  //   icon: StackIcons.nodejs,
  // },
  // {
  //   name: "Javascript",
  //   description:
  //     "Create interactive and dynamic web experiences with the versatile scripting language.",
  //   rating: 5,
  //   icon: StackIcons.javascript,
  // },
  // {
  //   name: "HTML 5",
  //   description:
  //     "Structure web content beautifully with the latest version of HyperText Markup Language.",
  //   rating: 4,
  //   icon: StackIcons.html5,
  // },
  // {
  //   name: "CSS 3",
  //   description:
  //     "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
  //   rating: 4,
  //   icon: StackIcons.css3,
  // },
  // {
  //   name: "React Native",
  //   description:
  //     "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
  //   rating: 4,
  //   icon: StackIcons.react,
  // },
  // {
  //   name: "Bootstrap",
  //   description:
  //     "Quickly create responsive and appealing web designs using a popular CSS framework.",
  //   rating: 2,
  //   icon: StackIcons.bootstrap,
  // },
  // {
  //   name: "MySQL",
  //   description:
  //     "Manage and organize relational databases efficiently for data-driven applications.",
  //   rating: 2,
  //   icon: StackIcons.mysql,
  // },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 3);
