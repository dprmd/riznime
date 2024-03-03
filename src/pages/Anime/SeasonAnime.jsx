/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Context
import {
  useWinterAnimeContext,
  useSpringAnimeContext,
  useSummerAnimeContext,
  useFallAnimeContext,
} from "../../context/AnimeContext";

// Components
import AnimeList from "../../components/AnimeList";
import Pagination from "../../components/Pagination";

export default function SeasonAnime({ season }) {
  const seasonAnimeAttribute = {
    title: null,
    useContext: null,
  };

  if (season === "winter") {
    seasonAnimeAttribute.title = "Winter Anime";
    seasonAnimeAttribute.useContext = useWinterAnimeContext();
    seasonAnimeAttribute.title = "Winter Anime";
  }
  if (season === "spring") {
    seasonAnimeAttribute.title = "Spring Anime";
    seasonAnimeAttribute.useContext = useSpringAnimeContext();
  }
  if (season === "summer") {
    seasonAnimeAttribute.title = "Summer Anime";
    seasonAnimeAttribute.useContext = useSummerAnimeContext();
  }
  if (season === "fall") {
    seasonAnimeAttribute.title = "Fall Anime";
    seasonAnimeAttribute.useContext = useFallAnimeContext();
  }

  const { state, dispatch } = seasonAnimeAttribute.useContext;
  const thisYear = new Date().getFullYear();

  async function fetchSeasonAnime() {
    const response = await fetchJikanApi(
      `/seasons/${thisYear}/${season}?page=${state.currentPage}`,
    );
    dispatch({
      type: "fetchAnime",
      anime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  useEffect(() => {
    if (state.currentPage !== 1 && state?.anime?.length === 0)
      fetchSeasonAnime();
    else state?.anime?.length === 0 ? fetchSeasonAnime() : null;
  }, [state.currentPage, state]);

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
        {seasonAnimeAttribute.title}
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
