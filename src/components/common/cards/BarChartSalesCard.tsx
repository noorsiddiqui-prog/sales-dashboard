import { FC } from "react";
import StatsTag from "../Tags/StatsTag";

interface IBarChartSalesCardProps {
    label: string;
    amount: string;
    tagLabel: string;
    tagColor: string;
}

const BarChartSalesCard: FC<IBarChartSalesCardProps> = ({
    label,
    amount,
    tagLabel,
    tagColor,
}) => {
  return (
    <div>
      <p
        className="font-sans text-[var(--icon-color)] 
      text-sm font-[500] opacity-80"
      >
        {label}
      </p>
      <p
        className="font-sans text-[var(--foreground)] 
      text-2xl font-[600] mt-1"
      >
        {amount}
      </p>
      <div className="w-18 mt-1">
        <StatsTag label={tagLabel} color={`${tagColor} || "bg-[var(--blue-light)]"`} />
      </div>
    </div>
  );
};

export default BarChartSalesCard;
