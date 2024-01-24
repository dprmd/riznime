import { useState, useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function FallAnime() {
  const [fallAnime, setFallAnime] = useState([])
  const [loadingFallAnime, setLoadingFallAnime] = useState(true)

  useEffect(() => {
    async function fetchFallAnime() {
      const response = await fetchJikanApi("/seasons/2024/fall")
      setFallAnime(response.data)
      setLoadingFallAnime(false)
    }

    fetchFallAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Fall Anime
      </h1>
      <AnimeList animeData={fallAnime} loadingAnime={loadingFallAnime} />
    </>
  )
}
