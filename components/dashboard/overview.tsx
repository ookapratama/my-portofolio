"use client";

import { type CalendarProps } from "@/config/constants";
import OverviewItem from "./overview-item";
import { useLanguageStore } from "@/app/store/use-language";
import { translations } from "@/config/translations";
import { getContributionStats } from "@/lib/contributions";

type OverviewProps = {
  data: CalendarProps;
};

const Overview = ({ data }: OverviewProps) => {
  const { language } = useLanguageStore();
  const t = translations[language].dashboard;

  const { total, thisWeek, best, average } = getContributionStats(data);

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
      <OverviewItem label={t.total} value={total} />
      <OverviewItem label={t.thisWeek} value={thisWeek} />
      <OverviewItem label={t.bestDay} value={best} />
      <OverviewItem label={t.average} value={average} unit={t.perDay} />
    </div>
  );
};

export default Overview;
