/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Services
import { fetchJikanApi } from "../../services/JikanApi";

// Utils
import { handleClickPagination } from "../../utils/pagination";

// Context
import { useSearchAnimeContext } from "../../context/AnimeContext";

// Components
import AnimeOrMangaList from "../../components/AnimeOrMangaList";
import Pagination from "../../components/Pagination";

export default function SearchAnime() {
  const { keyword } = useParams();
  const { state, dispatch } = useSearchAnimeContext();
  const [fetched, setFetched] = useState(false);

  async function fetchSearchAnime() {
    setFetched(false);
    window.scrollTo({ top: 0, left: 0 });
    const response = await fetchJikanApi(
      `/anime?page=${state.currentPage}&q=${keyword}`,
    );
    dispatch({
      type: "fetchAnime",
      anime: response.data,
      currentPage: response.pagination.current_page,
      maxPage: response.pagination.last_visible_page,
    });
    setFetched(true);
  }

  useEffect(() => {
    if (state.anime.length === 0) fetchSearchAnime();
  }, [state]);

  const noteStyles =
    "text-xl text-grayWhite text-center mt-4 font-montserrat font-bold";

  return (
    <div>
      {fetched && state.anime.length > 0 && (
        <div className={noteStyles}>Hasil pencarian {keyword}</div>
      )}

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
    </div>
  );
}
