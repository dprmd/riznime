/* eslint-disable react/prop-types */
import { OtherContextProvider } from "./OtherContext";
import { AnimeContextProvider } from "./AnimeContext";
import { MangaContextProvider } from "./MangaContext";

export default function AppContextProvider({ children }) {
  return (
    <OtherContextProvider>
      <AnimeContextProvider>
        <MangaContextProvider>{children}</MangaContextProvider>
      </AnimeContextProvider>
    </OtherContextProvider>
  );
}
