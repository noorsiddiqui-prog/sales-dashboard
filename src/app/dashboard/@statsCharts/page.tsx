"use client";
import { FC } from "react";
import BarChart from "./BarChart";
import SalesActivity from "./SalesActivity";
import CustomerGrowth from "./CustomerGrowth";
import SalesDistribution from "./SalesDistribution";
import CategoryTableChart from "./CategoryTableChart";
import MapChart from "./MapChart";
import VisitorsProgressCard from "@/components/common/cards/VisitorsProgressCard";
interface IStatsChartsProps {}

const StatsCharts: FC<IStatsChartsProps> = (props) => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4">
        <div className="md:col-span-2 col-span-1">
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

      <div className="mt-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6">
        <div className="bg-[var(--card)] p-6">
          <CategoryTableChart />
        </div>
        
        <div className="w-full bg-[var(--card)] p-4">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default StatsCharts;
