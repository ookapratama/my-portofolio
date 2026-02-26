"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

import { Icons } from "@/components/common/icons";
import ExperienceDescription from "@/components/experience/exp-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import ookaImg from "@/public/ooka1.webp";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";

interface ExperiencePageProps {
  params: {
    expId: string;
  };
}

export default function Experience({ params }: ExperiencePageProps) {
  const exp = Experiences.find((val) => val.id === params.expId);
  if (!exp) {
    redirect("/experience");
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/experience"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex",
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Experience
      </Link>

      <AnimatedSection direction="up">
        <time
          dateTime={exp.startDate.toISOString()}
          className="block text-sm text-muted-foreground"
        >
          {formatDateFromObj(exp.startDate)} —{" "}
          {exp.endDate instanceof Date
            ? formatDateFromObj(exp.endDate)
            : "Present"}
        </time>
        <div className="flex items-center justify-between mt-2">
          <h1 className="font-heading text-4xl leading-tight lg:text-5xl">
            {exp.companyName}
          </h1>
          <div className="flex items-center">
            {exp.githubLink && (
              <CustomTooltip text="Source Code">
                <Link href={exp.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </CustomTooltip>
            )}
            {exp.websiteLink && (
              <CustomTooltip text="Live Project">
                <Link href={exp.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {exp.category.map((cat, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
          >
            <Image
              src={ookaImg}
              alt={"ooka"}
              width={42}
              height={42}
              className="rounded-full bg-background border border-border"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{siteConfig.authorName}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection
        delay={0.2}
        className="my-8 overflow-hidden rounded-xl border bg-muted shadow-2xl"
      >
        <Image
          src={exp.companyLogoImg}
          alt={exp.companyName}
          width={1280}
          height={720}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </AnimatedSection>

      <div className="grid gap-12 mt-12">
        <AnimatedSection delay={0.3}>
          <h2 className="font-heading text-2xl lg:text-3xl mb-4 flex items-center gap-2">
            <div className="w-1 h-8 bg-primary rounded-full" />
            Description
          </h2>
          <ExperienceDescription
            paragraphs={exp.descriptionDetails.paragraphs}
            bullets={exp.descriptionDetails.bullets}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h2 className="font-heading text-2xl lg:text-3xl mb-4 flex items-center gap-2">
            <div className="w-1 h-8 bg-primary rounded-full" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {exp.techStack.map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {exp.pagesInfoArr.length > 0 && (
          <AnimatedSection delay={0.5}>
            <h2 className="font-heading text-2xl lg:text-3xl mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full" />
              Project Showcase
            </h2>
            <div className="space-y-16">
              {exp.pagesInfoArr.map((page, ind) => (
                <div key={ind} className="space-y-4">
                  <h3 className="flex items-center font-heading text-xl gap-2">
                    <Icons.star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    {page.title}
                  </h3>
                  {page.description && (
                    <p className="text-muted-foreground">{page.description}</p>
                  )}
                  <div className="grid gap-6">
                    {page.imgArr.map((img, imgInd) => (
                      <motion.div
                        key={imgInd}
                        whileHover={{ scale: 1.01 }}
                        className="overflow-hidden rounded-xl border shadow-lg"
                      >
                        <Image
                          src={img}
                          alt={page.title}
                          width={1280}
                          height={720}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>

      <hr className="mt-16 mb-8 border-border/50" />
      <div className="flex justify-center pb-10">
        <Link
          href="/experience"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full",
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    </article>
  );
}
