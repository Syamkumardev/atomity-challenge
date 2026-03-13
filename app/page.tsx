"use client"

import AnimatedCard from "../components/AnimatedCard"
import SkeletonCard from "../components/SkeletonCard"
import { useApiData } from "../hooks/useApiData"
import { motion } from "framer-motion"

export default function Home() {

  const { data, isLoading } = useApiData()

  return (
    <div>

      {/* HERO SECTION */}
      <div className="h-[500px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Cloud Optimization Insights
        </h1>

        <p className="text-lg opacity-90">
          Explore pricing insights with smooth animations
        </p>
      </div>


      {/* CARDS SECTION */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* LOADING STATE */}
          {isLoading ? (

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>

          ) : (

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >

              {data?.map((item: any) => (
                <AnimatedCard
                  key={item.id}
                  title={item.title}
                  value={`$${item.price}`}
                />
              ))}

            </motion.div>

          )}

        </div>
      </div>

    </div>
  )
}