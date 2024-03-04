/* eslint-disable no-extra-boolean-cast */
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Components
import HomeAnimeNavlink from "./HomeAnimeNavlink";
import HomeMangaNavlink from "./HomeMangaNavlink";

// Context
import { useMangaModeContext } from "../../context/MangaContext";

export default function Home() {
  const { state } = useMangaModeContext();
  const navigate = useNavigate();

  useEffect(() => {
    const dstNavigate = state.mangaMode ? "/home/top-manga" : "/home/top-anime";
    navigate(dstNavigate);
  }, [state]);

  return (
    <>
      <div className="w-full h-full py-4 min-h-screen">
        <div className="hidden md:flex justify-center items-center">
          {state.mangaMode ? <HomeMangaNavlink /> : <HomeAnimeNavlink />}
        </div>
        <Outlet />
      </div>
    </>
  );
}
