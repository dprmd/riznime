/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Utils
import { handleClickPagination } from "../../utils/pagination";

// Context
import { useTopAnimeContext } from "../../context/AnimeContext";

// Components
import AnimeOrMangaList from "../../components/AnimeOrMangaList";
import Pagination from "../../components/Pagination";

export default function TopAnime() {
  const { state, dispatch } = useTopAnimeContext();

  async function fetchTopAnime() {
    window.scrollTo({ top: 0, left: 0 });
    console.time("fetch");
    const response = await fetchJikanApi(
      `/top/anime?page=${state.currentPage}`,
    );
    console.timeEnd("fetch");
    dispatch({
      type: "fetchAnime",
      anime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  localStorage.setItem("lastAnimePage", "/home/top-anime");
  document.title = "RizNime - Top Anime";

  useEffect(() => {
    if (state.anime.length === 0) fetchTopAnime();
  }, [state.currentPage]);

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Top Anime
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
