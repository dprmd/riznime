/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

// Reducer and Initial Value
function animeReducer(state, action) {
  if (action.type === "fetchAnime") {
    return {
      ...state,
      anime: action.anime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    };
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage };
  } else if (action.type === "resetAnime") {
    return { ...state, anime: [] };
  } else if (action.type === "resetAnimeAndPage") {
    return { ...state, anime: [], currentPage: 1 };
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`);
  }
}

const animeInitVal = { anime: [], currentPage: 1, maxPage: 999999 };

// Context Hook
const SearchAnimeContext = createContext({});
const TopAnimeContext = createContext({});
const WinterAnimeContext = createContext({});
const SpringAnimeContext = createContext({});
const SummerAnimeContext = createContext({});
const FallAnimeContext = createContext({});

export const useSearchAnimeContext = () => useContext(SearchAnimeContext);
export const useTopAnimeContext = () => useContext(TopAnimeContext);
export const useWinterAnimeContext = () => useContext(WinterAnimeContext);
export const useSpringAnimeContext = () => useContext(SpringAnimeContext);
export const useSummerAnimeContext = () => useContext(SummerAnimeContext);
export const useFallAnimeContext = () => useContext(FallAnimeContext);

export function AnimeContextProvider({ children }) {
  const [searchState, dispatchSearch] = useReducer(animeReducer, animeInitVal);
  const [topState, dispatchTop] = useReducer(animeReducer, animeInitVal);
  const [winterState, dispatchWinter] = useReducer(animeReducer, animeInitVal);
  const [springState, dispatchSpring] = useReducer(animeReducer, animeInitVal);
  const [summerState, dispatchSummer] = useReducer(animeReducer, animeInitVal);
  const [fallState, dispatchFall] = useReducer(animeReducer, animeInitVal);
  const searchAnimeContextValue = {
    state: searchState,
    dispatch: dispatchSearch,
  };
  const topAnimeContextValue = {
    state: topState,
    dispatch: dispatchTop,
  };
  const winterAnimeContextValue = {
    state: winterState,
    dispatch: dispatchWinter,
  };
  const springAnimeContextValue = {
    state: springState,
    dispatch: dispatchSpring,
  };
  const summerAnimeContextValue = {
    state: summerState,
    dispatch: dispatchSummer,
  };
  const fallAnimeContextValue = { state: fallState, dispatch: dispatchFall };

  return (
    <SearchAnimeContext.Provider value={searchAnimeContextValue}>
      <TopAnimeContext.Provider value={topAnimeContextValue}>
        <WinterAnimeContext.Provider value={winterAnimeContextValue}>
          <SpringAnimeContext.Provider value={springAnimeContextValue}>
            <SummerAnimeContext.Provider value={summerAnimeContextValue}>
              <FallAnimeContext.Provider value={fallAnimeContextValue}>
                {children}
              </FallAnimeContext.Provider>
            </SummerAnimeContext.Provider>
          </SpringAnimeContext.Provider>
        </WinterAnimeContext.Provider>
      </TopAnimeContext.Provider>
    </SearchAnimeContext.Provider>
  );
}
