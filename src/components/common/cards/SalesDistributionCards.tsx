"use client";
import { FC } from "react";

interface ISalesDistributionCardsProps {
  label: string;
  value: string;
  count: string;
  percentage: string;
  color: string;
}

const SalesDistributionCards: FC<ISalesDistributionCardsProps> = ({
  label,
  value,
  count,
  percentage,
  color,
}) => {
  return (
    <div className="font-sans flex justify-between items-center">
      <div className="flex items-center">
        <p
          className="inline-block mr-3"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: color,
          }}
        />
        <div className="">
          <p className="text-[var(--foreground)] font-[500] text-md">{label}</p>
          <div className="flex items-center">
            <p className="text-[var(--foreground)] opacity-50 font-[500] text-xs ">
              {value}
            </p>
            <span className="bg-[var(--foreground)] rounded-full opacity-50 w-2 h-2 mx-1.5"></span>
            <p className="text-[var(--foreground)] opacity-50 font-[500] text-xs ">
              {count}
            </p>
          </div>
        </div>
      </div>
      <div className="text-[var(--foreground)] font-[500] sm:text-xl text-sm ">
        {percentage}
      </div>
    </div>
  );
};

export default SalesDistributionCards;
