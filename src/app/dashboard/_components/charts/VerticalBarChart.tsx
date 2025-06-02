"use client";
import { FC } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import VerticalBarChartDetails from "./VerticalBarChartDetails";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
      align: "end" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
        useBorderRadius: true,
        borderRadius: 16,
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Earnings",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#7a7cf062",
      barThickness: 20,
      borderRadius: 4,
      barPercentage: 0.3,
      categoryPercentage: 1,
      maxBarThickness: 20,
    },
    {
      label: "Expenditures",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "#ff6200",
      barThickness: 20,
      borderRadius: 4,
      barPercentage: 0.3,
      categoryPercentage: 1,
      maxBarThickness: 20,
    },
  ],
};

interface IVerticalBarChartProps {}

const VerticalBarChart: FC<IVerticalBarChartProps> = (props) => {
  return (
    <div className="w-full">
      {/* Custom vertical legend */}
      <div className="my-4">
        <VerticalBarChartDetails data={data} />
      </div>

      {/* Bar chart */}
      <div className="h-[275px]">
        <Bar
          options={{
            ...options,
            plugins: { ...options.plugins, legend: { display: false } },
          }}
          data={data}
        />
      </div>
    </div>

    // <div className="h-[400px] w-[600px]">
    //   <Bar options={options} data={data} />
    // </div>
  );
};
export default VerticalBarChart;
