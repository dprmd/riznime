/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Utils
import { handleClickPagination } from "../../utils/pagination";

// Context
import {
  useWinterAnimeContext,
  useSpringAnimeContext,
  useSummerAnimeContext,
  useFallAnimeContext,
} from "../../context/AnimeContext";

// Components
import AnimeOrMangaList from "../../components/AnimeOrMangaList";
import Pagination from "../../components/Pagination";

export default function SeasonAnime({ season }) {
  const seasonAnimeAttribute = {
    title: null,
    useContext: null,
    lastAnimePage: null,
  };

  if (season === "winter") {
    seasonAnimeAttribute.title = "Winter Anime";
    seasonAnimeAttribute.useContext = useWinterAnimeContext();
    seasonAnimeAttribute.lastAnimePage = "/home/winter";
  }
  if (season === "spring") {
    seasonAnimeAttribute.title = "Spring Anime";
    seasonAnimeAttribute.useContext = useSpringAnimeContext();
    seasonAnimeAttribute.lastAnimePage = "/home/spring";
  }
  if (season === "summer") {
    seasonAnimeAttribute.title = "Summer Anime";
    seasonAnimeAttribute.useContext = useSummerAnimeContext();
    seasonAnimeAttribute.lastAnimePage = "/home/summer";
  }
  if (season === "fall") {
    seasonAnimeAttribute.title = "Fall Anime";
    seasonAnimeAttribute.useContext = useFallAnimeContext();
    seasonAnimeAttribute.lastAnimePage = "/home/fall";
  }

  const { state, dispatch } = seasonAnimeAttribute.useContext;
  const thisYear = new Date().getFullYear();
  localStorage.setItem("lastAnimePage", seasonAnimeAttribute.lastAnimePage);

  async function fetchSeasonAnime() {
    window.scrollTo({ top: 0, left: 0 });
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

  document.title = `RizNime - ${seasonAnimeAttribute.title}`;

  useEffect(() => {
    if (state.anime.length === 0) fetchSeasonAnime();
  }, [state.currentPage, state]);

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        {seasonAnimeAttribute.title}
      </h1>
      <AnimeOrMangaList animeOrMangaData={state.anime} />
      {!state.anime.length ? (
        ""
      ) : (
        <Pagination
          currentPage={state.currentPage}
          maxPage={state.maxPage}
          onClick={(typeNavigation, jumpTarget) =>
            handleClickPagination({
              typeNavigation,
              jumpTarget,
              ownState: state,
              ownDispatch: dispatch,
              type: "anime",
            })
          }
        />
      )}
    </>
  );
}
