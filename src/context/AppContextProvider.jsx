/* eslint-disable react/prop-types */
import { AnimeContextProvider } from "./AnimeContext";
import { MangaContextProvider } from "./MangaContext";

export default function AppContextProvider({ children }) {
  return (
    <AnimeContextProvider>
      <MangaContextProvider>{children}</MangaContextProvider>
    </AnimeContextProvider>
  );
}
