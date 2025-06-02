import { FC } from "react";
import DashboardCards from "../_components/DashboardCards";
import { statsCardsData } from "@/config/constants/DashboardData";
interface IStatsCardsProps {}

const StatsCards: FC<IStatsCardsProps> = (props) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      {statsCardsData.map((v, i) => {
        return <DashboardCards data={v} key={i} />;
      })}
    </div>
  );
};

export default StatsCards;
