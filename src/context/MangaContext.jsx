/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

// Utils
import { getMangaMode } from "../utils/localStorage";

const MangaModeContext = createContext({});
const TopMangaContext = createContext({});
const SearchMangaContext = createContext({});

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

const mangaModeInitValue = { mangaMode: getMangaMode() };
const mangaInitValue = { manga: [], currentPage: 1, maxPage: 999999 };

// Use Context Hook
export const useMangaModeContext = () => useContext(MangaModeContext);
export const useTopMangaContext = () => useContext(TopMangaContext);
export const useSearchMangaContext = () => useContext(SearchMangaContext);

// Context Provider
export function MangaContextProvider({ children }) {
  const [mangaModeState, dispatchMangaMode] = useReducer(
    mangaModeReducer,
    mangaModeInitValue,
  );
  const [topMangaState, dispatchTopManga] = useReducer(
    mangaReducer,
    mangaInitValue,
  );
  const [searchMangaState, dispatchSearchManga] = useReducer(
    mangaReducer,
    mangaInitValue,
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
