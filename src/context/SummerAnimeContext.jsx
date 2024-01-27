/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const SummerAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFirst") {
    return { ...state, page_1: action.payload }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

// UseContextHook
export function useSummerAnimeContext() {
  const context = useContext(SummerAnimeContext)
  return context
}

// ContextProvider
export function SummerAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  const summerAnimeContextValue = [state, dispatch]

  return (
    <SummerAnimeContext.Provider value={summerAnimeContextValue}>
      {children}
    </SummerAnimeContext.Provider>
  )
}
