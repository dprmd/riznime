/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const SpringAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFirst") {
    return { ...state, page_1: action.payload }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

// UseContextHook
export function useSpringAnimeContext() {
  const context = useContext(SpringAnimeContext)
  return context
}

// ContextProvider
export function SpringAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  const springAnimeContextValue = [state, dispatch]

  return (
    <SpringAnimeContext.Provider value={springAnimeContextValue}>
      {children}
    </SpringAnimeContext.Provider>
  )
}
