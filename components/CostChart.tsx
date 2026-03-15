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
      },
    ],
  }

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <Bar data={data} />
    </div>
  )
}