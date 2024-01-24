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

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Winter Anime
      </h1>
      <AnimeList animeData={winterAnime} loadingAnime={loadingWinterAnime} />
    </>
  )
}
