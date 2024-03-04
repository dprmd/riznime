/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Context
import {
  useMangaModeContext,
  useSearchMangaContext,
} from "../../context/MangaContext";
import { useSearchAnimeContext } from "../../context/AnimeContext";

// Components
import MangaModeToggle from "./MangaModeToggle";

export default function SearchField({ searchInput, setHambActive }) {
  const navigate = useNavigate();
  const [placeholder, setPlaceholder] = useState("");
  const [keyword, setKeyword] = useState("");
  const [inputSearchActive, setInputSearchActive] = useState(false);
  const { state } = useMangaModeContext();
  const searchAnimeContext = useSearchAnimeContext();
  const searchMangaContext = useSearchMangaContext();

  function handleSearchAnime(e) {
    e.preventDefault();
    setInputSearchActive(!inputSearchActive);
    if (keyword === "") return;
    else {
      const dstSearch = state.mangaMode ? "manga" : "anime";
      if (dstSearch === "manga") {
        searchMangaContext.dispatch({ type: "resetMangaAndPage" });
      }
      if (dstSearch === "anime") {
        searchAnimeContext.dispatch({ type: "resetAnimeAndPage" });
      }
      navigate(`/search/${dstSearch}/${keyword}`);
      setKeyword("");
    }
  }

  function handleSearchClick() {
    setHambActive(false);
    setInputSearchActive(!inputSearchActive);
  }

  useEffect(() => {
    const placeholder = state.mangaMode ? "Manga" : "Anime";
    setPlaceholder(placeholder);
  }, [state]);

  return (
    <form className="relative md:order-2 flex" onSubmit={handleSearchAnime}>
      <MangaModeToggle />
      <input
        ref={searchInput}
        type="search"
        value={keyword}
        className={`px-3 py-2 text-sm outline-none font-salsa rounded-full text-black duration-300 origin-right md:scale-100 ${inputSearchActive ? "inline-block" : "scale-0 hidden md:inline-block"}`}
        placeholder={`Cari ${placeholder} . . .`}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <i
        className={`bi bi-search bg-white text-sm px-3 py-2 right-0 rounded-full text-black cursor-pointer absolute ${inputSearchActive ? "absolute" : "relative md:absolute"}`}
        onClick={handleSearchClick}
      ></i>
    </form>
  );
}
