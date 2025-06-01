"use client";
import { FC } from "react";
import BarChart from "./BarChart";
import SalesActivity from "./SalesActivity";
import CustomerGrowth from "./CustomerGrowth";
import SalesDistribution from "./SalesDistribution";
interface IStatsChartsProps {}

const StatsCharts: FC<IStatsChartsProps> = (props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <BarChart />
      </div>
      <div className="">
        <SalesActivity />
        <div className="mt-4">
          <CustomerGrowth />
        </div>
      </div>
      <div>
        <SalesDistribution />
      </div>
    </div>
  );
};

export default StatsCharts;
