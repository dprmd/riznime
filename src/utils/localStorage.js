export function getMangaMode() {
  const mangaMode = localStorage.getItem("mangaMode");

  if (mangaMode === "true") return true;
  if (mangaMode === "false") return false;
}
