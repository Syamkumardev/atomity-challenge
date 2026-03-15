"use client"

import { motion } from "framer-motion"
import { FaCloud } from "react-icons/fa"
import CountUp from "react-countup"


type Props = {
  title: string
  value: string
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
    
  }
}

export default function AnimatedCard({ title, value }: Props) {
  return (
<motion.div
  variants={cardVariants}
  whileHover={{ scale: 1.05 }}
 className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300"
>
  <FaCloud className="text-blue-500 text-3xl mb-2" />

  <div className="flex items-center mb-4">

    <div className="bg-blue-100 p-3 rounded-lg mr-3">
      <FaCloud className="text-blue-600 text-xl" />
    </div>

    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
      {title}
    </h2>

  </div>

  <p className="text-2xl font-bold text-blue-600">
  $<CountUp end={Number(value.replace("$",""))} duration={2} />
</p>

</motion.div>
  )
}