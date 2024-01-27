/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const WinterAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchFirst") {
    return { ...state, page_1: action.payload }
  } else {
    throw new Error(`Unknown Reducer Type : ${action.type}`)
  }
}

// UseContextHook
export function useWinterAnimeContext() {
  const context = useContext(WinterAnimeContext)
  return context
}

// ContextProvider
export function WinterAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})
  const topAnimeContextValue = [state, dispatch]

  return (
    <WinterAnimeContext.Provider value={topAnimeContextValue}>
      {children}
    </WinterAnimeContext.Provider>
  )
}
