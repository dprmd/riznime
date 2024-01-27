/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const FallAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFirst") {
    return { ...state, page_1: action.payload }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

// UseContextHook
export function useFallAnimeContext() {
  const context = useContext(FallAnimeContext)
  return context
}

// ContextProvider
export function FallAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  const fallAnimeContextValue = [state, dispatch]

  return (
    <FallAnimeContext.Provider value={fallAnimeContextValue}>
      {children}
    </FallAnimeContext.Provider>
  )
}
