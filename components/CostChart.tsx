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

  const data = {
    labels: ["Compute", "Storage", "Network"],
    datasets: [
      {
        label: "Monthly Cloud Cost ($)",
        data: [125, 342, 89],

        backgroundColor: [
          "rgba(59,130,246,0.7)",
          "rgba(168,85,247,0.7)",
          "rgba(34,197,94,0.7)"
        ],

        hoverBackgroundColor: [
          "rgba(59,130,246,1)",
          "rgba(168,85,247,1)",
          "rgba(34,197,94,1)"
        ],

        borderColor: [
          "rgb(59,130,246)",
          "rgb(168,85,247)",
          "rgb(34,197,94)"
        ],

        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Cloud Cost Analysis",
      },
    },
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-xl shadow">
      <Bar data={data} options={options} />
    </div>
  )
}