import React from "react";
import "./chartweek.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
  datasets: [
    {
      label: "",
      data: [2400, 4000, 2000, 2500, 4000],
      fill: true,
      backgroundColor:
        "linear-gradient(180deg, #CEDDFF 0%, rgba(206, 221, 255, 0) 100%);",
      borderColor: "#5185F7",
      tension: 0.4,
    },
  ],
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}
