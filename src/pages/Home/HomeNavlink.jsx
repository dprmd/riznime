import { NavLink } from "react-router-dom"

export default function HomeNavlink() {
  // Navlink Style
  const navlink = "p-2 mx-2 my-1 font-bold font-inter text-grayWhite"
  const navlinkActive = "text-red-500 border-b-2 border-b-red-600"

  return (
    <nav className="my-4 font-montserrat flex flex-col justify-center items-center md:flex-row">
      <NavLink
        onClick={() => (document.title = `RizNime - Top Anime`)}
        to="/home/top-anime"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Top Anime
      </NavLink>{" "}
      <span className="text-grayWhite">
        <span className="hidden md:inline">|</span>
      </span>
      <NavLink
        onClick={() => (document.title = `RizNime - Winter Anime`)}
        to="/home/winter"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Winter
      </NavLink>
      <span className="text-grayWhite">
        <span className="hidden md:inline">|</span>
      </span>
      <NavLink
        onClick={() => (document.title = `RizNime - Spring Anime`)}
        to="/home/spring"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Spring
      </NavLink>{" "}
      <span className="text-grayWhite">
        <span className="hidden md:inline">|</span>
      </span>
      <NavLink
        onClick={() => (document.title = `RizNime - Summer Anime`)}
        to="/home/summer"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Summer
      </NavLink>{" "}
      <span className="text-grayWhite">
        <span className="hidden md:inline">|</span>
      </span>
      <NavLink
        onClick={() => (document.title = `RizNime - Fall Anime`)}
        to="/home/fall"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Fall
      </NavLink>{" "}
    </nav>
  )
}
