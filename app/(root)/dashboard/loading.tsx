import {
  SkeletonCalendar,
  SkeletonCard,
} from "@/components/dashboard/skeleton/skeleton-card";

export default function DashboardLoading() {
  return (
    <div className="space-y-6 py-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <SkeletonCalendar className="h-[220px]" />
    </div>
  );
}
