"use client"
import { FC } from "react";
import VerticalBarChart from "../_components/charts/VerticalBarChart";
import MenuButton from "@/components/common/Menus/MenuButton";
import ChartTitle from "@/components/labels/ChartTitle";
interface IBarChartProps {}

const BarChart: FC<IBarChartProps> = (props) => {
  return (
    <div className="bg-[var(--card)] rounded-lg p-4">
      <div className="flex justify-between items-center">
        <ChartTitle title="Sales Overview" />
        <div>
          <MenuButton onChange={(value) => console.log(value)} />
        </div>
      </div>
      <VerticalBarChart />
    </div>
  );
};

export default BarChart;
