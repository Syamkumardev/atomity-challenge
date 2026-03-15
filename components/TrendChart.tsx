"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function TrendChart() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Cloud Cost Trend ($)",
        data: [400, 380, 420, 460, 430, 500],
        borderColor: "rgb(59,130,246)",
        backgroundColor: "rgba(59,130,246,0.4)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Cloud Cost Trend (Last 6 Months)",
      },
    },
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white rounded-xl shadow">
      <Line data={data} options={options} />
    </div>
  )
}