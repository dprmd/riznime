/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Utils
import { handleClickPagination } from "../../utils/pagination";

// Context
import { useTopMangaContext } from "../../context/MangaContext";

// Components
import AnimeOrMangaList from "../../components/AnimeOrMangaList";
import Pagination from "../../components/Pagination";

export default function TopManga() {
  const { state, dispatch } = useTopMangaContext();

  async function fetchTopManga() {
    window.scrollTo({ top: 0, left: 0 });
    const response = await fetchJikanApi(
      `/top/manga?page=${state.currentPage}`,
    );
    dispatch({
      type: "fetchManga",
      manga: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
  }

  useEffect(() => {
    if (state.manga.length === 0) fetchTopManga();
  }, [state.currentPage]);

  localStorage.setItem("lastMangaPage", "/home/top-manga");
  document.title = "RizNime - Top Manga";

  return (
    <>
      <h1 className="text-center font-bold text-2xl text-grayWhite font-montserrat mt-2 md:hidden">
        Top Manga
      </h1>
      <AnimeOrMangaList animeOrMangaData={state.manga} />
      {!state.manga.length ? (
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
              type: "manga",
            })
          }
        />
      )}
    </>
  );
}
