/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const WinterAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchWinterAnime") {
    return {
      ...state,
      winterAnime: action.winterAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else if (action.type === "resetWinterAnime") {
    return { ...state, winterAnime: [] }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

const initialValue = { winterAnime: [], currentPage: 1, maxPage: 999999 }

// UseContextHook
export const useWinterAnimeContext = () => useContext(WinterAnimeContext)

// ContextProvider
export function WinterAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const winterAnimeContextValue = [state, dispatch]

  return (
    <WinterAnimeContext.Provider value={winterAnimeContextValue}>
      {children}
    </WinterAnimeContext.Provider>
  )
}
