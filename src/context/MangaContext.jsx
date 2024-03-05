/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

// Utils
import { getMangaMode } from "../utils/localStorage";

// Reducer and Initial Value
function mangaModeReducer(state, action) {
  if (action.type === "changeMangaMode") {
    localStorage.setItem("mangaMode", action.mangaMode);
    return {
      ...state,
      mangaMode: action.mangaMode,
    };
  }
}

function mangaReducer(state, action) {
  if (action.type === "fetchManga") {
    return {
      ...state,
      manga: action.manga,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    };
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage };
  } else if (action.type === "resetManga") {
    return { ...state, manga: [] };
  } else if (action.type === "resetMangaAndPage") {
    return { ...state, manga: [], currentPage: 1 };
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`);
  }
}

const mangaModeInitVal = { mangaMode: getMangaMode() };
const mangaInitVal = { manga: [], currentPage: 1, maxPage: 999999 };

// Context Hook
const MangaModeContext = createContext({});
const TopMangaContext = createContext({});
const SearchMangaContext = createContext({});

export const useMangaModeContext = () => useContext(MangaModeContext);
export const useTopMangaContext = () => useContext(TopMangaContext);
export const useSearchMangaContext = () => useContext(SearchMangaContext);

export function MangaContextProvider({ children }) {
  const [mangaModeState, dispatchMangaMode] = useReducer(
    mangaModeReducer,
    mangaModeInitVal,
  );
  const [topMangaState, dispatchTopManga] = useReducer(
    mangaReducer,
    mangaInitVal,
  );
  const [searchMangaState, dispatchSearchManga] = useReducer(
    mangaReducer,
    mangaInitVal,
  );
  const mangaModeContextValue = {
    state: mangaModeState,
    dispatch: dispatchMangaMode,
  };
  const topMangaContextValue = {
    state: topMangaState,
    dispatch: dispatchTopManga,
  };
  const searchMangaContextValue = {
    state: searchMangaState,
    dispatch: dispatchSearchManga,
  };

  return (
    <MangaModeContext.Provider value={mangaModeContextValue}>
      <TopMangaContext.Provider value={topMangaContextValue}>
        <SearchMangaContext.Provider value={searchMangaContextValue}>
          {children}
        </SearchMangaContext.Provider>
      </TopMangaContext.Provider>
    </MangaModeContext.Provider>
  );
}
