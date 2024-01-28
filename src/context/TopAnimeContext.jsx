/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const TopAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchTopAnime") {
    return {
      ...state,
      topAnime: action.topAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else if (action.type === "resetTopAnime") {
    return { ...state, topAnime: [] }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

const initialValue = { topAnime: [], currentPage: 1, maxPage: 999999 }

// UseContextHook
export const useTopAnimeContext = () => useContext(TopAnimeContext)

// ContextProvider
export function TopAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const topAnimeContextValue = [state, dispatch]

  return (
    <TopAnimeContext.Provider value={topAnimeContextValue}>
      {children}
    </TopAnimeContext.Provider>
  )
}
