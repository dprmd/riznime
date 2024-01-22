import { useState, useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function WinterAnime() {
  const [winterAnime, setWinterAnime] = useState([])
  const [loadingWinterAnime, setLoadingWinterAnime] = useState(true)

  useEffect(() => {
    async function fetchWinterAnime() {
      const response = await fetchJikanApi("/seasons/2024/winter")
      setWinterAnime(response.data)
      setLoadingWinterAnime(false)
    }

    fetchWinterAnime()
  }, [])

  return <AnimeList animeData={winterAnime} loadingAnime={loadingWinterAnime} />
}
