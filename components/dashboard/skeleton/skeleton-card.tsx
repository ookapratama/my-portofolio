import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "../../ui/card";

interface SkeletonProps {
  className?: string;
}

export const SkeletonCard = ({ className = "" }: SkeletonProps) => {
  return (
    <>
      <Skeleton className={`rounded-xl  ${className}`}>
        <Card className="h-[100px] content-center">
          <div className="space-y-5 px-3">
            <Skeleton className="h-4 max-w-[150px]" />
            <Skeleton className="h-4 max-w-[100px]" />
          </div>
        </Card>
      </Skeleton>
    </>
  );
};

export const SkeletonCalendar = ({ className = "" }: SkeletonProps) => {
  return (
    <>
      <Skeleton className={`rounded-xl ${className}`}>
        <div className="space-y-28 my-5 px-3">
          <Skeleton className="h-4 max-w-[150px]" />

          <Skeleton className="h-4 max-w-[100px]" />
        </div>
      </Skeleton>
      <Skeleton className="h-4 max-w-[150px]" />
    </>
  );
};
