import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useSpringAnimeContext } from "../../context/SpringAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"

export default function SpringAnime() {
  const [state, dispatch] = useSpringAnimeContext()

  useEffect(() => {
    async function fetchSpringAnime() {
      const response = await fetchJikanApi("/seasons/2024/spring")
      dispatch({ type: "fetchFirst", payload: response.data })
    }
    state?.page_1?.length === 0 ? null : fetchSpringAnime()
  }, [])

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Spring Anime
      </h1>
      <AnimeList animeData={state.page_1} />
    </>
  )
}
