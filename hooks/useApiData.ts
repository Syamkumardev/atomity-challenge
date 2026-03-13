import { useEffect, useState } from "react"

export const useApiData = () => {

  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const fetchData = async () => {

      try {

        const res = await fetch("https://fakestoreapi.com/products?limit=3")
        const result = await res.json()

        setData(result)

      } catch (error) {
        console.log("API Error:", error)
      }

      setIsLoading(false)
    }

    fetchData()

  }, [])

  return { data, isLoading }

}