"use client";

import clsx from "clsx";
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { type CalendarProps as CalendarDataProps } from "@/config/constants";

interface CalendarProps {
  data?: CalendarDataProps;
}

const Calendar = ({ data }: CalendarProps) => {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({
    count: null,
    date: null,
  });

  const [dimensions, setDimensions] = useState({
    cellSize: 20,
    gap: 3,
    containerWidth: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimension = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalWeeks = data?.weeks?.length || 53;
        console.log('data week length : ', data?.weeks?.length)
        console.log('containerWidth : ', containerWidth)
        console.log('totalWeeks : ', totalWeeks)

        const availableWidth = containerWidth - (totalWeeks - 1) * 3;
        const maxCellSize = Math.floor(availableWidth / totalWeeks);
        console.log('maxCell : ', maxCellSize)
        const cellSize = Math.max(8, Math.min(20, maxCellSize));
        console.log('cellSize : ', cellSize)

        setDimensions({
          cellSize,
          gap: cellSize < 12 ? 1 : 3,
          containerWidth,
        });
      }
    };

    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, [data?.weeks?.length]);

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  const getMonthWidth = (totalWeeks: number) => {
    return (dimensions.cellSize + dimensions.gap) * totalWeeks - dimensions.gap;
  };

  return (
    <div ref={containerRef} className="w-full">
      <div className="w-full">
        <ul
          className="flex justify-between gap-[3px] overflow-x-auto text-xs dark:text-neutral-400 md:justify-between"
          style={{ gap: `${dimensions.gap}px` }}
        >
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
              style={{
                minWidth: getMonthWidth(month.totalWeeks),
                fontSize: dimensions.cellSize < 12 ? "10px" : "12px",
              }}
            >
              {dimensions.cellSize < 12 ? month.name.slice(0, 3) : month.name}
            </li>
          ))}
        </ul>

        <div
          className="flex max-w-full mt-1 justify-between overflow-x-auto"
          style={{ gap: `${dimensions.gap}px` }}
        >
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const bgColor =
                  contribution.contributionCount > 0 && contribution.color;

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <motion.span
                    key={contribution.date}
                    initial="initial"
                    animate="animate"
                    variants={{
                      initial: { opacity: 0, translateY: -20 },
                      animate: {
                        opacity: 1,
                        translateY: 0,
                        transition: { delay: getRandomDelayAnimate },
                      },
                    }}
                    className="block rounded-sm bg-neutral-300 dark:bg-neutral-800 hover:ring-1 hover:ring-blue-400"
                    style={{
                      width: `${dimensions.cellSize}px`,
                      height: `${dimensions.cellSize}px`,
                      marginTop: `${Math.max(1, dimensions.gap / 2)}px`,
                      marginBottom: `${Math.max(3, dimensions.gap / 2)}px`,
                      backgroundColor: bgColor || undefined,
                    }}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="dark:text-neutral-400">Less</span>

          <ul className="flex gap-1">
            <motion.li
              className="rounded-sm bg-neutral-300 dark:bg-neutral-800"
              style={{
                height: `${Math.max(8, dimensions.cellSize / 2)}px`,
                width: `${Math.max(8, dimensions.cellSize / 2)}px`,
              }}
            />
            {contributionColors.map((item, index) => (
              <motion.li
                key={item}
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className="rounded-sm"
                style={{
                  backgroundColor: item,
                  height: `${Math.max(8, dimensions.cellSize / 2)}px`,
                  width: `${Math.max(8, dimensions.cellSize / 2)}px`,
                }}
              />
            ))}
          </ul>
          <span className="dark:text-neutral-400">More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? "opacity-100" : "opacity-0"}`,
            "rounded bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700 transition-opacity duration-200"
          )}
        >
          {selectContribution?.count} contirbutions on{" "}
          {selectContribution?.date}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
