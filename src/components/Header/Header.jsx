// Components
import HeaderLogo from "./HeaderLogo"
import HeaderNavbar from "./HeaderNavbar"

export default function Header() {
  return (
    <header className="flex gap-x-4 justify-between items-center bg-black text-white font-poppins px-4 relative">
      <HeaderLogo />
      <HeaderNavbar />
    </header>
  )
}
