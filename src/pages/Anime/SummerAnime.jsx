import { useState, useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function SummerAnime() {
  const [summerAnime, setSummerAnime] = useState([])
  const [loadingSummerAnime, setLoadingSummerAnime] = useState(true)

  useEffect(() => {
    async function fetchSummerAnime() {
      const response = await fetchJikanApi("/seasons/2024/summer")
      setSummerAnime(response.data)
      setLoadingSummerAnime(false)
    }

    fetchSummerAnime(0)
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Summer Anime
      </h1>
      <AnimeList animeData={summerAnime} loadingAnime={loadingSummerAnime} />
    </>
  )
}
