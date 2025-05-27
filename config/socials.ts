import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ookapratama",
    icon: Icons.gitHub,
    link: "https://github.com/ookapratama",
  },
  {
    name: "LinkedIn",
    username: "Naman Barkiya",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ooka-pratama-9b9035223/",
  },
  {
    name: "Instagram",
    username: "@ookapratama_",
    icon: Icons.instagram,
    link: "https://instagram.com/ookapratama_",
  },
  {
    name: "Gmail",
    username: "ookapratama2",
    icon: Icons.gmail,
    link: "mailto:ookapratama2@gmail.com",
  },
];
