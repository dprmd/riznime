import { NavLink } from "react-router-dom";

export default function HomeAnimeNavlink() {
  // Navlink Style
  const navlink = "p-2 mx-2 my-1 font-bold font-inter text-grayWhite";
  const navlinkActive = "text-red-500 border-b-2 border-b-red-600";

  return (
    <nav className="my-4 font-montserrat flex flex-col justify-center items-center md:flex-row">
      <NavLink
        to="/home/top-manga"
        className={({ isActive }) =>
          isActive ? `${navlink} ${navlinkActive}` : `${navlink}`
        }
      >
        Top Manga
      </NavLink>{" "}
    </nav>
  );
}
