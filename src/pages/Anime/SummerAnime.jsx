/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Context
import { useSummerAnimeContext } from "../../context/SummerAnimeContext";

// Components
import AnimeList from "../../components/AnimeList";
import Pagination from "../../components/Pagination";

export default function SummerAnime() {
  const [state, dispatch] = useSummerAnimeContext();

  async function fetchSummerAnime() {
    const response = await fetchJikanApi(
      `/seasons/2024/summer?page=${state.currentPage}`,
    );
    dispatch({
      type: "fetchSummerAnime",
      summerAnime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.summerAnime?.length === 0)
      fetchSummerAnime();
    else state?.summerAnime?.length === 0 ? fetchSummerAnime() : null;
  }, [state.currentPage]);

  function handleClickPagination(type, jumpTarget) {
    if (type === "jump") {
      dispatch({ type: "resetSummerAnime" });
      dispatch({ type: "changePage", currentPage: jumpTarget });
    }
    if (type === "prev") {
      if (state.currentPage === 1) return;
      dispatch({ type: "resetSummerAnime" });
      dispatch({
        type: "changePage",
        currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
      });
    } else if (type === "next") {
      if (state.currentPage === state.maxPage) return alert("No More Page");
      dispatch({ type: "resetSummerAnime" });
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
        Summer Anime
      </h1>
      <AnimeList animeData={state.summerAnime} />
      {!state.summerAnime.length ? (
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
