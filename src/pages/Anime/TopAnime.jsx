import { useState, useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function TopAnime() {
  const [topAnime, setTopAnime] = useState([])
  const [loadingTopAnime, setLoadingTopAnime] = useState(true)

  useEffect(() => {
    async function fetchTopAnime() {
      const response = await fetchJikanApi("/top/anime")
      setTopAnime(response.data)
      setLoadingTopAnime(false)
    }

    fetchTopAnime()
  }, [])

  return <AnimeList animeData={topAnime} loadingAnime={loadingTopAnime} />
}
