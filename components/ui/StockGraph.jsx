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
  LineController,
  BarController,
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
  LineController,
  BarController
);

export default function StockGraph({ data }) {
  const options = {
    maintainAspectRatio: false, // ✅ allows responsive resizing
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12, // ✅ smaller font for mobile
          },
        },
      },
      title: {
        display: true,
        text: "Stock Price & Volume",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 30, // ✅ prevents label overlap
        },
      },
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

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
