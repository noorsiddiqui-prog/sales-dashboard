"use client";
import { FC } from "react";
interface IProgressChartProps {
    progress: number;
}

const ProgressChart: FC<IProgressChartProps> = ({ progress }) => {
  return (
    <div>
      <div className="relative">
        <div className="h-12 w-full bg-[var(--card)] rounded-xl"></div>
        <div className={`h-12 w-[${progress}%] bg-[var(--logo-color)] absolute top-0 left-0 rounded-l-xl`} />
      </div>
    </div>
  );
};

export default ProgressChart;