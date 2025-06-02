import BarChartSalesCard from "@/components/common/cards/BarChartSalesCard";
import { FC } from "react";
interface IVerticalBarChartDetailsProps {
  data: {
    datasets: {
      backgroundColor: string;
      label: string;
    }[];
  };
}

const VerticalBarChartDetails: FC<IVerticalBarChartDetailsProps> = ({
  data,
}) => {
  return (
    <div className="text-black">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center">
        <div className="flex items-center space-x-8">
          <BarChartSalesCard label="Total Earnings" amount="$84,378" tagLabel="12%" tagColor="bg-[var(--blue-light)]" />
          <div className="h-20 w-0.5 bg-[var(--border)]"></div>
          <BarChartSalesCard label="Total Earnings" amount="$84,378" tagLabel="12%" tagColor="bg-[var(--blue-light)]" />
        </div>
        <div className="flex sm:flex-col flex-row items-start mb-2 sm:pl-0 pl-4 sm:mt-0 mt-4">
          {data.datasets.map((ds, i) => (
            <div key={i} className="flex items-center space-x-2 text-sm sm:mr-0 mr-4">
              <p
                className="inline-block"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: ds.backgroundColor as string,
                }}
              />
              <p className="text-[var(--menu-button-color)] font-[500] font-sans text-xs">
                {ds.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalBarChartDetails;
