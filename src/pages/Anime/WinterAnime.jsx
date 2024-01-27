import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useWinterAnimeContext } from "../../context/WinterAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function WinterAnime() {
  const [state, dispatch] = useWinterAnimeContext()

  useEffect(() => {
    async function fetchWinterAnime() {
      const response = await fetchJikanApi("/seasons/2024/winter")
      dispatch({ type: "fetchFirst", payload: response.data })
    }
    state?.page_1?.length === 0 ? null : fetchWinterAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Winter Anime
      </h1>
      <AnimeList animeData={state.page_1} />
    </>
  )
}
