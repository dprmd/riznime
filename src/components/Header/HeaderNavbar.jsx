import { useState } from "react"

// Components
import HeaderNavlink from "./HeaderNavlink"
import HeaderHamburger from "./HeaderHamburger"
import SearchField from "./SearchField"

export default function HeaderNavbar() {
  const [hambActive, setHambActive] = useState(false)

  return (
    <div className="flex justify-center items-center gap-x-6">
      <SearchField />
      <HeaderHamburger hambActive={hambActive} setHambActive={setHambActive} />
      <HeaderNavlink hambActive={hambActive} setHambActive={setHambActive} />
    </div>
  )
}
