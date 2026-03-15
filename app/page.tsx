import AnimatedCard from "@/components/AnimatedCard"

export default function Home() {

  const data = [
    { id: 1, title: "Compute Cost", value: 125 },
    { id: 2, title: "Storage Cost", value: 342 },
    { id: 3, title: "Network Cost", value: 89 },
  ];

  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">

        {data.map((item) => (
          <AnimatedCard
            key={item.id}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

    </div>
  )
}