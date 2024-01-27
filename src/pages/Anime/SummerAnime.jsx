import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useSummerAnimeContext } from "../../context/SummerAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function SummerAnime() {
  const [state, dispatch] = useSummerAnimeContext()

  useEffect(() => {
    async function fetchSummerAnime() {
      const response = await fetchJikanApi("/seasons/2024/summer")
      dispatch({ type: "fetchFirst", payload: response.data })
    }
    state?.page_1?.length === 0 ? null : fetchSummerAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Summer Anime
      </h1>
      <AnimeList animeData={state.page_1} />
    </>
  )
}
