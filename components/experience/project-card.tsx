"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";
import SkillsIcon from "../common/skills-icon";

interface ProjectCardProps {
  project: ExperienceInterface;
}

import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguageStore();
  const t = translations[language].experience;

  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-xl shadow-lg">
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border/50 object-cover shadow-2xl"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground/90 text-sm">
          {project.shortDescription}
        </p>
        <div className="flex pb-3 gap-2 flex-wrap">
          {project.stackIcons.map((item, index) => (
            <SkillsIcon key={index} icons={item} size={25} />
          ))}
        </div>
        <Link href={`/experience/${project.id}`}>
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            {t.readMore}
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-background border border-border shadow-sm">
        {project.type === "Projects" ? (
          <Icons.userFill className="h-4 w-4 text-primary" />
        ) : (
          <Icons.work className="h-4 w-4 text-primary" />
        )}
      </div>
    </div>
  );
}
