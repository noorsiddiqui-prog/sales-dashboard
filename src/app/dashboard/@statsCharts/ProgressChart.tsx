"use client";
import { FC } from "react";
interface IProgressChartProps {
  progress: number;
}

const ProgressChart: FC<IProgressChartProps> = ({ progress = 5 }) => {
  console.log(progress);
  return (
    <div>
      <div className="relative">
        <div className="h-12 w-full bg-[var(--card)] rounded-xl"></div>
        <div
          style={{ width: `${progress}%` }}
          className={`h-12 bg-[var(--logo-color)] absolute z-100 top-0 left-0 rounded-l-xl`}
        />
      </div>
    </div>
  );
};

export default ProgressChart;
