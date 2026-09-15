import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <div
      className={cn(
        "flex w-fit animate-looping-tag",
        isReverse && "[animation-direction:reverse]",
      )}
    >
      {children}
    </div>
  );
};

export default InfiniteLoopSlider;
