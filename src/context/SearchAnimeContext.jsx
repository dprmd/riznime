/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer, useContext } from "react"

const SearchAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchNow") {
    return { ...state, page_1: action.payload }
  } else if (action.type === "clearCurrentData") {
    return {}
  } else {
    throw new Error(`Unknown Action Type : ${action.type}`)
  }
}

export function useSearchAnimeContext() {
  const context = useContext(SearchAnimeContext)
  return context
}

export function SearchAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {})

  const searchAnimeContextValue = [state, dispatch]

  return (
    <SearchAnimeContext.Provider value={searchAnimeContextValue}>
      {children}
    </SearchAnimeContext.Provider>
  )
}
