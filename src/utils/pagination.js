export function generateArrayPagination({
  currentPage,
  maxPage,
  toLeft,
  toRight,
}) {
  const middle = toLeft + 1;
  const allPage = [...Array(maxPage).keys()].map((a) => a + 1);
  const wholePage =
    currentPage > middle
      ? allPage.slice(currentPage - middle, currentPage + toRight)
      : allPage.slice(0, currentPage + toRight);

  const left =
    currentPage === 1 ? [] : wholePage.slice(0, wholePage.indexOf(currentPage));
  const right = wholePage.slice(wholePage.indexOf(currentPage) + 1);

  return { whole: wholePage, left, right };
}

export function handleClickPagination(props) {
  const { typeNavigation, jumpTarget, ownState, ownDispatch, type } = props;
  const reseter = type === "manga" ? "resetManga" : "resetAnime";
  if (typeNavigation === "jump") {
    ownDispatch({ type: reseter });
    ownDispatch({ type: "changePage", currentPage: jumpTarget });
  }
  if (typeNavigation === "prev") {
    if (ownState.currentPage === 1) return;
    ownDispatch({ type: reseter });
    ownDispatch({
      type: "changePage",
      currentPage: ownState.currentPage === 1 ? 1 : ownState.currentPage - 1,
    });
  } else if (type === "next") {
    if (ownState.currentPage === ownState.maxPage) return alert("No More Page");
    ownDispatch({ type: reseter });
    ownDispatch({
      type: "changePage",
      currentPage:
        ownState.currentPage >= ownState.maxPage
          ? ownState.currentPage
          : ownState.currentPage + 1,
    });
  }
}
