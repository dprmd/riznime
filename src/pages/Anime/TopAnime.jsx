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

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Top Anime
      </h1>
      <AnimeList animeData={topAnime} loadingAnime={loadingTopAnime} />
    </>
  )
}
