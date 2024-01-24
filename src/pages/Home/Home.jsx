import { Outlet } from "react-router-dom"

// Components
import HomeNavlink from "./HomeNavlink"

export default function Home() {
  return (
    <>
      <div className="w-full h-full py-4 min-h-screen">
        <div className="hidden md:flex justify-center items-center">
          <HomeNavlink />
        </div>
        <Outlet />
      </div>
    </>
  )
}
