import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useFallAnimeContext } from "../../context/FallAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function FallAnime() {
  const [state, dispatch] = useFallAnimeContext()

  useEffect(() => {
    async function fetchFallAnime() {
      const response = await fetchJikanApi("/seasons/2024/fall")
      dispatch({ type: "fetchFirst", payload: response.data })
    }
    state?.page_1?.length === 0 ? null : fetchFallAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Fall Anime
      </h1>
      <AnimeList animeData={state.page_1} />
    </>
  )
}
