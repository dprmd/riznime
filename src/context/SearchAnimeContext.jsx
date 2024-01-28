/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from "react"

const SearchAnimeContext = createContext({})

function reducer(state, action) {
  if (action.type === "fetchNow") {
    return {
      ...state,
      searchAnime: action.searchAnime,
      currentPage: action.currentPage,
      maxPage: action.maxPage,
    }
  } else if (action.type === "resetSearchAnime") {
    return { ...state, searchAnime: [] }
  } else if (action.type === "resetSearchAnimeAndPage") {
    return { ...state, currentPage: 1, searchAnime: [] }
  } else if (action.type === "changePage") {
    return { ...state, currentPage: action.currentPage }
  } else {
    throw new Error(`Unknown Action Type : ${action.type}`)
  }
}

const initialValue = { searchAnime: [], currentPage: 1, maxPage: 999999 }

export const useSearchAnimeContext = () => useContext(SearchAnimeContext)

export function SearchAnimeContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const searchAnimeContextValue = [state, dispatch]

  return (
    <SearchAnimeContext.Provider value={searchAnimeContextValue}>
      {children}
    </SearchAnimeContext.Provider>
  )
}
