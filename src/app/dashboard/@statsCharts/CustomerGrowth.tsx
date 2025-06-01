"use client";
import NavIconButton from "@/components/common/IconButtons/NavIconButton";
import ChartTitle from "@/components/labels/ChartTitle";
import { FC } from "react";
import { HiDotsVertical } from "react-icons/hi";
import HeaderClasses from "@/styles/classes/HeaderClasses";
import StatsTag from "@/components/common/Tags/StatsTag";
import ProgressChart from "./ProgressChart";
import { PiUsersBold } from "react-icons/pi";

interface ICustomerGrowthProps {}

const CustomerGrowth: FC<ICustomerGrowthProps> = (props) => {
  const handleMenuClick = () => {};
  return (
    <div className="bg-[var(--purple-light)] rounded-lg p-4">
      <div className="flex justify-between items-center">
        <ChartTitle title="Customer Growth" />
        <NavIconButton
          className={HeaderClasses.navIconBtnTransparent}
          onClick={handleMenuClick}
          icon={<HiDotsVertical />}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-[var(--foreground)] font-[600] font-sans text-2xl">
          83%
        </div>
        <div>
          <StatsTag label="+2%" color="bg-[var(--card)]" />
          <p className="mt-1 text-[var(--menu-button-color)] font-[500] font-sans text-xs">
            From last week
          </p>
        </div>
      </div>

      <div className="mt-3">
        <ProgressChart progress={83} />
      </div>

      <div className="flex items-center mt-4">
        <div className="text-[var(--menu-button-color)]">
          <PiUsersBold style={{ fontSize: "20px" }} />
        </div>
        <p className="ml-2 font-sans font-[500] text-md">185,854</p>
        <p className="ml-2 text-[var(--menu-button-color)] font-sans text-sm">(+1,250)</p>
      </div>
    </div>
  );
};

export default CustomerGrowth;
