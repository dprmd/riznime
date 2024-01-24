import { useState, useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Components
import AnimeList from "../../components/AnimeList"

export default function SpringAnime() {
  const [springAnime, setSpringAnime] = useState([])
  const [loadingSpringAnime, setLoadingSpringAnime] = useState(true)

  useEffect(() => {
    async function fetchSpringAnime() {
      const response = await fetchJikanApi("/seasons/2024/spring")
      setSpringAnime(response.data)
      setLoadingSpringAnime(false)
    }

    fetchSpringAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Spring Anime
      </h1>
      <AnimeList animeData={springAnime} loadingAnime={loadingSpringAnime} />
    </>
  )
}
