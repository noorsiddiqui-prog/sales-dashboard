"use client";
import VisitorsProgressCard from "@/components/common/cards/VisitorsProgressCard";
import MenuButton from "@/components/common/Menus/MenuButton";
import ChartTitle from "@/components/labels/ChartTitle";
import dynamic from "next/dynamic";
import { FC } from "react";

interface IMapChartProps {}

const UserMap = dynamic(() => import("@/components/maps/UserMap"), {
  ssr: false,
});

const MapChart: FC<IMapChartProps> = (props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <ChartTitle title="Visitors" />
        <div>
          <MenuButton onChange={(value) => console.log(value)} />
        </div>
      </div>
      <div className=" flex gap-4 w-full mt-6">
        <div className="w-full h-[100px]">
          <UserMap />
        </div>
        <div className="w-full">
          <VisitorsProgressCard />
        </div>
      </div>
    </div>
  );
};

export default MapChart;
