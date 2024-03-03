/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { useSearchAnimeContext } from "../../context/AnimeContext";

export default function SearchField({ searchInput, setHambActive }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { dispatch } = useSearchAnimeContext();

  function handleSearchAnime(e) {
    e.preventDefault();
    searchInput.current.classList.add("scale-0");
    if (keyword === "") return;
    else {
      setKeyword("");
      dispatch({ type: "resetAnimeAndPage" });
      navigate(`/search/${keyword}`);
    }
  }

  function handleSearchClick() {
    setHambActive(false);
    searchInput.current.classList.toggle("scale-0");
  }

  return (
    <form className="relative md:order-2" onSubmit={handleSearchAnime}>
      <input
        ref={searchInput}
        type="search"
        value={keyword}
        className="px-3 py-2 text-sm outline-none font-salsa rounded-full text-black scale-0 duration-300 origin-right md:scale-100"
        placeholder="Cari Anime . . ."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <i
        className="bi bi-search bg-white text-sm px-3 py-2 absolute right-0 rounded-full text-black cursor-pointer"
        onClick={handleSearchClick}
      ></i>
    </form>
  );
}
