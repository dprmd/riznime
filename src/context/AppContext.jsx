/* eslint-disable react/prop-types */

// Context
import { TopAnimeContextProvider } from "../context/TopAnimeContext"
import { WinterAnimeContextProvider } from "../context/WinterAnimeContext"
import { SpringAnimeContextProvider } from "./SpringAnimeContext"
import { SummerAnimeContextProvider } from "./SummerAnimeContext"
import { FallAnimeContextProvider } from "./FallAnimeContext"
import { SearchAnimeContextProvider } from "./SearchAnimeContext"

export function AppContextProvider({ children }) {
  return (
    <TopAnimeContextProvider>
      <SearchAnimeContextProvider>
        <WinterAnimeContextProvider>
          <SpringAnimeContextProvider>
            <SummerAnimeContextProvider>
              <FallAnimeContextProvider>{children}</FallAnimeContextProvider>
            </SummerAnimeContextProvider>
          </SpringAnimeContextProvider>
        </WinterAnimeContextProvider>
      </SearchAnimeContextProvider>
    </TopAnimeContextProvider>
  )
}
