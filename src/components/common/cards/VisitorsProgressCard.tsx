"use client";

import CountryStats from "@/app/dashboard/_components/CountryStats";
import { countryStatsData } from "@/config/constants/DashboardData";
import { FC } from "react";

interface IVisitorsProgressCardProps {}

const VisitorsProgressCard: FC<IVisitorsProgressCardProps> = (props) => {
  return (
    <div>
      <div className="space-y-4">
        {countryStatsData.map((country, index) => (
          <CountryStats
            key={index}
            countryName={country.countryName}
            countryCode={country.countryCode}
            userCount={country.userCount}
            percent={country.percent}
          />
        ))}
      </div>
    </div>
  );
};

export default VisitorsProgressCard;
