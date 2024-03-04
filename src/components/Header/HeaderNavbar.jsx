import { useState, useRef } from "react";

// Components
import HeaderNavlink from "./HeaderNavlink";
import HeaderHamburger from "./HeaderHamburger";
import SearchField from "./SearchField";

export default function HeaderNavbar() {
  const [hambActive, setHambActive] = useState(false);
  const searchInput = useRef(null);

  return (
    <div className="flex justify-center items-center gap-x-6">
      <SearchField searchInput={searchInput} setHambActive={setHambActive} />
      <HeaderHamburger
        hambActive={hambActive}
        setHambActive={setHambActive}
        searchInput={searchInput}
      />
      <HeaderNavlink hambActive={hambActive} setHambActive={setHambActive} />
    </div>
  );
}
