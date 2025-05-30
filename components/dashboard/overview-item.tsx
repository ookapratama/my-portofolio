import AnimateCounter from "../common/animated-counter";
import { Card } from "../ui/card";

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = "" }: OverviewItemProps) => {
  return (
    <Card className="flex flex-col self-center rounded-xl  py-3 px-4 border">
      <span className="text-sm">{label}</span>
      <div>
        <AnimateCounter
          className="text-xl lg:text-2xl font-medium text-green-600"
          total={value}
        />
        {unit && (
          <span className="text-md dark:text-neutral-600"> {unit} </span>
        )}
      </div>
    </Card>
  );
};

export default OverviewItem;
