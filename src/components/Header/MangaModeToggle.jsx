// Context
import { useMangaModeContext } from "../../context/MangaContext";
import { useRedirectContext } from "../../context/OtherContext";

export default function MangaModeToggle() {
  const { state, dispatch } = useMangaModeContext();
  const { dispatch: dispatchRedirect } = useRedirectContext();

  function handleMangaClick() {
    dispatch({ type: "changeMangaMode", mangaMode: !state.mangaMode });
    dispatchRedirect({ type: "enableRedirect" });
  }

  return (
    <div className="flex items-center mr-4">
      <span
        className={`mr-2 font-bold ${state?.mangaMode ? "text-yellow-300" : "text-yellow-800"}`}
      >
        Manga
      </span>
      <button
        type="button"
        className={`outline-none border-style-none w-10 h-5 bg-slate-600 rounded-full overflow-hidden flex ${state?.mangaMode ? "justify-end" : "justify-start"}`}
        onClick={handleMangaClick}
      >
        <div className="outline-none border-style-none w-5 h-5 rounded-full bg-white"></div>
      </button>
    </div>
  );
}
