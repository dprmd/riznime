export function handleClickPagination(args) {
  const { type, state, dispatch } = args;
  if (type === "prev") {
    if (state.currentPage === 1) return;
    dispatch({ type: "resetTopAnime" });
    dispatch({
      type: "changePage",
      currentPage: state.currentPage === 1 ? 1 : state.currentPage - 1,
    });
  }
  if (type === "next") {
    if (state.currentPage === state.maxPage) return alert("No More Page");
    dispatch({ type: "resetTopAnime" });
    dispatch({
      type: "changePage",
      currentPage:
        state.currentPage >= state.maxPage
          ? state.currentPage
          : state.currentPage + 1,
    });
  }
}
