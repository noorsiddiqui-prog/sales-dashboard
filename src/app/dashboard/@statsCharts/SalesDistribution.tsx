"use client";
import { FC } from "react";
import HalfDonutChart from "../_components/charts/HalfDonutChart";
import ChartTitle from "@/components/labels/ChartTitle";
import NavIconButton from "@/components/common/IconButtons/NavIconButton";
import { HiDotsVertical } from "react-icons/hi";
import HeaderClasses from "@/styles/classes/HeaderClasses";
import SalesDistributionCards from "@/components/common/cards/SalesDistributionCards";
import { SalesDistributionCardsData } from "@/config/constants/DashboardData";
interface ISalesDistributionProps {}

const SalesDistribution: FC<ISalesDistributionProps> = (props) => {
  const handleMenuClick = () => {};

  return (
    <div className="bg-[var(--card)] rounded-lg px-4 pt-4 w-full">
      <div className="flex justify-between items-center">
        <ChartTitle title="Sales Distribution" />
        <NavIconButton
          className={HeaderClasses.navIconBtnTransparent}
          onClick={handleMenuClick}
          icon={<HiDotsVertical />}
        />
      </div>
      <div className="relative">
        <div className="flex w-full justify-center mt-[-10px]">
          <HalfDonutChart />
        </div>
        <div className="absolute top-26 sm:left-20 left-[42px] text-[var(--menu-button-color)] text-center">
          <p className="text-sm font-[500] font-sans text-[var(--foreground)] opacity-50">
            Total Products Sales
          </p>
          <p className="text-xl font-[600] font-sans text-[var(--foreground)]">
            20,000
          </p>
          <p className="text-sm font-[500] font-sans text-[var(--foreground)] opacity-50">
            $1,000,000
          </p>
        </div>
      </div>

      <div className="mt-[-10px] pb-1">
        {SalesDistributionCardsData.map((v, i) => {
          return (
            <div key={i} className="mb-4">
              <SalesDistributionCards
                key={i}
                label={v.label}
                value={v.value}
                count={v.count}
                percentage={v.percentage}
                color={v.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesDistribution;
