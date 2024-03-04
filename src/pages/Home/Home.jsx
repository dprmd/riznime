/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-extra-boolean-cast */
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// Components
import HomeAnimeNavlink from "./HomeAnimeNavlink";
import HomeMangaNavlink from "./HomeMangaNavlink";

// Context
import { useMangaModeContext } from "../../context/MangaContext";
import { useRedirectContext } from "../../context/OtherContext";
import { useFirstTimeContext } from "../../context/OtherContext";

export default function Home() {
  const { state } = useMangaModeContext();
  const navigate = useNavigate();
  const { state: redirectState, dispatch: dispatchRedirect } =
    useRedirectContext();
  const { state: firstTimeState, dispatch: dispatchFirstTime } =
    useFirstTimeContext();

  useEffect(() => {
    if (redirectState.redirect && firstTimeState.firstTime) {
      const dstNavigate = state.mangaMode
        ? "/home/top-manga"
        : "/home/top-anime";
      dispatchFirstTime({ type: "firstTimeEnd" });
      dispatchRedirect({ type: "disableRedirect" });
      navigate(dstNavigate);
    } else if (redirectState.redirect && state.mangaMode) {
      navigate(localStorage.getItem("lastMangaPage"));
    } else if (redirectState.redirect && !state.mangaMode) {
      navigate(localStorage.getItem("lastAnimePage"));
    } else {
      return () => {};
    }
  }, [redirectState]);

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
