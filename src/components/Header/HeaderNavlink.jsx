/* eslint-disable react/prop-types */
/* eslint-disable no-extra-boolean-cast */
import { Link, useMatch } from "react-router-dom"

import HomeNavlink from "../../pages/Home/HomeNavlink"

export default function HeaderNavlink({ hambActive, setHambActive }) {
  // Match Url
  const home = useMatch("/home")
  const top = useMatch("/home/top-anime")
  const spring = useMatch("/home/spring")
  const summer = useMatch("/home/summer")
  const fall = useMatch("/home/fall")
  const winter = useMatch("/home/winter")
  const about = useMatch("/about")

  // Link Style
  const navlink =
    "text-center mx-4 my-1 px-4 py-2 font-bold font-montserrat md:mx-2 md:px-2 md:py-1 w-max mx-auto"
  const navlinkActive = "text-primary border-b border-yellow-600"
  const navstyle =
    "origin-top-right duration-300 inline-flex flex-col bg-black absolute top-full right-0 w-1/2 md:static md:flex-row md:w-fit md:scale-100 md:order-1"

  return (
    <div
      onClick={() => setHambActive(false)}
      className={`${navstyle} ${hambActive ? "scale-100" : "scale-0"}`}
    >
      <Link
        onClick={() => (document.title = `RizNime - Top Anime`)}
        to="/home/top-anime"
        className={
          Boolean(home || top || spring || summer || fall || winter)
            ? `${navlink} ${navlinkActive}`
            : `${navlink}`
        }
      >
        Home
      </Link>
      <Link
        onClick={() => (document.title = `RizNime - About`)}
        to="/about"
        className={
          Boolean(about) ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        About
      </Link>

      <div className="md:hidden px-4">
        <span className="block w-full h-[1px] bg-grayWhite my-4"></span>
        <HomeNavlink />
      </div>
    </div>
  )
}
