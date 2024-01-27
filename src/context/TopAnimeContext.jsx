/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const TopAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFirst") {
    return { ...state, page_1: action.payload }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

// UseContextHook
export function useTopAnimeContext() {
  const context = useContext(TopAnimeContext)
  return context
}

// ContextProvider
export function TopAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  const topAnimeContextValue = [state, dispatch]

  return (
    <TopAnimeContext.Provider value={topAnimeContextValue}>
      {children}
    </TopAnimeContext.Provider>
  )
}
