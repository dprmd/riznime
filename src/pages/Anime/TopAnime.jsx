/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Context
import { useTopAnimeContext } from "../../context/AnimeContext";

// Components
import AnimeList from "../../components/AnimeList";
import Pagination from "../../components/Pagination";

export default function TopAnime() {
  const { state, dispatch } = useTopAnimeContext();

  async function fetchTopAnime() {
    const response = await fetchJikanApi(
      `/top/anime?page=${state.currentPage}`,
    );
    dispatch({
      type: "fetchAnime",
      anime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.anime?.length === 0) fetchTopAnime();
    else state?.anime?.length === 0 ? fetchTopAnime() : null;
  }, [state.currentPage]);

  function handleClickPagination(type, jumpTarget) {
    if (type === "jump") {
      dispatch({ type: "resetAnime" });
      dispatch({ type: "changePage", currentPage: jumpTarget });
    }
    if (type === "prev") {
      if (state.currentPage === 1) return;
      dispatch({ type: "resetAnime" });
      dispatch({
        type: "changePage",
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      });
    } else if (type === "next") {
      if (state.currentPage === state.maxPage) return alert("No More Page");
      dispatch({ type: "resetAnime" });
      dispatch({
        type: "changePage",
        currentPage:
          state.currentPage >= state.maxPage
            ? state.currentPage
            : state.currentPage + 1,
      });
    }
  }

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Top Anime
      </h1>
      <AnimeList animeData={state.anime} />
      {!state.anime.length ? (
        ""
      ) : (
        <Pagination
          currentPage={state.currentPage}
          maxPage={state.maxPage}
          onClick={(type, jumpTarget) =>
            handleClickPagination(type, jumpTarget)
          }
        />
      )}
    </>
  );
}
