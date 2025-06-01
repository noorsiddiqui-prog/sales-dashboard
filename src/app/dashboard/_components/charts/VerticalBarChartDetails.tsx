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
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <BarChartSalesCard label="Total Earnings" amount="$84,378" tagLabel="12%" tagColor="bg-[var(--blue-light)]" />
          <div className="h-20 w-0.5 bg-[var(--border)]"></div>
          <BarChartSalesCard label="Total Earnings" amount="$84,378" tagLabel="12%" tagColor="bg-[var(--blue-light)]" />
        </div>
        <div className="flex flex-col items-start mb-2">
          {data.datasets.map((ds, i) => (
            <div key={i} className="flex items-center space-x-2 text-sm">
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
