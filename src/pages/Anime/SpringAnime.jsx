import { useEffect } from "react"

// Services
import { fetchJikanApi } from "../../services/JikanApi"

// Context
import { useSpringAnimeContext } from "../../context/SpringAnimeContext"

// Components
import AnimeList from "../../components/AnimeList"
import Pagination from "../../components/Pagination"

export default function SpringAnime() {
  const [state, dispatch] = useSpringAnimeContext()

  async function fetchSpringAnime() {
    const response = await fetchJikanApi(
      `/seasons/2024/spring?page=${state.currentPage}`
    )
    dispatch({
      type: "fetchSpringAnime",
      springAnime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    })
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.springAnime?.length === 0)
      fetchSpringAnime()
    else state?.springAnime?.length === 0 ? fetchSpringAnime() : null
  }, [state.currentPage])

  function handleClickPagination(type) {
    if (type === "prev") {
      if (state.currentPage === 1) return
      dispatch({ type: "resetSpringAnime" })
      dispatch({
        type: "changePage",
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      })
    } else if (type === "next") {
      if (state.currentPage === state.maxPage) return alert("No More Page")
      dispatch({ type: "resetSpringAnime" })
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
        Spring Anime
      </h1>
      <AnimeList animeData={state.springAnime} />
      {!state.springAnime.length ? (
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
