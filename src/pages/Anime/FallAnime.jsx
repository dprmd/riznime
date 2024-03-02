/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Context
import { useFallAnimeContext } from "../../context/FallAnimeContext";

// Components
import AnimeList from "../../components/AnimeList";
import Pagination from "../../components/Pagination";

export default function FallAnime() {
  const [state, dispatch] = useFallAnimeContext();

  async function fetchFallAnime() {
    const response = await fetchJikanApi(
      `/seasons/2024/fall?page=${state.currentPage}`,
    );
    dispatch({
      type: "fetchFallAnime",
      fallAnime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.fallAnime?.length === 0)
      fetchFallAnime();
    else state?.fallAnime?.length === 0 ? fetchFallAnime() : null;
  }, [state.currentPage]);

  function handleClickPagination(type, jumpTarget) {
    if (type === "jump") {
      dispatch({ type: "resetFallAnime" });
      dispatch({ type: "changePage", currentPage: jumpTarget });
    }
    if (type === "prev") {
      if (state.currentPage === 1) return;
      dispatch({ type: "resetFallAnime" });
      dispatch({
        type: "changePage",
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      });
    } else if (type === "next") {
      if (state.currentPage === state.maxPage) return alert("No More Page");
      dispatch({ type: "resetFallAnime" });
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
        Fall Anime
      </h1>
      <AnimeList animeData={state.fallAnime} />
      {!state.fallAnime.length ? (
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
