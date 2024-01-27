import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useTopAnimeContext } from "../../context/TopAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function TopAnime() {
  const [state, dispatch] = useTopAnimeContext()

  useEffect(() => {
    async function fetchTopAnime() {
      const response = await fetchJikanApi("/top/anime")
      dispatch({ type: "fetchFirst", payload: response.data })
    }
    state?.page_1?.length === 0 ? null : fetchTopAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Top Anime
      </h1>
      <AnimeList animeData={state.page_1} />
    </>
  )
}
