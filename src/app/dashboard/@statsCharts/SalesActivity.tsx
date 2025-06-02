"use client";
import NavIconButton from "@/components/common/IconButtons/NavIconButton";
import ChartTitle from "@/components/labels/ChartTitle";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import ActivityCard from "@/components/common/cards/ActivityCard";
import { activityData } from "@/config/constants/DashboardData";
import HeaderClasses from "@/styles/classes/HeaderClasses";

interface ISalesActivityProps {}

const SalesActivity: FC<ISalesActivityProps> = (props) => {
  const handleMenuClick = () => {};
  return (
    <div className="bg-[var(--sky-blue-300)] rounded-lg px-4 pt-4 pb-5">
      <div className="flex justify-between items-center">
        <ChartTitle title="Sales Activity" />
        <NavIconButton
          className={HeaderClasses.navIconBtnTransparent}
          onClick={handleMenuClick}
          icon={<HiDotsVertical />}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {activityData.map((v, index) => (
          <ActivityCard
            key={index}
            icon={<v.icon fontSize={20} />}
            title={v.title}
            count={v.count}
          />
        ))}
      </div>
    </div>
  );
};

export default SalesActivity;
