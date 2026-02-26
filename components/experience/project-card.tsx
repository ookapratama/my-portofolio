"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";
import SkillsIcon from "../common/skills-icon";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 max-w-sm bg-background/60 backdrop-blur-md border border-border/50 rounded-xl shadow-lg transition-colors hover:bg-background/80"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[200px]"
      >
        <Image
          className="rounded-lg border border-border/50 object-cover shadow-2xl"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
        />
      </div>
      <div
        style={{
          transform: "translateZ(30px)",
        }}
        className="pt-5 space-y-3"
      >
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
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm">
        {project.type === "Projects" ? (
          <Icons.userFill className="h-4 w-4 text-primary" />
        ) : (
          <Icons.work className="h-4 w-4 text-primary" />
        )}
      </div>
    </motion.div>
  );
}
