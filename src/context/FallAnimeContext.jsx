/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const FallAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFallAnime") {
    return {
      ...state,
      fallAnime: action.fallAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else if (action.type === "resetFallAnime") {
    return { ...state, fallAnime: [] }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

const initialValue = { fallAnime: [], currentPage: 1, maxPage: 999999 }

// UseContextHook
export const useFallAnimeContext = () => useContext(FallAnimeContext)

// ContextProvider
export function FallAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const fallAnimeContextValue = [state, dispatch]

  return (
    <FallAnimeContext.Provider value={fallAnimeContextValue}>
      {children}
    </FallAnimeContext.Provider>
  )
}
