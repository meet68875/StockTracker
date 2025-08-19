"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,   // ✅ controller for line charts
  BarController,    // ✅ controller for bar charts
} from "chart.js";

import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,   // ✅ register
  BarController     // ✅ register
);

export default function StockGraph({ data }) {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Stock Price & Volume",
      },
    },
    scales: {
      yPrice: {
        type: "linear",
        display: true,
        position: "left",
      },
      yVolume: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
}
