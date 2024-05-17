"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  PieController,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, PieController);
ChartJS.register(ArcElement, Tooltip, PieController, Legend);

const PieChart = ({ data, options }) => {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
