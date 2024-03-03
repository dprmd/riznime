/* eslint-disable react/prop-types */
import { AnimeContextProvider } from "./AnimeContext";

export default function AppContextProvider({ children }) {
  return <AnimeContextProvider>{children}</AnimeContextProvider>;
}
