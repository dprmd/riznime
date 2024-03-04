/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const SearchAnimeContext = createContext({});
const TopAnimeContext = createContext({});
const WinterAnimeContext = createContext({});
const SpringAnimeContext = createContext({});
const SummerAnimeContext = createContext({});
const FallAnimeContext = createContext({});

function reducer(state, action) {
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

const initialValue = { anime: [], currentPage: 1, maxPage: 999999 };

// UseContextHook
export const useSearchAnimeContext = () => useContext(SearchAnimeContext);
export const useTopAnimeContext = () => useContext(TopAnimeContext);
export const useWinterAnimeContext = () => useContext(WinterAnimeContext);
export const useSpringAnimeContext = () => useContext(SpringAnimeContext);
export const useSummerAnimeContext = () => useContext(SummerAnimeContext);
export const useFallAnimeContext = () => useContext(FallAnimeContext);

// ContextProvider
export function AnimeContextProvider({ children }) {
  const [searchState, dispatchSearch] = useReducer(reducer, initialValue);
  const [topState, dispatchTop] = useReducer(reducer, initialValue);
  const [winterState, dispatchWinter] = useReducer(reducer, initialValue);
  const [springState, dispatchSpring] = useReducer(reducer, initialValue);
  const [summerState, dispatchSummer] = useReducer(reducer, initialValue);
  const [fallState, dispatchFall] = useReducer(reducer, initialValue);
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
