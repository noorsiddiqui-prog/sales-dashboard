import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Used", "Remaining", "Available", "Pending", "Other"],
  datasets: [
    {
      label: "Usage",
      data: [50, 40, 30, 20, 10],
      backgroundColor: ["#36A2EB", "#ff6200", "#9e76fb8b", "#7ea6fd89", "#E5E7EB"],
      borderWidth: 0,
      borderRadius: 4,
      spacing: 15,
    },
  ],
};

const options = {
  rotation: -100, // Start angle (degrees)
  circumference: 200, // Draw only half circle
  cutout: "80%", // Donut thickness
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom" as const,
    },
  },
};

export default function HalfDonutChart() {
  return (
    <div className="w-[200px] h-[200px]">
      <Doughnut data={data} options={options} />
    </div>
  );
}
