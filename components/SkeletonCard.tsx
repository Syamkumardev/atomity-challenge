export default function SkeletonCard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md animate-pulse">
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-1/3"></div>
    </div>
  )
}