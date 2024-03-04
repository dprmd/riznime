/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Utils
import { handleClickPagination } from "../../utils/pagination";

// Context
import { useSearchMangaContext } from "../../context/MangaContext";

// Components
import AnimeOrMangaList from "../../components/AnimeOrMangaList";
import Pagination from "../../components/Pagination";

export default function SearchManga() {
  const { keyword } = useParams();
  const { state, dispatch } = useSearchMangaContext();
  const [fetched, setFetched] = useState(false);

  async function fetchSearchManga() {
    setFetched(false);
    window.scrollTo({ top: 0, left: 0 });
    const response = await fetchJikanApi(
      `/manga?page=${state.currentPage}&q=${keyword}`,
    );
    dispatch({
      type: "fetchManga",
      manga: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
    setFetched(true);
  }

  const noteStyles =
    "text-xl text-grayWhite text-center mt-4 font-montserrat font-bold";

  useEffect(() => {
    if (state.manga.length === 0) fetchSearchManga();
  }, [state]);

  return (
    <div>
      {fetched && state.manga.length > 0 && (
        <div className={noteStyles}>Hasil pencarian {keyword}</div>
      )}

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
    </div>
  );
}
