/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const SpringAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchSpringAnime") {
    return {
      ...state,
      springAnime: action.springAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else if (action.type === "resetSpringAnime") {
    return { ...state, springAnime: [] }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

const initialValue = { springAnime: [], currentPage: 1, maxPage: 999999 }

// UseContextHook
export const useSpringAnimeContext = () => useContext(SpringAnimeContext)

// ContextProvider
export function SpringAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const springAnimeContextValue = [state, dispatch]

  return (
    <SpringAnimeContext.Provider value={springAnimeContextValue}>
      {children}
    </SpringAnimeContext.Provider>
  )
}
