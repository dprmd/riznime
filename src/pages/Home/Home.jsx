import { Outlet } from "react-router-dom"

// Components
import HomeNavlink from "./HomeNavlink"

export default function Home() {
  return (
    <>
      <div className="w-full h-full px-8 py-4 min-h-screen">
        <HomeNavlink />
        <Outlet />
      </div>
    </>
  )
}
