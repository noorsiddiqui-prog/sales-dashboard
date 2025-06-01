"use client";
import NavIconButton from "@/components/common/IconButtons/NavIconButton";
import StatsTag from "@/components/common/Tags/StatsTag";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { RiExchangeDollarLine } from "react-icons/ri";

interface IStatsCardsData {
  label: string;
  value: string;
  iconColor: string;
  change: string;
  tagColor: string;
  tagSubTitle: string;
}

interface IDashboardCardsProps {
  data: IStatsCardsData;
}

const DashboardCards: FC<IDashboardCardsProps> = ({ data }) => {
  const { label, value, iconColor, change, tagColor, tagSubTitle } = data;
  const handleMenuClick = () => {};
  return (
    <div className="bg-[var(--card)] w-full h-[130px] rounded-lg p-4 space-y-6 shadow-lg">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`${iconColor} w-7 h-7 rounded-lg flex items-center justify-center`}>
            <RiExchangeDollarLine />
          </div>
          <div>
            <p className="text-[var(--menu-button-color)] text-sm font-[500] font-sans ">
              {label}
            </p>
          </div>
        </div>

        <div>
          <NavIconButton icon={<HiDotsVertical />} onClick={handleMenuClick} />
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <div
          className="
          font-sans text-[var(--menu-button-color)] 
          text-xl font-[600]"
        >
          {value}
        </div>

        <div>
          <StatsTag label={change} color={tagColor} />
          <p className="mt-1 text-[var(--menu-button-color)] opacity-50 text-xs font-[500] font-sans ">
            {tagSubTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
