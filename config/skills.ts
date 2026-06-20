import { type JSX } from "react";

import { StackDashboardIcons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: JSX.Element;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Proficient in Python for backend development (Flask), scripting, and utilizing core libraries (Pandas, NumPy, Scikit-learn) to support data processing and ML initiatives.",
    rating: 5,
    icon: StackDashboardIcons.python,
  },
  {
    name: "n8n",
    description:
      "Experienced with n8n for building custom workflows and integrations. Capable of automating complex data movement and connecting various APIs/services without extensive coding.",
    rating: 5,
    icon: StackDashboardIcons.n8n,
  },
  {
    name: "Data Science",
    description:
      "Developing strong capabilities in the ML lifecycle, from EDA and feature engineering to model building and deployment.",
    rating: 5,
    icon: StackDashboardIcons.data,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 3);
