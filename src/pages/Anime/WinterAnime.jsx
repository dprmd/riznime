import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useWinterAnimeContext } from "../../context/WinterAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"
import Pagination from "../../components/Pagination"

export default function WinterAnime() {
  const [state, dispatch] = useWinterAnimeContext()

  async function fetchWinterAnime() {
    const response = await fetchJikanApi(
      `/seasons/2024/winter?page=${state.currentPage}`
    )
    dispatch({
      type: "fetchWinterAnime",
      winterAnime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    })
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.winterAnime?.length === 0)
      fetchWinterAnime()
    else state?.winterAnime?.length === 0 ? fetchWinterAnime() : null
  }, [state.currentPage])

  function handleClickPagination(type) {
    if (type === "prev") {
      if (state.currentPage === 1) return
      dispatch({ type: "resetWinterAnime" })
      dispatch({
        type: "changePage",
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      })
    } else if (type === "next") {
      if (state.currentPage === state.maxPage) return alert("No More Page")
      dispatch({ type: "resetWinterAnime" })
      dispatch({
        type: "changePage",
        currentPage:
          state.currentPage >= state.maxPage
            ? state.currentPage
            : state.currentPage + 1,
      })
    }
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Winter Anime
      </h1>
      <AnimeList animeData={state.winterAnime} />
      {!state.winterAnime.length ? (
        ""
      ) : (
        <Pagination
          currentPage={state.currentPage}
          onClick={(type) => handleClickPagination(type)}
        />
      )}
    </>
  )
}
