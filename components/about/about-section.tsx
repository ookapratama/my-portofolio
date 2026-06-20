"use client";

import { type ReactNode } from "react";

import SectionHeading from "../common/section-header";
import SectionSubHeading from "../common/section-sub-header";

interface AboutSectionProps<T> {
  title: string;
  description: string;
  icon: ReactNode;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export default function AboutSection<T>({
  title,
  description,
  icon,
  items,
  renderItem,
}: AboutSectionProps<T>) {
  return (
    <section className="space-y-6 font-sora">
      <div className="space-y-2">
        <SectionHeading title={title} icon={icon} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">{description}</p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items?.map((item, index) => renderItem(item, index))}
      </div>
    </section>
  );
}
