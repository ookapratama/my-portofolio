"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";

interface LandingContentProps {
  ookaImg: any;
  featuredExperiences: any[];
  featuredSkills: any[];
}

export function LandingContent({
  ookaImg,
  featuredExperiences,
  featuredSkills,
}: LandingContentProps) {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
          <Image
            src={ookaImg}
            height={100}
            width={100}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary shadow-2xl"
            alt="Ooka Pratama - Backend Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ooka Pratama
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl text-primary"
          >
            Backend Developer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-muted-foreground text-sm sm:text-base italic">
              {t.hero.greeting}
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/ookapratama"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> {t.hero.ctaGithub}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/dashboard"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                <Icons.dashboard className="w-4 h-4 mr-2" />{" "}
                {t.hero.ctaDashboard}
              </Link>
            </AnimatedText>
            <AnimatedText delay={1}>
              <Link
                href={"/contact"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                <Icons.contact className="w-4 h-4 mr-2" /> {t.hero.ctaContact}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-10 animate-bounce" />
          </AnimatedText>
        </div>
      </section>

      {/* Skills */}
      <AnimatedSection
        className="container space-y-6 bg-muted/50 backdrop-blur-sm py-16 rounded-3xl"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.sections.skillsTitle}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.sections.skillsDesc}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-20 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.sections.expTitle}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.sections.expDesc}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center mt-10">
          <Link href="/experience">
            <Button variant={"outline"} size="lg" className="rounded-full px-8">
              {t.sections.viewAll}{" "}
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </>
  );
}
