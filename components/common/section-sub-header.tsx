import type { ReactNode } from "react";

interface SectionSubHeadingProps {
  children?: ReactNode;
  className?: string;
}

const SectionSubHeading = ({
  children,
  className = "",
}: SectionSubHeadingProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionSubHeading;
