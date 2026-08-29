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
    name: "System Design",
    description:
      "Experienced in designing scalable backend architectures — service boundaries, data flow, and API contracts — balancing performance, maintainability, and reliability.",
    rating: 5,
    icon: StackDashboardIcons.systemDesign,
  },
  {
    name: "Data Structures",
    description:
      "Solid foundation in data structures and algorithms, applied to write efficient, correct, and maintainable backend code.",
    rating: 5,
    icon: StackDashboardIcons.dataStructures,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 3);
