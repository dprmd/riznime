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

  return <AnimeList animeData={fallAnime} loadingAnime={loadingFallAnime} />
}
