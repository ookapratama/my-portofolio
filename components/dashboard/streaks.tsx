"use client";

import { type CalendarProps } from "@/config/constants";
import OverviewItem from "./overview-item";
import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";
import { getStreakStats } from "@/lib/contributions";

type StreaksProps = {
  data: CalendarProps;
};

const Streaks = ({ data }: StreaksProps) => {
  const { language } = useLanguageStore();
  const t = translations[language].dashboard;

  const { currentStreak, longestStreak } = getStreakStats(data);

  return (
    <div className="grid grid-cols-2 gap-3">
      <OverviewItem
        label={t.currentStreak}
        value={currentStreak}
        unit={t.days}
      />
      <OverviewItem
        label={t.longestStreak}
        value={longestStreak}
        unit={t.days}
      />
    </div>
  );
};

export default Streaks;
