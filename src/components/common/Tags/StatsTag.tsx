import { FC } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

interface IStatsTagProps {
  label: string;
  color?: string;
}

const StatsTag: FC<IStatsTagProps> = ({ label, color }) => {
  return (
    <div className={
        `flex items-center gap-2 
        font-sans text-[var(--menu-button-color)] 
        sm:text-xs text-[10px] font-[500]
        sm:px-2 px-1 py-1
        rounded-lg
        ${color}
        `
      }
    >
      <FaArrowTrendUp style={{ fontSize: "16px" }} />
      <p>{label}</p>
    </div>
  );
};

export default StatsTag;
