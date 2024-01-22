import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import NotFound from "./pages/NotFound"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home/Home"
import About from "./pages/About"
import Detail from "./pages/Detail"
import TopAnime from "./pages/Anime/TopAnime"
import WinterAnime from "./pages/Anime/WinterAnime"
import SpringAnime from "./pages/Anime/SpringAnime"
import SummerAnime from "./pages/Anime/SummerAnime"
import FallAnime from "./pages/Anime/FallAnime"
import SearchAnime from "./pages/Anime/SearchAnime"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="home" element={<Home />}>
            <Route path="top-anime" element={<TopAnime />} />
            <Route path="winter" element={<WinterAnime />} />
            <Route path="spring" element={<SpringAnime />} />
            <Route path="summer" element={<SummerAnime />} />
            <Route path="fall" element={<FallAnime />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="search/:keyword" element={<SearchAnime />} />
          <Route path="detail/:mal_id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  )
}
