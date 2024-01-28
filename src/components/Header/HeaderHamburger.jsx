/* eslint-disable react/prop-types */

export default function HeaderHamburger({
  hambActive,
  setHambActive,
  searchInput,
}) {
  return (
    <div
      className="flex flex-col justify-between w-7 h-6 box-content cursor-pointer md:hidden"
      onClick={() => {
        setHambActive(!hambActive)
        searchInput.current.classList.add("scale-0")
      }}
    >
      <span
        className={`duration-500 origin-left w-7 h-1 bg-grayWhite ${
          hambActive ? "rotate-45" : ""
        }`}
      ></span>
      <span
        className={`duration-500 w-7 h-1 bg-grayWhite ${
          hambActive ? "scale-0" : ""
        }`}
      ></span>
      <span
        className={`duration-500 origin-left w-7 h-1 bg-grayWhite ${
          hambActive ? "-rotate-45" : ""
        }`}
      ></span>
    </div>
  )
}
