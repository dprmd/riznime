/* eslint-disable react/prop-types */

// Context
import { TopAnimeContextProvider } from "../context/TopAnimeContext"
import { WinterAnimeContextProvider } from "../context/WinterAnimeContext"
import { SpringAnimeContextProvider } from "./SpringAnimeContext"
import { SummerAnimeContextProvider } from "./SummerAnimeContext"
import { FallAnimeContextProvider } from "./FallAnimeContext"

export function AppContextProvider({ children }) {
  return (
    <TopAnimeContextProvider>
      <WinterAnimeContextProvider>
        <SpringAnimeContextProvider>
          <SummerAnimeContextProvider>
            <FallAnimeContextProvider>{children}</FallAnimeContextProvider>
          </SummerAnimeContextProvider>
        </SpringAnimeContextProvider>
      </WinterAnimeContextProvider>
    </TopAnimeContextProvider>
  )
}
