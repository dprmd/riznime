/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const SummerAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchSummerAnime") {
    return {
      ...state,
      summerAnime: action.summerAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else if (action.type === "resetSummerAnime") {
    return { ...state, summerAnime: [] }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

const initialValue = { summerAnime: [], currentPage: 1, maxPage: 999999 }

// UseContextHook
export const useSummerAnimeContext = () => useContext(SummerAnimeContext)

// ContextProvider
export function SummerAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const summerAnimeContextValue = [state, dispatch]

  return (
    <SummerAnimeContext.Provider value={summerAnimeContextValue}>
      {children}
    </SummerAnimeContext.Provider>
  )
}
