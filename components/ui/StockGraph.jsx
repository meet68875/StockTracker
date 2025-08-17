// components/ui/StockGraph.jsx
"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom"; // ✅ Import plugin

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin // ✅ Register plugin
);

export const StockGraph = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        labels: {
          font: { size: 12 },
        },
      },
      tooltip: {
        bodyFont: { size: 12 },
        titleFont: { size: 14 },
      },
      title: {
        display: true,
        text: "Stock Price & Volume",
        font: { size: 16 },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x", // pan along X axis (time)
        },
        zoom: {
          wheel: {
            enabled: true, // zoom with scroll
          },
          pinch: {
            enabled: true, // zoom with pinch on mobile
          },
          mode: "x", // zoom along X axis (time)
        },
        limits: {
          x: { min: "original", max: "original" },
          y: { min: "original", max: "original" },
        },
      },
    },
    scales: {
      yPrice: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Price (INR)",
          font: { size: 14 },
        },
        ticks: {
          font: { size: 11 },
        },
      },
      yVolume: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Volume",
          font: { size: 14 },
        },
        ticks: { font: { size: 11 } },
        grid: { drawOnChartArea: false },
      },
      x: {
        ticks: {
          font: { size: 11 },
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      <Line data={data} options={options} />
    </div>
  );
};
