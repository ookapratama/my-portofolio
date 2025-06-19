"use client";

import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { BiCodeAlt as SkillsIcon } from "react-icons/bi";

import InfiniteLoopSlider from "@/components/common/infinite-loop-slider";
import SectionHeading from "../common/section-header";
import SectionSubHeading from "../common/section-sub-header";
import { StackIcons } from "../common/icons";

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className="flex items-center gap-2 mr-3 rounded-full py-4 px-7 w-max dark:text-neutral-50 shadow-sm border">
    {icon}
    <span>{title}</span>
  </div>
);

const Skills = () => {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(StackIcons);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);

  const sliders = Array.from({ length: 3 }, (_, index) => {
    const sliderSkills = [...shuffledSkills].sort(() => Math.random() - 0.5);
    return (
      <InfiniteLoopSlider key={index} isReverse={index === 1}>
        {sliderSkills.map(([title, icon], index) => (
          <Tag key={index} icon={icon} title={title} />
        ))}
      </InfiniteLoopSlider>
    );
  });

  return (
    <div className="space-y-8 ">
      <div className="space-y-2">
        <SectionHeading
          title="Skills"
          icon={<SkillsIcon size={24} className="mr-1" />}
        />
        <SectionSubHeading>
          <p>My professional skills.</p>
        </SectionSubHeading>
      </div>

      <div className="flex w-full">
        <div className="relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden">
          {sliders}
          <StyledFade className="hidden dark:flex fade" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #030303,
    transparent 20%,
    transparent 80%,
    #030303
  );
  position: absolute;
  inset: 0;
`;
