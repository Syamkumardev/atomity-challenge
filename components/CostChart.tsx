"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function CostChart() {

  const costs = [125, 342, 89]
  const maxCost = Math.max(...costs)

  const data = {
    labels: ["Compute", "Storage", "Network"],
    datasets: [
      {
        label: "Monthly Cloud Cost ($)",
        data: costs,

        backgroundColor: costs.map((value) =>
          value === maxCost
            ? "rgba(239,68,68,0.9)"   // highest cost → red
            : "rgba(59,130,246,0.7)"  // normal → blue
        ),

        hoverBackgroundColor: costs.map((value) =>
          value === maxCost
            ? "rgba(239,68,68,1)"
            : "rgba(59,130,246,1)"
        ),

        borderRadius: 10,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Cloud Cost Analysis",
      },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,   // remove vertical grid
        },
      },
      y: {
        grid: {
          display: false,   // remove horizontal grid
        },
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-xl shadow">
      <Bar data={data} options={options} />
    </div>
  )
}